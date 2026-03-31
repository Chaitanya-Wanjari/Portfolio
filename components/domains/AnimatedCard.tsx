"use client";

import { motion } from "framer-motion";
import DomainCard from "./DomainCard";

type Props = {
  title: string;
  description: string;
  video: string;
  index: number;
  activeIndex: number;
};

export default function AnimatedCard({
  title,
  description,
  video,
  index,
  activeIndex,
}: Props) {
  const isVisible = index <= activeIndex;

  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        y: isVisible ? index * 28 : 500,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 26,
      }}
      style={{
        zIndex: 10 + index,
      }}
    >
      <DomainCard
        title={title}
        description={description}
        video={video}
        play={index === activeIndex}
      />
    </motion.div>
  );
}

