/**
 * Stil: Ruhiger Aquarell-Begleitraum. Die Startansicht ist nur ein ruhiger
 * Wegweiser zu den zwei eigenständigen Landingpages – keine Konkurrenz zur Webador-Hauptseite.
 */
import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-12">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-[#E56B42]">Mein kleines Gefühls-Buch</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.94] tracking-[-0.035em] text-[#3372AF] sm:text-6xl lg:text-7xl">Ein kleiner Ort für große Gefühle.</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#58616B] sm:text-xl">Hier findest du die kostenlose Leseprobe und den behutsam vorbereiteten Newsletter – als Ergänzung zur Hauptseite von <em className="font-semibold text-[#3372AF]">Mein kleines Gefühls-Buch</em>.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl bg-[#E56B42] px-6 text-base font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.22)] hover:bg-[#CC5932] active:scale-[0.98]"><Link href="/leseprobe">Leseprobe öffnen <ArrowRight className="size-4" aria-hidden="true" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-[#A8C8DE] bg-white/75 px-6 text-base font-extrabold text-[#3372AF] hover:bg-[#EAF4FA] active:scale-[0.98]"><a href={site.webadorHome}>Zur Hauptseite <ArrowRight className="size-4" aria-hidden="true" /></a></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-10 top-5 size-44 rounded-full bg-[#F9CDBC]/45 blur-2xl" />
          <div className="absolute -bottom-10 -left-8 size-44 rounded-full bg-[#B5CBD1]/45 blur-2xl" />
          <img src={site.assets.hero} alt="Kind und erwachsene Bezugsperson betrachten gemeinsam ein Bilderbuch" className="relative rounded-[2.5rem] shadow-[0_24px_55px_rgba(108,86,72,0.16)]" />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-5 sm:px-8 md:grid-cols-2 lg:px-10">
        <Link href="/leseprobe" className="group rounded-[2rem] bg-white/85 p-7 shadow-[0_15px_34px_rgba(83,92,99,0.08)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4A8BCE]/30">
          <BookOpen className="size-6 text-[#E56B42]" aria-hidden="true" />
          <h2 className="mt-5 font-display text-4xl font-semibold leading-none text-[#3372AF]">Leseprobe</h2>
          <p className="mt-4 leading-relaxed text-[#626A72]">Vorwort und ausgewählte Buchseiten direkt als PDF entdecken.</p>
          <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-[#3372AF]">Jetzt hineinlesen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
        <Link href="/newsletter" className="group rounded-[2rem] bg-[#EAF4FA] p-7 shadow-[0_15px_34px_rgba(83,92,99,0.08)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4A8BCE]/30">
          <Mail className="size-6 text-[#E56B42]" aria-hidden="true" />
          <h2 className="mt-5 font-display text-4xl font-semibold leading-none text-[#3372AF]">Newsletter</h2>
          <p className="mt-4 leading-relaxed text-[#626A72]">Kleine Impulse und Neuigkeiten – transparent vorbereitet und gut erklärt.</p>
          <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-[#3372AF]">Zum Newsletter <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
      </section>
    </PageShell>
  );
}
