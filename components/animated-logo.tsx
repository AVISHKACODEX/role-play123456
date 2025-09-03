"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AnimatedLogo() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Make invisible when scrolled down more than 100px
      setIsVisible(scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
  };

  // Don't render until component is mounted on client
  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-40 hidden md:block cursor-pointer"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      }}
      onClick={handleLogoClick}
    >
      <motion.div
        className="relative"
        whileHover={{
          scale: 1.05,
          rotate: [0, -3, 3, -3, 0],
          transition: {
            scale: { duration: 0.2 },
            rotate: {
              duration: 0.4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="relative w-60 h-60 md:w-80 md:h-80">
          <Image
            src="/images/animated-logo.gif"
            alt="Hill City Roleplay Animated Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
