/**
 * Stil: Ruhiger Aquarell-Begleitraum. Diese Seite macht die Newsletter-Option
 * zu einem warmen, transparenten Zwischenraum statt zu einer lauten Conversion-Seite.
 */
import { ArrowRight, BookOpen, Heart, Mail, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

const reasons = [
  { icon: Heart, title: "Kleine Impulse", text: "Sanfte Gesprächsanlässe und Gedanken für den Familienalltag." },
  { icon: Sparkles, title: "Blick hinter die Seiten", text: "Neuigkeiten rund um das Buch, seine Illustrationen und neue Ideen." },
  { icon: BookOpen, title: "Zum Aufbewahren", text: "Ausgewählte Inhalte, die du in Ruhe lesen und wieder aufgreifen kannst." },
];

export default function Newsletter() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-10">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4F9FC] px-4 py-2 text-sm font-extrabold text-[#3372AF] shadow-sm">
            <Mail className="size-4" aria-hidden="true" /> Kleine Post für große Gefühle
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-[#3372AF] sm:text-6xl lg:text-7xl">
            Bleiben wir in Verbindung.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#58616B] sm:text-xl">
            Erhalte ausgewählte Gedanken, Gesprächsimpulse und Neuigkeiten rund um <em className="font-semibold text-[#3372AF]">Mein kleines Gefühls-Buch</em> direkt in dein Postfach.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#69727A]">
            Ruhig, liebevoll und nur dann, wenn es wirklich etwas zu teilen gibt.
          </p>
          <div className="mt-8 hidden items-center gap-3 text-sm font-bold text-[#4A8BCE] sm:flex">
            <span className="h-px w-12 bg-[#B5CBD1]" />
            Ohne Druck. Mit viel Gefühl.
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -right-12 -top-9 size-40 rounded-full bg-[#F9CDBC]/45 blur-2xl" />
          <div className="absolute -bottom-12 -left-10 size-40 rounded-full bg-[#B5CBD1]/45 blur-2xl" />
          <div className="relative rounded-[2.5rem] bg-[#FDECE2] p-4 shadow-[0_24px_55px_rgba(108,86,72,0.12)] sm:p-6">
            <img src={site.assets.newsletter} alt="Handgemaltes Briefumschlagmotiv mit Herz" className="w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 lg:px-10">
          <div className="max-w-md self-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">Newsletter</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Ein kleiner Platz in deinem Postfach.</h2>
            <p className="mt-6 text-base leading-relaxed text-[#626A72]">
              Du entscheidest jederzeit selbst, ob du weiterlesen möchtest. Die Anmeldung wird erst geöffnet, wenn Versand und Datenschutzhinweise vollständig eingerichtet sind.
            </p>
          </div>
          <div className="paper-chapter rounded-[2rem] p-2 sm:p-3"><NewsletterForm /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="paper-chapter rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">Drei kleine Kapitel</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Zum Lesen, Aufbewahren und Weiterdenken.</h2>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3 md:gap-0">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className={`relative overflow-hidden px-4 py-5 sm:px-6 ${index < 2 ? "border-b border-dashed border-[#B5CBD1]/75 md:border-b-0 md:border-r" : ""}`}>
              <span className={`pointer-events-none absolute -right-7 -top-9 size-28 rounded-full blur-xl ${index === 1 ? "bg-[#B5CBD1]/35" : index === 2 ? "bg-[#F9CDBC]/32" : "bg-white/70"}`} />
              <span className="relative mb-5 grid size-11 place-items-center rounded-full bg-white/78 text-[#4A8BCE] shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
              <h3 className="text-lg font-extrabold text-[#3372AF]">{title}</h3>
              <p className="mt-3 leading-relaxed text-[#626A72]">{text}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-5 sm:px-8 lg:px-10">
        <div className="book-invitation grid items-center gap-8 rounded-[2.25rem] bg-[linear-gradient(125deg,#EAF4FA_0%,#F8FBFC_58%,#FDECE2_100%)] px-7 py-9 sm:px-10 sm:py-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">Erst einmal hineinlesen?</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Lies ein paar Seiten in Ruhe.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#59616B]">Vorwort und ausgewählte Buchseiten warten ohne Anmeldung auf dich.</p>
          </div>
          <Button asChild size="lg" className="h-12 rounded-xl bg-[#E56B42] px-6 font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.20)] hover:bg-[#CC5932] active:scale-[0.98]">
            <Link href="/leseprobe">Zur Leseprobe <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
