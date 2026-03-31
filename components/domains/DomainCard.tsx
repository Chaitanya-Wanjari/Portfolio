import { useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  video: string;
  play: boolean;
};

export default function DomainCard({
  title,
  description,
  video,
  play,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (play) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  }, [play]);

  return (
    <div className="relative h-[620px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1023]" id="domains">

      {/* VIDEO */}
      <video
        ref={ref}
        src={video}
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* SUBTLE DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ===== SOFT BLUR TEXT STRIP ===== */}
      <div
        className="
          absolute top-0 left-0 w-full
          backdrop-blur-sm
          bg-gradient-to-b
          from-black/65
          via-black/35
          to-transparent
          z-10
        "
      >
        <div className="px-8 py-5 max-w-lg">
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="mt-2 text-white/80 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
