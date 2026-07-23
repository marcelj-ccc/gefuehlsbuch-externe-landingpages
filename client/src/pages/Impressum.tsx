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
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Anbieterin</h2>
          <p className="mt-3 flex items-start gap-3">
            <MapPin className="mt-1 size-4 shrink-0 text-[#4A8BCE]" aria-hidden="true" />
            <span>
              Emi Winter
              <br />
              c/o Authors&rsquo; Dreams
              <br />
              Am Krummgewann 22
              <br />
              64625 Bensheim
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
              href="mailto:info@meinkleinesgefuehlsbuch.de"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              info@meinkleinesgefuehlsbuch.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Identifikationsnummer</h2>
          <p className="mt-3">IHK-Identifikationsnummer: 0060201524</p>
          <p className="mt-2 text-sm text-[#737B83]">
            Eine Umsatzsteuer-Identifikationsnummer nach § 27a UStG sowie ein Handelsregistereintrag
            bestehen derzeit nicht.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">
            Emi Winter
            <br />
            c/o Authors&rsquo; Dreams, Am Krummgewann 22, 64625 Bensheim
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-[#3372AF]">Urheberrecht</h2>
          <p className="mt-3">
            Alle Inhalte dieser Website, insbesondere Texte, Illustrationen und Bilder rund um
            &bdquo;Mein kleines Gefühls-Buch&ldquo;, unterliegen dem deutschen Urheberrecht. Jede
            Verwendung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen
            Zustimmung der Anbieterin.
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
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </LegalPage>
  );
}
