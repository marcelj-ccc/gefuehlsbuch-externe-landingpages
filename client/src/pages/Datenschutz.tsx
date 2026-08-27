/**
 * Datenschutzerklärung nach Art. 13 DSGVO. Sie beschreibt die im aktuellen
 * Auftritt tatsächlich feststellbaren Verarbeitungen auf der Originaldomain
 * und in der eingebetteten GitHub-Pages-Anwendung.
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
          <H2>1. Verantwortlicher</H2>
          <p className="mt-3">
            Marcel Warnecke, handelnd unter dem Künstlernamen Emi Winter, c/o Authors&rsquo; Dreams,
            Am Krummgewann 22, 64625 Bensheim, Deutschland
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
          <H2>2. Technische Bereitstellung der Website</H2>
          <H3>Originaldomain und Webador</H3>
          <p className="mt-2">
            Die Originaldomain <strong>www.meinkleinesgefuehlsbuch.de</strong> wird technisch über
            Webador beziehungsweise JouwWeb B.V., Torenallee 20, 5617 BC Eindhoven, Niederlande,
            bereitgestellt. Beim Aufruf verarbeitet Webador technisch notwendige Verbindungsdaten,
            insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite sowie Browser-
            und Betriebssysteminformationen. Webador setzt für den technischen Betrieb unter anderem
            Session-Cookies und führt Server-Protokolle. Webador bindet auf der Originaldomain außerdem Plausible Analytics zur datenschutzfreundlichen Reichweitenmessung ein. Nach Angaben von Plausible werden dabei keine Cookies oder dauerhaften Kennungen gesetzt; die Roh-IP-Adresse wird nicht gespeichert, und die Verarbeitung findet auf Infrastruktur innerhalb der Europäischen Union statt. Weitere Informationen dazu findest du in der <a href="https://plausible.io/data-policy" target="_blank" rel="noreferrer" className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]">Plausible-Datenrichtlinie</a>.
          </p>
          <p className="mt-2">
            Rechtsgrundlage für die technisch erforderliche Bereitstellung ist Art. 6 Abs. 1 lit. f
            DSGVO. Einzelheiten zu Cookies, Protokolldaten und Speicherfristen findest du in den{" "}
            <a
              href="https://www.webador.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              Datenschutzinformationen von Webador
            </a>
            .
          </p>
          <H3>Eingebettete GitHub-Pages-Anwendung</H3>
          <p className="mt-2">
            Der auf der Originaldomain angezeigte Buchauftritt mit Leseprobe, Newsletter sowie diesen
            Rechtstexten wird als eingebettete Anwendung über GitHub Pages bereitgestellt, einen Dienst
            der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf
            verarbeitet GitHub technisch notwendige Verbindungsdaten, insbesondere IP-Adresse, Datum
            und Uhrzeit des Zugriffs, aufgerufene Seite sowie Browser- und Betriebssysteminformationen.
          </p>
          <p className="mt-2">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Speicherdauer richtet sich nach den
            Vorgaben von GitHub. GitHub ist für das EU-US Data Privacy Framework zertifiziert;
            Informationen zu Datenübermittlungen und Schutzmaßnahmen findest du im{" "}
            <a
              href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              GitHub Privacy Statement
            </a>
            .
          </p>
        </section>

        <section>
          <H2>3. Kontaktformular auf der Originaldomain</H2>
          <p className="mt-3">
            Wenn du das Kontaktformular auf der Originaldomain nutzt, verarbeiten wir die von dir
            eingegebenen Daten, insbesondere E-Mail-Adresse und Nachricht, um deine Anfrage zu
            bearbeiten und gegebenenfalls Anschlussfragen zu beantworten. Die Formulareingabe wird über
            Webador verarbeitet, im Webador-Editor bereitgestellt und zusätzlich an unser E-Mail-
            Postfach übermittelt.
          </p>
          <p className="mt-2">
            Zur Abwehr automatisierter Eingaben ist im Formular Google reCAPTCHA eingebunden. Dabei
            können technische Nutzungs- und Verbindungsdaten an Google übermittelt werden. Rechtsgrundlage
            für die Bearbeitung einer Anfrage ist je nach Inhalt Art. 6 Abs. 1 lit. b DSGVO oder unser
            berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an einer sicheren und effizienten
            Bearbeitung von Anfragen sowie am Schutz vor Missbrauch. Anfragen löschen wir, sobald sie
            für die Bearbeitung und mögliche Anschlussfragen nicht mehr erforderlich sind, sofern keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
          <p className="mt-2">
            Weitere Informationen zur Verarbeitung durch Google findest du in den{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              Google-Datenschutzinformationen
            </a>
            .
          </p>
        </section>

        <section>
          <H2>4. Schriften, Bilder und Downloads</H2>
          <p className="mt-3">
            Die Schriftarten Atma und Nunito werden mit der GitHub-Pages-Anwendung ausgeliefert. Es
            findet keine Verbindung zu Google-Fonts-Servern statt. Die Illustrationen und die PDF-
            Leseprobe werden über veröffentlichte GitHub-Dateien bereitgestellt; hierfür gelten dieselben
            technisch notwendigen Verbindungsdaten wie unter Ziffer 2 beschrieben.
          </p>
        </section>

        <section>
          <H2>5. Newsletter-Anmeldung</H2>
          <H3>Umfang und Zweck</H3>
          <p className="mt-2">
            Für die Newsletter-Anmeldung verarbeiten wir deine E-Mail-Adresse sowie optional deinen
            Vornamen. Die Daten verwenden wir ausschließlich, um deine Anmeldung zu bearbeiten, dir
            eine Bestätigungs-E-Mail zu senden und dir auf Grundlage deiner Einwilligung Neuigkeiten
            und Impulse rund um &bdquo;Mein kleines Gefühls-Buch&ldquo; zu senden.
          </p>
          <H3>Rechtsgrundlage und Bestätigung</H3>
          <p className="mt-2">
            Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung nach Art. 6 Abs. 1 lit. a
            DSGVO, die du über die Checkbox am Formular erteilst. Die Newsletter-Anmeldung wird durch
            einen Bestätigungsprozess abgesichert. Du kannst deine Einwilligung jederzeit mit Wirkung
            für die Zukunft widerrufen.
          </p>
          <H3>Technische Übermittlung über Google Apps Script</H3>
          <p className="mt-2">
            Die Formulardaten werden verschlüsselt an einen eigenen Versandendpunkt auf Google Apps
            Script übermittelt. Für dessen technische Bereitstellung ist Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Irland, zuständig; eine Verarbeitung durch Google LLC in
            den USA kann dabei nicht ausgeschlossen werden. Google verarbeitet die Daten zur Ausführung
            des Bestätigungs- und Versandprozesses. Google LLC ist unter dem EU-US Data Privacy Framework
            zertifiziert. Weitere Informationen findest du in den{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              Google-Datenschutzinformationen
            </a>{" "}
            und in den{" "}
            <a
              href="https://policies.google.com/privacy/frameworks?hl=de"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              Informationen zu Datenübermittlungen
            </a>
            .
          </p>
          <H3>Speicherdauer, Widerruf und E-Mail-Inhalte</H3>
          <p className="mt-2">
            Anmeldedaten speichern wir, solange du den Newsletter beziehst. Nach einem Widerruf löschen
            wir die Daten unverzüglich, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            Den Nachweis der Einwilligung bewahren wir nur so lange auf, wie dies zur Erfüllung unserer
            Rechenschaftspflicht erforderlich ist. Die Bestätigungs-E-Mail enthält keine Tracking-Pixel
            oder vergleichbare Öffnungs- beziehungsweise Klickmessungen. Deinen Widerruf kannst du
            jederzeit mit Wirkung für die Zukunft per E-Mail an{" "}
            <a
              href="mailto:info@meinkleinesgefuehlsbuch.de"
              className="font-bold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 hover:text-[#2D699F]"
            >
              info@meinkleinesgefuehlsbuch.de
            </a>{" "}
            erklären.
          </p>
        </section>

        <section>
          <H2>6. Cookies und Speichertechnologien</H2>
          <p className="mt-3">
            Die GitHub-Pages-Anwendung setzt keine eigenen Cookies, Analyse-, Tracking- oder
            Werbetechnologien und verwendet keinen eigenen Browser-Speicher. Auf der Originaldomain
            setzt Webador jedoch technisch erforderliche Cookies, insbesondere Session-Cookies, und
            verarbeitet Protokolldaten. Das auf der Originaldomain angezeigte Cookie-Hinweisfenster
            bezieht sich auf die Webador-Umgebung. Zusätzliche nicht erforderliche Drittanbieter-
            Technologien werden über die GitHub-Pages-Anwendung nicht eingesetzt.
          </p>
        </section>

        <section>
          <H2>7. Externe Links</H2>
          <p className="mt-3">
            Die Website enthält einen Link zu Amazon, über den das Buch erworben werden kann. Erst beim
            Anklicken dieses Links verlässt du unsere Website. Für die Zielseite gelten die
            Datenschutzhinweise des jeweiligen Anbieters; allein durch das Betrachten der GitHub-Pages-
            Anwendung werden keine Daten an Amazon übermittelt.
          </p>
        </section>

        <section>
          <H2>8. Deine Rechte</H2>
          <p className="mt-3">
            Du hast gegenüber uns das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16
            DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
            Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen Verarbeitungen auf Grundlage
            berechtigter Interessen (Art. 21 DSGVO). Erteilte Einwilligungen kannst du jederzeit mit
            Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).
          </p>
          <p className="mt-3">
            Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
            (Art. 77 DSGVO), insbesondere bei der Aufsichtsbehörde deines gewöhnlichen Aufenthaltsorts,
            deines Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
          </p>
        </section>

        <section>
          <H2>9. Erforderlichkeit der Bereitstellung</H2>
          <p className="mt-3">
            Die Bereitstellung deiner Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne
            die Angabe deiner E-Mail-Adresse können wir dir keine Newsletter-Bestätigung und keinen
            Newsletter senden. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet
            nicht statt.
          </p>
        </section>

        <p className="text-sm text-[#737B83]">Stand: 27. August 2026</p>
      </div>
    </LegalPage>
  );
}
