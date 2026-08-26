import { site } from "@/lib/site";

/**
 * Uses the real current cover and a real inner manuscript page. The motion is
 * intentionally subtle and can be disabled by the visitor's system setting.
 */
export function OpenBookPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-label="Leicht aufgeblätterte Vorschau von Mein kleines Gefühls-Buch">
      <style>{`
        @keyframes bookBreath {
          0%, 100% { transform: perspective(1200px) rotateX(4deg) rotateY(-10deg) translateY(0); }
          50% { transform: perspective(1200px) rotateX(4deg) rotateY(-7deg) translateY(-8px); }
        }
        .book-breath { animation: bookBreath 7s ease-in-out infinite; transform-style: preserve-3d; }
        @media (prefers-reduced-motion: reduce) { .book-breath { animation: none; } }
      `}</style>
      <div className="absolute -right-8 top-4 size-40 rounded-full bg-[#F9CDBC]/45 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 size-36 rounded-full bg-[#B5CBD1]/45 blur-3xl" />
      <div className="book-breath relative mx-auto grid max-w-[31rem] grid-cols-2 gap-[2px] rounded-[1.35rem] bg-[#9A7659] p-2 shadow-[0_28px_60px_rgba(92,66,48,0.24)]">
        <div className="relative overflow-hidden rounded-l-[1rem] bg-[#F5E9D8] shadow-[inset_-10px_0_16px_rgba(79,55,40,0.14)]">
          <img src={site.assets.cover} alt="Aktuelles Cover von Mein kleines Gefühls-Buch" width="880" height="1240" className="block aspect-[0.71] w-full object-cover object-top" />
        </div>
        <div className="relative overflow-hidden rounded-r-[1rem] bg-[#FFF9EF] shadow-[inset_10px_0_16px_rgba(79,55,40,0.14)]">
          <img src={site.assets.innerPage} alt="Echte Innenseite aus Mein kleines Gefühls-Buch" width="1283" height="1845" className="block aspect-[0.71] w-full object-cover object-top" />
          <span className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-[linear-gradient(90deg,rgba(101,70,45,0.16),transparent)]" />
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-semibold text-[#66707A]">Aufgeschlagen, zum gemeinsamen Entdecken.</p>
    </div>
  );
}
