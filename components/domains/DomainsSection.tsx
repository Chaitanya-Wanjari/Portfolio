"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedCard from "./AnimatedCard";

const domains = [
  {
    title: "UI / UX Engineering",
    description: "Designing clean, intuitive and accessible interfaces.",
    video: "/videos/uiux.mp4",
  },
  {
    title: "AI • ML • NLP",
    description: "Building intelligent, scalable, data-driven systems.",
    video: "/videos/ai.mp4",
  },
  {
    title: "Full-Stack Development",
    description: "Production-ready, scalable web applications.",
    video: "/videos/fullstack.mp4",
  },
];

export default function DomainsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLocked = useRef(false);

  useEffect(() => {
  let scrollAccumulator = 0;
  const SCROLL_THRESHOLD = 120; // 👈 increase = slower (GitLab ≈ 120–160)

  const onWheel = (e: WheelEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const inSection =
      rect.top <= 120 && rect.bottom >= window.innerHeight;

    if (!inSection) return;

    // Prevent normal scroll while stacking
    if (
      (activeIndex > 0 && activeIndex < domains.length - 1) ||
      (activeIndex === 0 && e.deltaY > 0) ||
      (activeIndex === domains.length - 1 && e.deltaY < 0)
    ) {
      e.preventDefault();
    } else {
      return;
    }

    scrollAccumulator += e.deltaY;

    // Scroll DOWN → next card
    if (
      scrollAccumulator > SCROLL_THRESHOLD &&
      activeIndex < domains.length - 1
    ) {
      setActiveIndex((i) => i + 1);
      scrollAccumulator = 0;
    }

    // Scroll UP → previous card
    if (
      scrollAccumulator < -SCROLL_THRESHOLD &&
      activeIndex > 0
    ) {
      setActiveIndex((i) => i - 1);
      scrollAccumulator = 0;
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  return () => window.removeEventListener("wheel", onWheel);
}, [activeIndex]);


  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: "120vh" }}
    >
      <div className="sticky top-24 h-[620px] flex justify-center">
        <div className="relative w-[1100px] h-full">
          {domains.map((domain, index) => (
            <AnimatedCard
              key={index}
              index={index}
              activeIndex={activeIndex}
              {...domain}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
