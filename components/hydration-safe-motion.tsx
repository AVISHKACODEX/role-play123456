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

  if (!isHydrated) {
    return <>{fallback || children}</>;
  }

  // Use the motion component directly with proper typing
  const MotionComponent = motion[as as keyof typeof motion];
  
  return (
    <MotionComponent {...motionProps}>
      {children}
    </MotionComponent>
  );
}
