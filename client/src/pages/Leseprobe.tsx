/**
 * Stil: Ruhiger Aquarell-Begleitraum. Diese Seite führt klar und taktil in die
 * echte Leseprobe und macht das Buch selbst zum zentralen Vertrauensmoment.
 */
import { ArrowRight, BookOpen, Download, Heart, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

const cues = [
  { icon: Heart, title: "Gefühle dürfen da sein", text: "Das Buch schafft Raum für Freude, Wut, Trauer, Mut und Geborgenheit." },
  { icon: Sparkles, title: "Mitmachen statt nur anschauen", text: "Aquarell-Illustrationen und Impulse laden zu eigenen Farben, Worten und Gedanken ein." },
  { icon: BookOpen, title: "Gemeinsam ins Gespräch kommen", text: "Für Familien, Kitas und Grundschulen, die Gefühle wertfrei begleiten möchten." },
];

export default function Leseprobe() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-10">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EAF4FA] px-4 py-2 text-sm font-extrabold text-[#3372AF] shadow-sm">
            <BookOpen className="size-4" aria-hidden="true" /> Kostenlose Leseprobe
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-[#3372AF] sm:text-6xl lg:text-7xl">
            Lies in Ruhe hinein.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#58616B] sm:text-xl">
            Lerne <em className="font-semibold text-[#3372AF]">Mein kleines Gefühls-Buch</em> kennen. Die Leseprobe enthält das Vorwort und ausgewählte Innenseiten – zum Anschauen, gemeinsamen Lesen und Ausprobieren.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl bg-[#E56B42] px-6 text-base font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.22)] hover:bg-[#CC5932] active:scale-[0.98]">
              <a href={site.assets.pdf} target="_blank" rel="noreferrer">
                Leseprobe als PDF öffnen <Download className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-[#A8C8DE] bg-white/75 px-6 text-base font-extrabold text-[#3372AF] hover:bg-[#EAF4FA] active:scale-[0.98]">
              <a href={site.amazonBook} target="_blank" rel="noreferrer">Zum Buch auf Amazon <ArrowRight className="size-4" aria-hidden="true" /></a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-lg place-items-center lg:max-w-none">
          <div className="absolute -right-10 top-4 size-44 rounded-full bg-[#B5CBD1]/45 blur-2xl" />
          <div className="absolute -bottom-10 left-1 size-40 rounded-full bg-[#F9CDBC]/45 blur-2xl" />
          <div className="relative grid w-full grid-cols-[0.9fr_1.1fr] items-end gap-3 rounded-[2.5rem] bg-[#FDECE2] p-4 shadow-[0_24px_55px_rgba(108,86,72,0.12)] sm:gap-5 sm:p-6">
            <img src={site.assets.cover} alt="Titelseite von Mein kleines Gefühls-Buch" className="relative z-10 w-full rounded-lg shadow-[0_16px_26px_rgba(79,65,54,0.22)]" />
            <img src={site.assets.leseprobe} alt="Handgemalte Illustration eines aufgeschlagenen Buches" className="w-full rounded-[1.6rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="relative bg-white/80 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#E56B42]">Ein Raum für Gefühle</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Nicht richtig oder falsch. Sondern echt.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#626A72]">Jede Seite lädt Kinder dazu ein, Gefühle wahrzunehmen und kreativ auszudrücken. Dabei geht es darum, sich selbst besser kennenzulernen und miteinander ins Gespräch zu kommen.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cues.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className={`rounded-[1.75rem] p-6 shadow-[0_15px_34px_rgba(83,92,99,0.08)] ${index === 1 ? "bg-[#FFF1E7]" : index === 2 ? "bg-[#EAF4FA]" : "bg-[#FFFEFC]"}`}>
                <span className="mb-5 grid size-11 place-items-center rounded-2xl bg-white text-[#E56B42] shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="text-lg font-extrabold text-[#3372AF]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#626A72]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-10">
        <div className="rounded-[2rem] border border-white/80 bg-[#EAF4FA] p-7 shadow-[0_16px_36px_rgba(73,95,109,0.08)] sm:p-9">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#E56B42]">Direkt hineinlesen</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Die Leseprobe wartet auf dich.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#59616B]">Öffne die PDF im Browser und lies sie in deinem eigenen Tempo. Du brauchst dafür weder eine Anmeldung noch eine E-Mail-Adresse.</p>
          <Button asChild size="lg" className="mt-7 h-12 rounded-xl bg-[#E56B42] px-6 font-extrabold text-white hover:bg-[#CC5932] active:scale-[0.98]">
            <a href={site.assets.pdf} target="_blank" rel="noreferrer">PDF-Leseprobe öffnen <Download className="size-4" aria-hidden="true" /></a>
          </Button>
        </div>
        <div className="rounded-[2rem] bg-[#4A8BCE] p-7 text-white shadow-[0_18px_42px_rgba(74,139,206,0.2)] sm:p-9">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#D9EAF7]">Möchtest du weiter entdecken?</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none tracking-[-0.03em] sm:text-5xl">Kleine Impulse per Newsletter.</h2>
          <p className="mt-5 leading-relaxed text-[#EFF8FD]">Auf der Newsletter-Seite findest du die transparente Anmeldung und die nächsten Informationen dazu.</p>
          <Button asChild size="lg" className="mt-7 h-12 rounded-xl bg-white px-6 font-extrabold text-[#3372AF] shadow-none hover:bg-[#FCEDDD] active:scale-[0.98]">
            <Link href="/newsletter">Zum Newsletter <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
