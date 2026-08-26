import { site } from "@/lib/site";

/**
 * A lightweight, accessible floating book object. It keeps the genuine cover
 * intact and creates depth through CSS rather than an artificial cover image.
 */
export function OpenBookPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-label="Schwebende Vorschau von Mein kleines Gefühls-Buch">
      <style>{`
        @keyframes bookFloat {
          0%, 100% { transform: perspective(1200px) rotateX(9deg) rotateY(-18deg) rotateZ(-4deg) translateY(0); }
          50% { transform: perspective(1200px) rotateX(8deg) rotateY(-15deg) rotateZ(-2.5deg) translateY(-12px); }
        }
        .floating-book { animation: bookFloat 7.5s ease-in-out infinite; transform-style: preserve-3d; }
        @media (prefers-reduced-motion: reduce) { .floating-book { animation: none; } }
      `}</style>
      <div className="absolute -right-12 top-8 size-44 rounded-full bg-[#F9CDBC]/40 blur-3xl" />
      <div className="absolute -bottom-4 -left-9 size-40 rounded-full bg-[#B5CBD1]/38 blur-3xl" />
      <div className="floating-book relative mx-auto w-[min(76vw,23rem)]">
        <div className="absolute inset-x-[5%] -bottom-5 h-9 rounded-[50%] bg-[#765238]/25 blur-xl" />
        <div className="relative rounded-[1.35rem] border-[10px] border-[#805438] bg-[#805438] p-[3px] shadow-[0_30px_58px_rgba(84,56,39,0.34)]">
          <div className="absolute inset-x-3 -bottom-3 h-5 rounded-b-[0.6rem] border-x-2 border-b-2 border-[#73503B] bg-[#EDE3CB] shadow-[inset_0_-3px_0_rgba(118,80,56,0.16)]" />
          <div className="relative overflow-hidden rounded-[0.85rem] bg-[#F8F0E0]">
            <img src={site.assets.cover} alt="Aktuelles Cover von Mein kleines Gefühls-Buch" width="880" height="1240" className="block aspect-[0.71] w-full object-cover object-top" />
            <span className="pointer-events-none absolute inset-0 rounded-[0.85rem] border border-white/35" />
          </div>
        </div>
        <div className="absolute -right-2 top-[13%] h-[74%] w-4 rounded-r-md border-y border-r border-[#694733] bg-[repeating-linear-gradient(180deg,#F4ECD9_0px,#F4ECD9_3px,#DBCDB2_4px,#F4ECD9_6px)] shadow-[3px_1px_4px_rgba(77,50,35,0.24)]" />
      </div>
      <p className="mt-6 text-center text-sm font-semibold text-[#66707A]">Ein Buch zum Aufschlagen, Staunen und gemeinsam Entdecken.</p>
    </div>
  );
}
