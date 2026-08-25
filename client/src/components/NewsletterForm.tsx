/**
 * Stil: Ruhiger Aquarell-Begleitraum. Die Anmeldung wird an den eigenen,
 * kostenlosen Apps-Script-Endpunkt übermittelt. Dieser versendet die
 * Bestätigung an die anmeldende Person und die Betreiberbenachrichtigung.
 */
import { FormEvent, useEffect, useState } from "react";
import { CheckCircle2, Loader2, LockKeyhole } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { newsletterConfig } from "@/lib/site";

type Status = { kind: "idle" | "success" | "error"; message: string };
type DeliveryMessage = {
  type?: string;
  ok?: boolean;
  error?: "invalid_submission" | "daily_limit" | "delivery_failed";
};

const DELIVERY_ORIGINS = new Set([
  "https://script.google.com",
  "https://script.googleusercontent.com",
]);

export function NewsletterForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });
  const isConnected = Boolean(newsletterConfig.endpoint && newsletterConfig.privacyUrl);

  useEffect(() => {
    function onDeliveryMessage(event: MessageEvent<DeliveryMessage>) {
      if (!DELIVERY_ORIGINS.has(event.origin) || event.data?.type !== "newsletter-delivery") return;

      setIsSubmitting(false);
      if (event.data.ok) {
        setFirstName("");
        setEmail("");
        setHoneypot("");
        setConsent(false);
        setStatus({
          kind: "success",
          message: "Danke für deine Anmeldung! Deine Bestätigungsmail wurde soeben an dein Postfach gesendet. Bitte prüfe bei Bedarf auch deinen Spam-Ordner.",
        });
        return;
      }

      const message =
        event.data.error === "daily_limit"
          ? "Die Anmeldung ist heute vorübergehend nicht möglich. Bitte versuche es morgen erneut."
          : event.data.error === "invalid_submission"
            ? "Bitte prüfe deine Angaben und bestätige die Datenschutzhinweise."
            : "Die Bestätigungsmail konnte gerade nicht versendet werden. Bitte versuche es in wenigen Minuten erneut.";
      setStatus({ kind: "error", message });
    }

    window.addEventListener("message", onDeliveryMessage);
    return () => window.removeEventListener("message", onDeliveryMessage);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!isConnected) {
      event.preventDefault();
      setStatus({
        kind: "idle",
        message: "Die Anmeldung wird gerade datenschutzkonform eingerichtet. Bis dahin werden über dieses Formular keine Daten versendet.",
      });
      return;
    }

    if (!consent) {
      event.preventDefault();
      setStatus({ kind: "error", message: "Bitte bestätige zuerst die Datenschutzhinweise." });
      return;
    }

    if (honeypot) {
      event.preventDefault();
      // Automatisierte Eingabe erkannt – keine Daten und keine E-Mail versenden.
      setStatus({ kind: "success", message: "Danke! Deine Anmeldung ist eingegangen." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      event.preventDefault();
      setStatus({ kind: "error", message: "Bitte gib eine gültige E-Mail-Adresse ein." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ kind: "idle", message: "" });
  }

  return (
    <form
      action={newsletterConfig.endpoint}
      method="POST"
      target="newsletter-delivery-frame"
      onSubmit={onSubmit}
      className="rounded-[1.55rem] border border-white/90 bg-white/88 p-6 shadow-[0_18px_45px_rgba(73,95,109,0.12)] sm:p-8"
      noValidate
    >
      <iframe name="newsletter-delivery-frame" title="Newsletter-Versandstatus" className="hidden" aria-hidden="true" />

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
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            disabled={!isConnected || isSubmitting}
            autoComplete="given-name"
            className="h-12 rounded-xl border border-[#D6DCD4] bg-[#FFFEFC] px-4 text-base font-medium outline-none transition placeholder:text-[#9BA4AA] focus:border-[#4A8BCE] focus:ring-4 focus:ring-[#4A8BCE]/15 disabled:cursor-not-allowed disabled:bg-[#F7F3EE]"
            placeholder="Wie dürfen wir dich ansprechen?"
          />
        </label>

        <input
          type="text"
          name="website"
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
            name="email"
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
            name="consent"
            value="yes"
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
