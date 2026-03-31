"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const typeContainer = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: {
      staggerChildren: 0.06,
      delayChildren: delay,
    },
  }),
};

const typeChar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const TextGenerateEffect = ({
  className,
}: {
  className?: string;
}) => {
  const line1 = "Transforming Ideas into";
  const line2 = "Intelligent, Scalable Experiences";

  return (
    <div className={cn("font-bold text-center", className)}>
      {/* Line 1 */}
      <motion.div
        variants={typeContainer}
        initial="hidden"
        animate="visible"
        className="block dark:text-white text-black leading-snug"
      >
        {line1.split("").map((char, idx) => (
          <motion.span key={idx} variants={typeChar}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Line 2 */}
      <motion.div
        variants={typeContainer}
        custom={line1.length * 0.04 + 0.2}
        initial="hidden"
        animate="visible"
        className="block mt-2 text-[#CBACF9] leading-snug"
      >
        {line2.split("").map((char, idx) => (
          <motion.span key={idx} variants={typeChar}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
