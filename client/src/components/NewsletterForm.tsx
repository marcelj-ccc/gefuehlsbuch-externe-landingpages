/**
 * Stil: Ruhiger Aquarell-Begleitraum. Das Formular ist aktiv: Anmeldungen
 * werden über den FormSubmit-Endpoint als E-Mail an das Postfach
 * info@meinkleinesgefuehlsbuch.de zugestellt.
 *
 * Beide Seiten werden bedient:
 * - Betreiber: erhält Benachrichtigung mit allen Anmeldedaten
 * - Nutzer: erhält automatisch eine Bestätigungsmail (_autoresponder)
 *
 * Sicherheit: Honeypot-Feld, E-Mail-Validierung, Consent-Pflicht.
 * DSGVO: Einwilligung, Datenschutz-Link, Widerrufshinweis direkt am Formular.
 */
import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, LockKeyhole } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { newsletterConfig } from "@/lib/site";

type Status = { kind: "idle" | "success" | "error"; message: string };

export function NewsletterForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });
  const isConnected = Boolean(newsletterConfig.endpoint && newsletterConfig.privacyUrl);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isConnected) {
      setStatus({
        kind: "idle",
        message: "Die Anmeldung wird gerade datenschutzkonform eingerichtet. Bis dahin werden über dieses Formular keine Daten versendet.",
      });
      return;
    }

    if (!consent) {
      setStatus({ kind: "error", message: "Bitte bestätige zuerst die Datenschutzhinweise." });
      return;
    }

    if (honeypot) {
      // Automatisierte Eingabe erkannt – still ignorieren.
      setStatus({ kind: "success", message: "Danke! Deine Anmeldung ist eingegangen." });
      return;
    }

    // E-Mail-Format prüfen
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus({ kind: "error", message: "Bitte gib eine gültige E-Mail-Adresse ein." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ kind: "idle", message: "" });

    try {
      // FormSubmit AJAX-Endpoint:
      // - Sendet Benachrichtigung an info@meinkleinesgefuehlsbuch.de (Betreiber)
      // - _autoresponder sendet automatisch eine Bestätigungsmail an den Nutzer (_replyto)
      const payload = {
        Vorname: firstName.trim() || "(nicht angegeben)",
        "E-Mail": email.trim(),
        Einwilligung: "Ja – Datenschutzhinweise gelesen, Newsletter-Anmeldung bestätigt",
        Zeitpunkt: new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" }),
        // FormSubmit-Steuerfelder
        _replyto: email.trim(),
        _subject: `Neue Newsletter-Anmeldung – Mein kleines Gefühls-Buch${firstName.trim() ? ` (${firstName.trim()})` : ""}`,
        _template: "table",
        _captcha: "false",
        // Autoresponder: Diese Nachricht geht automatisch an den Nutzer (_replyto)
        _autoresponder: `Hallo${firstName.trim() ? ` ${firstName.trim()}` : ""},\n\nvielen Dank für deine Anmeldung zum Newsletter von „Mein kleines Gefühls-Buch"!\n\nWir freuen uns sehr, dich bald mit ausgewählten Gedanken, Gesprächsimpulsen und Neuigkeiten rund ums Buch zu begleiten. Du erhältst unsere Nachrichten nur dann, wenn es wirklich etwas zu teilen gibt – ruhig, liebevoll und ohne Druck.\n\nDu kannst deine Einwilligung jederzeit widerrufen, indem du uns eine kurze Nachricht an info@meinkleinesgefuehlsbuch.de sendest.\n\nHerzliche Grüße,\nEmi Winter\nMein kleines Gefühls-Buch`,
      };

      const response = await fetch(newsletterConfig.endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("newsletter_submit_failed");
      const data = await response.json().catch(() => ({ success: "true" }));
      if (data.success === "false") throw new Error("newsletter_submit_rejected");

      setStatus({
        kind: "success",
        message:
          "Danke für deine Anmeldung! Du erhältst in Kürze eine Bestätigungsmail. Bitte prüfe auch deinen Spam-Ordner.",
      });
      setFirstName("");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus({
        kind: "error",
        message:
          "Das hat gerade nicht geklappt. Bitte versuche es in wenigen Minuten noch einmal oder schreibe uns direkt an info@meinkleinesgefuehlsbuch.de.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.55rem] border border-white/90 bg-white/88 p-6 shadow-[0_18px_45px_rgba(73,95,109,0.12)] sm:p-8" noValidate>
      <div className="mb-6 flex items-start gap-3 rounded-2xl bg-[#F4F9FC] px-4 py-3 text-sm leading-relaxed text-[#4B6677]">
        <LockKeyhole className="mt-0.5 size-4 shrink-0 text-[#4A8BCE]" aria-hidden="true" />
        <p>
          {isConnected
            ? "Deine Anmeldung wird verschlüsselt übertragen. Du erhältst anschließend automatisch eine Bestätigungsmail direkt in dein Postfach."
            : "Der Versanddienst wird vor dem ersten Versand verbindlich eingerichtet."}
        </p>
      </div>

      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-extrabold text-[#3E4854]">
          Vorname <span className="font-medium text-[#737B83]">(optional)</span>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            disabled={!isConnected || isSubmitting}
            autoComplete="given-name"
            className="h-12 rounded-xl border border-[#D6DCD4] bg-[#FFFEFC] px-4 text-base font-medium outline-none transition placeholder:text-[#9BA4AA] focus:border-[#4A8BCE] focus:ring-4 focus:ring-[#4A8BCE]/15 disabled:cursor-not-allowed disabled:bg-[#F7F3EE]"
            placeholder="Wie dürfen wir dich ansprechen?"
          />
        </label>

        {/* Honeypot-Feld gegen Spam-Bots – für Menschen unsichtbar */}
        <input
          type="text"
          name="_honey"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <label className="grid gap-2 text-sm font-extrabold text-[#3E4854]">
          E-Mail-Adresse <span className="text-[#E56B42]">*</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={!isConnected || isSubmitting}
            autoComplete="email"
            className="h-12 rounded-xl border border-[#D6DCD4] bg-[#FFFEFC] px-4 text-base font-medium outline-none transition placeholder:text-[#9BA4AA] focus:border-[#4A8BCE] focus:ring-4 focus:ring-[#4A8BCE]/15 disabled:cursor-not-allowed disabled:bg-[#F7F3EE]"
            placeholder="name@beispiel.de"
          />
        </label>

        <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-[#FFF6F0] px-4 py-4 text-sm leading-relaxed text-[#59616B]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            disabled={!isConnected || isSubmitting}
            className="mt-0.5 size-4 rounded border-[#B8C8C0] accent-[#4A8BCE] disabled:cursor-not-allowed"
          />
          <span>
            Ich habe die{" "}
            <Link
              href={newsletterConfig.privacyUrl}
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-2 hover:text-[#2D699F]"
            >
              Datenschutzhinweise
            </Link>{" "}
            gelesen und möchte den Newsletter erhalten. Meine Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen, z. B. per E-Mail an{" "}
            <a href="mailto:info@meinkleinesgefuehlsbuch.de" className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-2 hover:text-[#2D699F]">
              info@meinkleinesgefuehlsbuch.de
            </a>
            .
          </span>
        </label>

        <Button
          type="submit"
          size="lg"
          disabled={!isConnected || isSubmitting || !consent}
          className="h-13 rounded-xl bg-[#E56B42] px-6 text-base font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.22)] transition hover:bg-[#CC5932] active:scale-[0.98] disabled:bg-[#EAB09B] disabled:shadow-none"
        >
          {isSubmitting ? <Loader2 className="size-5 animate-spin" aria-hidden="true" /> : null}
          {isConnected ? "Newsletter anmelden" : "Anmeldung wird vorbereitet"}
        </Button>

        {status.message ? (
          <p
            aria-live="polite"
            className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm leading-relaxed ${
              status.kind === "success" ? "bg-[#EDF8F1] text-[#3C7652]" : status.kind === "error" ? "bg-[#FFF0EE] text-[#B54E37]" : "bg-[#F4F9FC] text-[#4B6677]"
            }`}
          >
            {status.kind === "success" ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> : null}
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
