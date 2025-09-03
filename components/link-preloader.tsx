"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LinkPreloader() {
  const router = useRouter();

  useEffect(() => {
    // Preload critical pages on hover
    const preloadPage = (href: string) => {
      router.prefetch(href);
    };

    // Add hover listeners to navigation links
    const navLinks = document.querySelectorAll('a[href^="/"]');
    
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href !== "/") {
        link.addEventListener("mouseenter", () => preloadPage(href), { once: true });
      }
    });

    // Cleanup
    return () => {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href !== "/") {
          link.removeEventListener("mouseenter", () => preloadPage(href));
        }
      });
    };
  }, [router]);

  return null;
}
