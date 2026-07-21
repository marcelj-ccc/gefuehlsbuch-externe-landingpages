/**
 * Stil: Ruhiger Aquarell-Begleitraum. Dieses Layout trägt die visuelle Brücke
 * zwischen den zwei externen Seiten und der warmen Webador-Hauptseite.
 */
import { Link, useLocation } from "wouter";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen overflow-hidden bg-[#FCEDDD] text-[#3E4854]">
      <div className="paper-grain pointer-events-none fixed inset-0 z-0 opacity-45" />
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a
          href={site.webadorHome}
          className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4A8BCE]/30"
          aria-label="Zur Hauptseite von Mein kleines Gefühls-Buch"
        >
          <span className="grid size-11 place-items-center rounded-full bg-white/85 shadow-[0_8px_22px_rgba(88,83,67,0.12)] transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-105">
            <img src={site.assets.mark} alt="" className="size-9 object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.42rem] font-semibold tracking-[-0.02em] text-[#3372AF]">
              Mein kleines
            </span>
            <span className="block pt-0.5 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#E56B42]">
              Gefühls-Buch
            </span>
          </span>
        </a>

        <nav aria-label="Seitennavigation" className="flex items-center gap-1.5 rounded-full border border-white/90 bg-white/72 p-1.5 shadow-[0_8px_24px_rgba(88,83,67,0.08)] backdrop-blur-sm">
          <Link
            href="/leseprobe"
            className={`rounded-full px-3.5 py-2 text-sm font-bold transition-colors sm:px-4 ${
              location === "/leseprobe" ? "bg-[#4A8BCE] text-white" : "text-[#3372AF] hover:bg-[#EAF4FA]"
            }`}
          >
            Leseprobe
          </Link>
          <Link
            href="/newsletter"
            className={`rounded-full px-3.5 py-2 text-sm font-bold transition-colors sm:px-4 ${
              location === "/newsletter" ? "bg-[#4A8BCE] text-white" : "text-[#3372AF] hover:bg-[#EAF4FA]"
            }`}
          >
            Newsletter
          </Link>
        </nav>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 mx-auto mt-12 max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
        <div className="paper-footer flex flex-col gap-5 rounded-[1.5rem] px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-xl leading-relaxed text-[#59616B]">
            Ein liebevoller Begleitraum rund um <strong className="font-extrabold text-[#3372AF]">Mein kleines Gefühls-Buch</strong>.
          </p>
          <a
            href={site.webadorHome}
            className="inline-flex w-fit items-center gap-1.5 font-extrabold text-[#3372AF] underline decoration-[#B5CBD1] decoration-2 underline-offset-4 transition-colors hover:text-[#2D699F]"
          >
            Zur Hauptseite <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <p className="px-2 pt-5 text-xs leading-relaxed text-[#737B83]">
          Die Newsletter-Anmeldung wird erst aktiviert, wenn der Versanddienst und die Datenschutzhinweise verbindlich eingerichtet sind.
        </p>
      </footer>
    </div>
  );
}
