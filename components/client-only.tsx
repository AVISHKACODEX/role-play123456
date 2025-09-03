"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ClientOnly({
  children,
  fallback = null,
}: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Return fallback during SSR and initial render
  if (!hasMounted) {
    return <>{fallback}</>;
  }

  // Only render children after component has mounted on client
  return <>{children}</>;
}
