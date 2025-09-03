"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ApplicationPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Background Image with Animation */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/city-background.jpeg')",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        suppressHydrationWarning
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60" suppressHydrationWarning />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-white mb-6 text-center">
              Applications
            </h1>
            <p className="text-white/80 text-center mb-8">
              Choose your application type below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/application/whitelist">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-lg p-6 text-lg font-medium backdrop-blur-sm transition-all duration-200">
                  Whitelist Application
                </Button>
              </Link>

              <Link href="/application/police">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-lg p-6 text-lg font-medium backdrop-blur-sm transition-all duration-200">
                  Police Application
                </Button>
              </Link>

              <Link href="/application/medical">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-lg p-6 text-lg font-medium backdrop-blur-sm transition-all duration-200">
                  Medical Application
                </Button>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link href="/">
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-8 py-3 text-lg font-medium backdrop-blur-sm transition-all duration-200">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
