/**
 * Stil: Ruhiger Aquarell-Begleitraum. Datenschutzerklärung nach Art. 13 DSGVO.
 * Beschreibt ausschließlich die tatsächlich stattfindenden Verarbeitungen:
 * GitHub-Pages-Hosting, lokal gehostete Schriften, Theme-Speicherung im
 * Browser und die Newsletter-Anmeldung über FormSubmit mit E-Mail-Zustellung.
 */
import { LegalPage } from "@/components/LegalPage";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-semibold text-[#3372AF]">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-5 text-lg font-extrabold text-[#3E4854]">{children}</h3>;
}

export default function Datenschutz() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      intro="Transparente Informationen nach Art. 13 DSGVO darüber, welche Daten auf dieser Website verarbeitet werden – in klarer, verständlicher Sprache."
    >
      <div className="space-y-9 leading-relaxed text-[#4B545E]">
        <section>
          <H2>1. Verantwortliche</H2>
          <p className="mt-3">
            Emi Winter, c/o Authors&rsquo; Dreams, Am Krummgewann 22, 64625 Bensheim, Deutschland
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@meinkleinesgefuehlsbuch.de"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              info@meinkleinesgefuehlsbuch.de
            </a>
          </p>
          <p className="mt-2 text-sm text-[#737B83]">
            Ein Datenschutzbeauftragter ist nicht benannt, da hierfür keine gesetzliche Pflicht
            besteht.
          </p>
        </section>

        <section>
          <H2>2. Hosting (GitHub Pages)</H2>
          <p className="mt-3">
            Diese Website wird als statische Seite über GitHub Pages bereitgestellt, einen Dienst
            der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim
            Aufruf der Website verarbeitet GitHub technisch notwendige Verbindungsdaten,
            insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite
            sowie Browser- und Betriebssysteminformationen (Server-Logfiles). Diese Verarbeitung
            ist für die Auslieferung und die technische Sicherheit der Website erforderlich.
          </p>
          <p className="mt-3">
            Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und zuverlässigen
            Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). GitHub ist unter dem EU-US Data
            Privacy Framework zertifiziert; die Übermittlung in die USA stützt sich auf den
            Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO). Weitere Informationen:{" "}
            <a
              href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              GitHub Privacy Statement
            </a>
            . Die Speicherdauer der Logdaten richtet sich nach den Vorgaben von GitHub.
          </p>
        </section>

        <section>
          <H2>3. Schriften und Bilder</H2>
          <p className="mt-3">
            Alle Schriftarten (Atma, Nunito) werden lokal von dieser Website geladen. Es findet
            keine Verbindung zu Google-Fonts-Servern statt. Die Illustrationen der Website werden
            über GitHub (siehe Ziffer 2) ausgeliefert; dabei gelten dieselben technischen
            Verbindungsdaten wie beim Seitenaufruf.
          </p>
        </section>

        <section>
          <H2>4. Newsletter-Anmeldung</H2>
          <H3>Umfang und Zweck</H3>
          <p className="mt-2">
            Für die Newsletter-Anmeldung verarbeiten wir deine E-Mail-Adresse sowie optional
            deinen Vornamen. Die Angaben nutzen wir ausschließlich, um dir Neuigkeiten und
            Impulse rund um &bdquo;Mein kleines Gefühls-Buch&ldquo; zu senden.
          </p>
          <H3>Rechtsgrundlage und Einwilligung</H3>
          <p className="mt-2">
            Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a
            DSGVO), die du über die Checkbox am Formular erteilst. Nach der Anmeldung erhältst du
            eine Bestätigungs-E-Mail (Double-Opt-in); erst mit deiner Bestätigung wird die
            Anmeldung wirksam. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen, z.&nbsp;B. per E-Mail an{" "}
            <a
              href="mailto:info@meinkleinesgefuehlsbuch.de"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              info@meinkleinesgefuehlsbuch.de
            </a>{" "}
            oder über den Abmeldehinweis in jeder Newsletter-E-Mail.
          </p>
          <H3>Technische Übermittlung (FormSubmit)</H3>
          <p className="mt-2">
            Die Formulardaten werden über den Dienst FormSubmit (formsubmit.co) verschlüsselt an
            unser E-Mail-Postfach info@meinkleinesgefuehlsbuch.de übermittelt. FormSubmit
            verarbeitet die übermittelten Daten dabei als technischer Dienstleister und hält
            Übermittlungen bis zu 30 Tage in einem Übermittlungsarchiv vor; eine Übermittlung in
            Drittländer (insbesondere die USA) ist dabei möglich. Rechtsgrundlage hierfür ist
            deine ausdrückliche Einwilligung (Art. 6 Abs. 1 lit. a, Art. 49 Abs. 1 lit. a DSGVO).
          </p>
          <H3>Speicherdauer</H3>
          <p className="mt-2">
            Deine Anmeldedaten speichern wir, solange du den Newsletter beziehst. Nach einem
            Widerruf löschen wir deine Daten unverzüglich, soweit keine gesetzlichen
            Aufbewahrungspflichten bestehen. Den Nachweis deiner Einwilligung bewahren wir zur
            Erfüllung unserer Rechenschaftspflicht (Art. 5 Abs. 2 DSGVO) auf.
          </p>
        </section>

        <section>
          <H2>5. Lokale Speicherung im Browser</H2>
          <p className="mt-3">
            Diese Website verwendet keine Cookies zu Analyse-, Tracking- oder Werbezwecken. Es
            wird lediglich eine technisch notwendige Einstellung (Darstellungsmodus) im lokalen
            Speicher deines Browsers (localStorage) abgelegt. Diese Information verlässt deinen
            Browser nicht und ist für den Betrieb der Website erforderlich (§ 25 Abs. 2 Nr. 2
            TDDDG); ein Einwilligungsbanner ist daher nicht erforderlich.
          </p>
        </section>

        <section>
          <H2>6. Externe Links</H2>
          <p className="mt-3">
            Unsere Website verlinkt auf externe Angebote, insbesondere auf Amazon (Buchkauf) und
            auf unsere Hauptseite. Beim Anklicken dieser Links verlässt du unsere Website; es
            gelten die Datenschutzhinweise des jeweiligen Anbieters. Allein durch das Betrachten
            unserer Website werden keine Daten an diese Anbieter übertragen.
          </p>
        </section>

        <section>
          <H2>7. Deine Rechte</H2>
          <p className="mt-3">
            Du hast gegenüber uns folgende Rechte hinsichtlich deiner personenbezogenen Daten:
            Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17
            DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20
            DSGVO) sowie Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen
            (Art. 21 DSGVO). Erteilte Einwilligungen kannst du jederzeit mit Wirkung für die
            Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).
          </p>
          <p className="mt-3">
            Du hast zudem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
            (Art. 77 DSGVO). Für Hessen ist dies der Hessische Beauftragte für Datenschutz und
            Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.
          </p>
        </section>

        <section>
          <H2>8. Erforderlichkeit der Bereitstellung</H2>
          <p className="mt-3">
            Die Bereitstellung deiner Daten ist weder gesetzlich noch vertraglich vorgeschrieben.
            Ohne die Angabe deiner E-Mail-Adresse können wir dir jedoch keinen Newsletter senden.
            Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.
          </p>
        </section>

        <p className="text-sm text-[#737B83]">Stand: Juli 2026</p>
      </div>
    </LegalPage>
  );
}
