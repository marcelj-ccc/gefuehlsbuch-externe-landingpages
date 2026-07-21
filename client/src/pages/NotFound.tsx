/**
 * Stil: Ruhiger Aquarell-Begleitraum. Auch eine Fehlseite bleibt eine sanfte,
 * klare Rückkehrmöglichkeit in die zwei relevanten Landingpages.
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#E56B42]">Seite nicht gefunden</p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-none text-[#3372AF] sm:text-6xl">Hier geht es wieder zurück.</h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[#626A72]">Vielleicht suchst du die Leseprobe oder den Newsletter?</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#E56B42] px-6 py-3 font-extrabold text-white shadow-[0_12px_22px_rgba(229,107,66,0.22)] transition hover:bg-[#CC5932] active:scale-[0.98]"> <ArrowLeft className="size-4" aria-hidden="true" /> Zur Übersicht</Link>
      </section>
    </PageShell>
  );
}
