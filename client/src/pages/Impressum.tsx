/**
 * Stil: Ruhiger Aquarell-Begleitraum. Impressum nach § 5 DDG mit den vom
 * Betreiber angegebenen Anbieterdaten; zusätzlich Verantwortliche i. S. d.
 * § 18 Abs. 2 MStV für die redaktionellen Inhalte der Buch-Website.
 */
import { Mail, MapPin } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export default function Impressum() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
    >
      <div className="space-y-8 leading-relaxed text-[#4B545E]">
        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Anbieter</h2>
          <p className="mt-3 flex items-start gap-3">
            <MapPin className="mt-1 size-4 shrink-0 text-[#4A8BCE]" aria-hidden="true" />
            <span>
              delacruzoriginals &ndash; Marcel Warnecke
              <br />
              c/o Online-Impressum.de #10588
              <br />
              Europaring 90
              <br />
              53757 Sankt Augustin
              <br />
              Deutschland
            </span>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Kontakt</h2>
          <p className="mt-3 flex items-start gap-3">
            <Mail className="mt-1 size-4 shrink-0 text-[#4A8BCE]" aria-hidden="true" />
            <a
              href="mailto:delacruzoriginals@mail.online-impressum.de"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              delacruzoriginals@mail.online-impressum.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Zweiter Kontaktweg</h2>
          <p className="mt-3 flex items-start gap-3">
            <Mail className="mt-1 size-4 shrink-0 text-[#4A8BCE]" aria-hidden="true" />
            <a
              href="mailto:info@meinkleinesgefuehlsbuch.de"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              info@meinkleinesgefuehlsbuch.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">
            Wirtschafts-Identifikationsnummer
          </h2>
          <p className="mt-2">DE464220613</p>
          <p className="mt-2 text-sm text-[#737B83]">
            Kein Umsatzsteuerausweis aufgrund der Anwendung der Kleinunternehmerregelung gemäß
            § 19 UStG.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">
            Zuständige Aufsichtsbehörde
          </h2>
          <p className="mt-3">
            Niedersächsische Landesmedienanstalt (NLM)
            <br />
            Seelhorststraße 18
            <br />
            30175 Hannover
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">
            Marcel Warnecke
            <br />
            c/o Online-Impressum.de #10588, Europaring 90, 53757 Sankt Augustin
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Urheberrecht</h2>
          <p className="mt-3">
            Alle Inhalte dieser Website, insbesondere Texte, Illustrationen und Bilder rund um
            &bdquo;Mein kleines Gefühls-Buch&ldquo;, unterliegen dem deutschen Urheberrecht. Jede
            Verwendung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen
            Zustimmung des Anbieters.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Haftung für Links</h2>
          <p className="mt-3">
            Diese Website enthält Links zu externen Websites Dritter (z.&nbsp;B. Amazon), auf deren
            Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
            Rechtsverstöße erkennbar; bei Bekanntwerden von Rechtsverletzungen entfernen wir
            derartige Links umgehend.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">
            Verbraucherstreitbeilegung
          </h2>
          <p className="mt-3">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
          </p>
        </section>
      </div>
    </LegalPage>
  );
}
