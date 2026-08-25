import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/**
 * Kurzer, bewusst stummer Bewegungsmoment. Das Video ist lokal ausgeliefert,
 * spielt nur sichtbar im Browser und lässt sich jederzeit pausieren.
 */
export function EmotionMotion() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
      <div className="overflow-hidden rounded-[2rem] border border-[#DCE8E5] bg-[linear-gradient(135deg,#F9FCFB_0%,#EDF6F8_58%,#FFF8F0_100%)] p-5 shadow-[0_18px_42px_rgba(88,83,67,0.08)] sm:p-7">
        <div className="grid items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="relative overflow-hidden rounded-[1.45rem] bg-[#EAF2F4]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={site.assets.motionPoster}
              className="aspect-[9/11] w-full object-cover sm:aspect-[16/10]"
              aria-label="Sanfter Bewegungsmoment aus der Gefühlswelt des Buches"
            >
              <source src={site.assets.motion} type="video/webm" />
              Dein Browser unterstützt dieses Video nicht.
            </video>
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={togglePlayback}
              aria-label={isPaused ? "Bewegungsmoment abspielen" : "Bewegungsmoment pausieren"}
              className="absolute bottom-4 right-4 size-11 rounded-full border-white/90 bg-white/90 text-[#3372AF] shadow-md hover:bg-white"
            >
              {isPaused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
            </Button>
          </div>
          <div className="max-w-xl px-1 sm:px-3">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#4A8BCE]">Kleine Bewegungen, große Entlastung</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#3372AF] sm:text-5xl">Wenn Wut groß wird, darf der Körper helfen.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#59616B]">Manchmal brauchen Gefühle zuerst Bewegung. Einmal stampfen, die Schultern ausschütteln oder gemeinsam tief ausatmen kann ein ruhiger erster Schritt sein.</p>
            <p className="mt-4 border-l-2 border-[#B5CBD1] pl-4 leading-relaxed text-[#59616B]">Im Buch finden Kinder und ihre Bezugspersonen weitere Impulse, um Gefühle wahrzunehmen, zu benennen und gemeinsam zu begleiten.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
