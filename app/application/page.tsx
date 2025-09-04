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
            className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 mb-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 text-center">
              Applications
            </h1>
            <p className="text-white/80 text-center mb-10 text-lg">
              Choose your application type below.
            </p>

            {/* Modern application cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Whitelist */}
              <Link href="/application/whitelist" className="group">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 shadow-lg"
                >
                  {/* gradient rim */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  {/* shine */}
                  <motion.div
                    className="pointer-events-none absolute -left-40 top-0 h-full w-40 rotate-12 bg-white/10"
                    initial={{ x: -200, opacity: 0 }}
                    whileHover={{ x: 600, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="p-6 md:p-8 pr-28 md:pr-36 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Whitelist Application</h3>
                    <p className="text-white/70 mb-6">Complete the whitelist application required to access the server</p>
                    <Button className="bg-white text-neutral-900 hover:bg-gray-100 rounded-xl">Get Started</Button>
                  </div>
                  {/* contextual image */}
                  <Image
                    src="/gta-characters-with-weapons.png"
                    alt="Whitelist"
                    width={500}
                    height={500}
                    className="pointer-events-none select-none absolute bottom-0 right-0 w-28 md:w-36 lg:w-40 object-contain opacity-90"
                  />
                </motion.div>
              </Link>

              {/* Police */}
              <Link href="/application/police" className="group">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  <motion.div
                    className="pointer-events-none absolute -left-40 top-0 h-full w-40 rotate-12 bg-blue-400/10"
                    initial={{ x: -200, opacity: 0 }}
                    whileHover={{ x: 600, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="p-6 md:p-8 pr-28 md:pr-36 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Police Application</h3>
                    <p className="text-white/70 mb-6">Join the Hill City Police Department and protect the law</p>
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl">Apply Now</Button>
                  </div>
                  <Image
                    src="/police-officers-in-uniform.png"
                    alt="Police"
                    width={500}
                    height={500}
                    className="pointer-events-none select-none absolute bottom-0 right-0 w-28 md:w-36 lg:w-40 object-contain opacity-95"
                  />
                </motion.div>
              </Link>

              {/* Medical */}
              <Link href="/application/medical" className="group">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  <motion.div
                    className="pointer-events-none absolute -left-40 top-0 h-full w-40 rotate-12 bg-emerald-400/10"
                    initial={{ x: -200, opacity: 0 }}
                    whileHover={{ x: 600, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="p-6 md:p-8 pr-28 md:pr-36 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Medical Application</h3>
                    <p className="text-white/70 mb-6">Join the Hill City Hospital medical staff and save lives</p>
                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl">Join Team</Button>
                  </div>
                  <Image
                    src="/medical-doctor-with-stethoscope.png"
                    alt="Medical"
                    width={500}
                    height={500}
                    className="pointer-events-none select-none absolute bottom-0 right-0 w-40 md:w-52 lg:w-60 object-contain opacity-95"
                  />
                </motion.div>
              </Link>
            </div>

            <div className="text-center mt-10">
              <Link href="/">
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-3 text-lg font-medium backdrop-blur-sm transition-all duration-200">
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
