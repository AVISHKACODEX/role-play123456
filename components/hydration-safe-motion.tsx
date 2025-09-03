"use client";

import { motion, MotionProps } from "framer-motion";
import { useHydration } from "@/hooks/use-hydration";
import { ReactNode } from "react";

interface HydrationSafeMotionProps extends MotionProps {
  children: ReactNode;
  fallback?: ReactNode;
  as?: keyof typeof motion;
}

export default function HydrationSafeMotion({
  children,
  fallback = null,
  as = "div",
  ...motionProps
}: HydrationSafeMotionProps) {
  const isHydrated = useHydration();
  const MotionComponent = motion[as];

  if (!isHydrated) {
    return <>{fallback || children}</>;
  }

  return <MotionComponent {...motionProps}>{children}</MotionComponent>;
}
