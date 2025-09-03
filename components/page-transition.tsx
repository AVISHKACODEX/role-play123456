"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // Optimized transition effects for faster page transitions
  const getTransitionEffect = () => {
    // Use a simple, consistent transition for all pages to improve performance
    return {
      initial: {
        opacity: 0,
        y: 20,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: -20,
      },
    };
  };

  const effect = getTransitionEffect();

  return (
    <motion.div
      {...effect}
      transition={{
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        filter: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        rotateY: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        rotateX: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        rotateZ: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        rotate: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        x: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
        y: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
    >
      {children}
    </motion.div>
  );
}
