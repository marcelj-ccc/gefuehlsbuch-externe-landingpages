/**
 * Stil: Ruhiger Aquarell-Begleitraum. Gemeinsames, ruhiges Leselayout für die
 * rechtlichen Seiten (Impressum, Datenschutz). Die Inhalte erscheinen als
 * klare Papierkapitel im bestehenden Design, ohne den Grundbau zu verändern.
 */
import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 pb-10 pt-6 sm:px-8 lg:px-10 lg:pt-10">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.03em] text-[#3372AF] sm:text-6xl">
          {title}
        </h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#58616B]">{intro}</p> : null}
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="paper-chapter legal-content rounded-[2rem] px-6 py-8 sm:px-10 sm:py-10">{children}</div>
      </section>
    </PageShell>
  );
}
