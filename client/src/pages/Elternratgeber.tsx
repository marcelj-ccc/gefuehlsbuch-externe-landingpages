import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/PageShell";
import { SeoHead } from "@/components/SeoHead";
import { site } from "@/lib/site";

type Guide = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  steps: Array<{ title: string; text: string }>;
  question: string;
  answer: string;
};

const guides: Record<string, Guide> = {
  "/wut-bei-kindern": {
    path: "/wut-bei-kindern",
    eyebrow: "Kindergefühle im Alltag",
    title: "Was hilft Kindern bei Wut? Drei ruhige Schritte für den Moment.",
    description: "Alltagsnahe Impulse für Eltern: Wut bei Kindern begleiten, Gefühle benennen und danach wieder ins Gespräch kommen.",
    intro: "Wut kann laut, schnell und anstrengend sein. Gerade dann hilft kein perfekter Satz, sondern ein ruhiger Rahmen: erst Sicherheit, dann Worte und anschließend ein kleiner gemeinsamer Schritt.",
    steps: [
      { title: "Erst den Moment halten", text: "Bleib in der Nähe und sorge dafür, dass niemand verletzt wird. Wenige ruhige Worte sind in diesem Augenblick oft hilfreicher als viele Erklärungen." },
      { title: "Das Gefühl in Worte fassen", text: "Ein Satz wie „Du bist gerade richtig wütend“ kann Kindern helfen, das eigene Erleben einzuordnen, ohne dass die Wut abgewertet wird." },
      { title: "Später neugierig zurückschauen", text: "Wenn wieder Ruhe da ist, frage klein und offen: „Was war heute besonders schwer?“ Eine Zeichnung oder Farbauswahl kann dabei den Einstieg erleichtern." },
    ],
    question: "Muss Wut sofort aufhören?",
    answer: "Nein. Ziel ist nicht, ein Gefühl schnell wegzumachen, sondern es sicher zu begleiten. Nach dem Moment kann ein Gespräch helfen, Auslöser und nächste Schritte gemeinsam zu verstehen.",
  },
  "/gefuehle-benennen": {
    path: "/gefuehle-benennen",
    eyebrow: "Gefühle benennen lernen",
    title: "Gefühle bei Kindern benennen: Kleine Worte für große innere Erlebnisse.",
    description: "Wie Eltern Kinder dabei unterstützen können, Gefühle zu benennen und ohne Leistungsdruck ins Gespräch zu kommen.",
    intro: "Kinder erleben Gefühle oft zuerst im Körper oder in einer Situation. Worte wachsen leichter, wenn Erwachsene aufmerksam beobachten, einfache Begriffe anbieten und nicht auf die perfekte Antwort warten.",
    steps: [
      { title: "Beim Konkreten beginnen", text: "Statt nach einer großen Erklärung zu fragen, knüpfe an einen Moment an: „Dein Gesicht sieht gerade ganz enttäuscht aus. Passt das?“" },
      { title: "Mehr als ein Gefühl zulassen", text: "Manchmal können Freude und Aufregung, Wut und Traurigkeit gleichzeitig da sein. Es ist in Ordnung, wenn eine Antwort erst einmal unklar bleibt." },
      { title: "Bilder und Farben nutzen", text: "Farben, kleine Figuren oder eine Seite zum Malen geben Kindern eine zusätzliche Ausdrucksmöglichkeit, wenn ihnen Worte noch fehlen." },
    ],
    question: "Welche Gefühle sollten Kinder kennen?",
    answer: "Es gibt keine feste Liste, die ein Kind auswendig können muss. Hilfreich sind alltagsnahe Worte wie froh, traurig, wütend, ängstlich, stolz, enttäuscht oder erleichtert – immer passend zur konkreten Situation.",
  },
  "/abendritual-mit-kindern": {
    path: "/abendritual-mit-kindern",
    eyebrow: "Gemeinsam zur Ruhe kommen",
    title: "Ein Abendritual mit Kindern: Drei Fragen für mehr Verbindung vor dem Schlafen.",
    description: "Ein ruhiges Abendritual für Familien: Mit drei offenen Fragen Gefühle und schöne Momente des Tages gemeinsam anschauen.",
    intro: "Ein Abendritual braucht nicht viel Zeit. Ein wiederkehrender, ruhiger Moment kann Kindern und Erwachsenen helfen, den Tag ohne Bewertung anzuschauen und mit Verbindung ausklingen zu lassen.",
    steps: [
      { title: "Was war heute schön?", text: "Eine konkrete schöne Erinnerung schafft einen leichten Einstieg und macht sichtbar, was dem Kind wichtig war." },
      { title: "Was war heute schwer?", text: "Die Frage darf offen bleiben. Auch ein Schulterzucken ist eine Antwort. Wichtig ist, dass das Kind merkt: Schwieriges darf angesprochen werden." },
      { title: "Was wünschst du dir für morgen?", text: "Ein kleiner Wunsch oder eine Idee für den nächsten Tag lenkt den Blick behutsam nach vorn und kann Sicherheit geben." },
    ],
    question: "Wie lang sollte ein Abendritual sein?",
    answer: "Kurz und wiederholbar ist oft besser als aufwendig. Schon fünf ruhige Minuten können reichen, wenn sie regelmäßig stattfinden und zu eurem Familienalltag passen.",
  },
};

export default function Elternratgeber() {
  const [location] = useLocation();
  const guide = guides[location] ?? guides["/gefuehle-benennen"];

  return (
    <PageShell>
      <SeoHead title={`${guide.title} | Mein kleines Gefühls-Buch`} description={guide.description} path={guide.path} type="article" />
      <article className="mx-auto max-w-4xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10">
        <p className="inline-flex rounded-full bg-[#F4F9FC] px-4 py-2 text-sm font-extrabold text-[#3372AF] shadow-sm">{guide.eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em] text-[#3372AF] sm:text-6xl">{guide.title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#58616B] sm:text-xl">{guide.intro}</p>

        <section className="paper-chapter mt-12 rounded-[2rem] p-6 sm:p-9" aria-labelledby="alltagsideen">
          <h2 id="alltagsideen" className="font-display text-3xl font-semibold tracking-[-0.02em] text-[#3372AF] sm:text-4xl">Alltagsideen, die klein anfangen dürfen.</h2>
          <div className="mt-7 grid gap-5">
            {guide.steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/90 bg-white/70 p-5 shadow-[0_10px_25px_rgba(88,83,67,0.06)]">
                <div className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#EAF4FA] font-extrabold text-[#3372AF]">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#3372AF]">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#59616B]">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-[linear-gradient(135deg,#FDF6EE_0%,#F2F9FC_100%)] p-7 sm:p-9" aria-labelledby="fragen-antworten">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#E56B42]" aria-hidden="true" />
            <div>
              <h2 id="fragen-antworten" className="font-display text-3xl font-semibold text-[#3372AF]">{guide.question}</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-[#59616B]">{guide.answer}</p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid items-center gap-7 rounded-[2rem] bg-[#EAF4FA] p-7 sm:grid-cols-[0.7fr_1.3fr] sm:p-9">
          <img src={site.assets.cover} alt="Echtes Cover von Mein kleines Gefühls-Buch" className="mx-auto w-40 rounded-[1.25rem] shadow-[0_16px_34px_rgba(88,83,67,0.16)]" />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#4A8BCE]">Weiterlesen & gemeinsam entdecken</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-none text-[#3372AF]">Mein kleines Gefühls-Buch</h2>
            <p className="mt-4 leading-relaxed text-[#59616B]">Das Buch verbindet Bilder, Fragen und kreative Seiten, damit Gespräche über Gefühle im eigenen Tempo entstehen können.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-xl bg-[#E56B42] font-extrabold text-white hover:bg-[#CC5932]"><Link href="/leseprobe">Leseprobe öffnen <BookOpen className="size-4" aria-hidden="true" /></Link></Button>
              <Button asChild variant="outline" className="rounded-xl border-[#A8C8DE] bg-white/80 font-extrabold text-[#3372AF] hover:bg-white"><a href={site.amazonBook} target="_blank" rel="noreferrer">Buch ansehen <ArrowRight className="size-4" aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
