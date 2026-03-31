"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
};

export default function SafeAnimation({ className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}
