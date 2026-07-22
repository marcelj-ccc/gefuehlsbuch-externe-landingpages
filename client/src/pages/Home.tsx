/**
 * Stil: Ruhiger Aquarell-Begleitraum. Diese Hauptseite erzählt die Buchwelt
 * als luftige Folge von Papierkapiteln und führt jeweils nur zu einer ruhigen nächsten Handlung.
 */
import { ArrowRight, BookOpen, Heart, MessageCircleHeart, PencilLine } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

const bookChapters = [
  {
    icon: Heart,
    title: "Gefühle dürfen da sein",
    text: "Freude, Wut, Trauer, Mut und Geborgenheit bekommen einen wertfreien Platz.",
    wash: "bg-[#F9CDBC]/32",
  },
  {
    icon: PencilLine,
    title: "Mit Farben weiterdenken",
    text: "Aquarelle, kleine Impulse und eigene Ideen machen aus dem Lesen einen Mitmach-Moment.",
    wash: "bg-[#B5CBD1]/35",
  },
  {
    icon: MessageCircleHeart,
    title: "Miteinander ins Gespräch kommen",
    text: "Für Familien, Kitas und Grundschulen, die Gefühle gemeinsam begleiten möchten.",
    wash: "bg-[#F4DDE5]/44",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-12">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4F9FC] px-4 py-2 text-sm font-extrabold text-[#3372AF] shadow-sm">
            <Heart className="size-4" aria-hidden="true" /> Für kleine und große Gefühle
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-[#3372AF] sm:text-6xl lg:text-7xl">Ein Buch, das Raum für Gefühle schafft.</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#58616B] sm:text-xl">Mein kleines Gefühls-Buch lädt Kinder und ihre Bezugspersonen ein, Gefühle wahrzunehmen, ihnen Worte zu geben und gemeinsam neugierig zu bleiben.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl bg-[#E56B42] px-6 text-base font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.22)] hover:bg-[#CC5932] active:scale-[0.98]"><Link href="/leseprobe">Leseprobe öffnen <ArrowRight className="size-4" aria-hidden="true" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-[#A8C8DE] bg-white/75 px-6 text-base font-extrabold text-[#3372AF] hover:bg-[#EAF4FA] active:scale-[0.98]"><a href={site.amazonBook} target="_blank" rel="noreferrer">Das Buch ansehen <ArrowRight className="size-4" aria-hidden="true" /></a></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-10 top-5 size-44 rounded-full bg-[#F9CDBC]/45 blur-2xl" />
          <div className="absolute -bottom-10 -left-8 size-44 rounded-full bg-[#B5CBD1]/45 blur-2xl" />
          <img src={site.assets.hero} alt="Kind und erwachsene Bezugsperson betrachten gemeinsam ein Bilderbuch" className="relative rounded-[2.5rem] shadow-[0_24px_55px_rgba(108,86,72,0.16)]" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="paper-chapter rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div className="relative mx-auto w-full max-w-sm">
              <span className="absolute -left-8 top-10 size-36 rounded-full bg-[#B5CBD1]/35 blur-2xl" />
              <img src={site.assets.cover} alt="Titelseite von Mein kleines Gefühls-Buch" className="relative mx-auto w-4/5 max-w-[16rem] rotate-[-2deg] rounded-[1.5rem] shadow-[0_18px_38px_rgba(88,83,67,0.17)]" />
            </div>
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">Die Buchwelt</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Nicht richtig oder falsch. Sondern echt.</h2>
              <p className="mt-6 text-lg leading-relaxed text-[#626A72]">Gefühle sind Teil unseres Alltags. Dieses Buch schafft einen geschützten Rahmen, um sie in Bildern, Farben, Worten und Gesprächen zu entdecken.</p>
              <p className="mt-5 border-l-2 border-[#B5CBD1] pl-5 leading-relaxed text-[#59616B]">Gemeinsames Lesen darf dabei leicht sein: Seite für Seite, ohne Leistungsdruck und im eigenen Tempo.</p>
              <Button asChild size="lg" className="mt-7 h-12 rounded-xl bg-[#E56B42] px-6 font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.20)] hover:bg-[#CC5932] active:scale-[0.98]">
                <Link href="/leseprobe">In Ruhe hineinlesen <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="paper-chapter rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">Gemeinsam entdecken</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Drei kleine Kapitel für den Alltag.</h2>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3 md:gap-0">
            {bookChapters.map(({ icon: Icon, title, text, wash }, index) => (
              <article key={title} className={`relative overflow-hidden px-4 py-5 sm:px-6 ${index < 2 ? "border-b border-dashed border-[#B5CBD1]/75 md:border-b-0 md:border-r" : ""}`}>
                <span className={`pointer-events-none absolute -right-7 -top-9 size-28 rounded-full blur-xl ${wash}`} />
                <span className="relative mb-5 grid size-11 place-items-center rounded-full bg-white/78 text-[#4A8BCE] shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="text-lg font-extrabold text-[#3372AF]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#626A72]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-9 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1.12fr_0.88fr] lg:px-10">
        <div className="book-invitation rounded-[2rem] bg-[linear-gradient(135deg,#F2F9FC_0%,#EAF4FA_64%,#FDF6EE_100%)] p-7 sm:p-9">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">Für zu Hause und unterwegs</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Lies erst einmal ein paar Seiten.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#59616B]">Das Vorwort und ausgewählte Innenseiten warten als kostenlose PDF-Leseprobe auf dich – ohne Anmeldung und ohne E-Mail-Adresse.</p>
          <Button asChild size="lg" className="mt-7 h-12 rounded-xl bg-[#E56B42] px-6 font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.20)] hover:bg-[#CC5932] active:scale-[0.98]">
            <a href={site.assets.pdf} target="_blank" rel="noreferrer">PDF-Leseprobe öffnen <BookOpen className="size-4" aria-hidden="true" /></a>
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <span className="absolute -right-4 top-8 size-32 rounded-full bg-[#F9CDBC]/35 blur-2xl" />
          <img src={site.assets.leseprobe} alt="Handgemalte Illustration eines aufgeschlagenen Buches" className="relative rounded-[2rem] shadow-[0_18px_42px_rgba(88,83,67,0.14)]" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-9 px-5 pb-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
        <div className="relative mx-auto w-full max-w-sm order-2 lg:order-1">
          <span className="absolute -left-6 bottom-6 size-32 rounded-full bg-[#B5CBD1]/35 blur-2xl" />
          <img src={site.assets.newsletter} alt="Handgemaltes Briefumschlagmotiv mit Herz" className="relative rounded-[2rem] shadow-[0_18px_42px_rgba(88,83,67,0.14)]" />
        </div>
        <div className="book-invitation order-1 rounded-[2rem] bg-[linear-gradient(135deg,#FDF6EE_0%,#F8FBFC_58%,#EAF4FA_100%)] p-7 sm:p-9 lg:order-2">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">In Verbindung bleiben</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Kleine Impulse, wenn es etwas zu teilen gibt.</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-[#59616B]">Die Newsletter-Anmeldung ist transparent vorbereitet und wird erst freigeschaltet, wenn Versand und Datenschutzhinweise verbindlich eingerichtet sind.</p>
          <Button asChild size="lg" className="mt-7 h-12 rounded-xl bg-[#E56B42] px-6 font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.20)] hover:bg-[#CC5932] active:scale-[0.98]">
            <Link href="/newsletter">Zu den kleinen Impulsen <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
