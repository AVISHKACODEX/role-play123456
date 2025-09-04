"use client";

import Navigation from "@/components/navigation";
import ApplicationCard from "@/components/application-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ClientOnly from "@/components/client-only";
import { useHydration } from "@/hooks/use-hydration";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isHydrated = useHydration();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Show nothing until hydrated to avoid mismatches
  if (!isHydrated) {
    return null;
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Enhanced Background with Parallax Effect */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/city-background.jpeg)",
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Enhanced Overlay with Gradient */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        suppressHydrationWarning
      />

      {/* Floating Particles Background */}
      <ClientOnly>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            // Use deterministic positioning based on index to avoid hydration mismatch
            const positions = [
              { left: 10, top: 20 },
              { left: 25, top: 45 },
              { left: 40, top: 15 },
              { left: 60, top: 35 },
              { left: 80, top: 25 },
              { left: 15, top: 60 },
              { left: 35, top: 80 },
              { left: 55, top: 70 },
              { left: 75, top: 50 },
              { left: 90, top: 40 },
              { left: 5, top: 80 },
              { left: 30, top: 10 },
              { left: 50, top: 90 },
              { left: 70, top: 15 },
              { left: 85, top: 65 },
              { left: 20, top: 30 },
              { left: 45, top: 55 },
              { left: 65, top: 40 },
              { left: 80, top: 75 },
              { left: 95, top: 20 },
            ];
            const pos = positions[i % positions.length];
            const duration = 8 + (i % 4); // Deterministic duration
            const delay = i * 0.25; // Deterministic delay

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      </ClientOnly>

      {/* Content */}
      <div className="relative z-10" suppressHydrationWarning>
        <Navigation />

        {/* Main Content */}
        <main className="pt-32 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded && isHydrated ? "visible" : "hidden"}
          >
            {/* Hero Section */}
            <motion.div className="text-center py-20" variants={itemVariants}>
              <motion.div
                className="relative mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-wider leading-tight"
                  style={{
                    textShadow: `
                        0 0 30px rgba(59, 130, 246, 0.8),
                        0 0 60px rgba(147, 51, 234, 0.6),
                        0 0 90px rgba(236, 72, 153, 0.4)
                      `,
                    fontFamily: "var(--font-bruce-forever)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    textShadow: `
                        0 0 40px rgba(59, 130, 246, 1),
                        0 0 80px rgba(147, 51, 234, 0.8),
                        0 0 120px rgba(236, 72, 153, 0.6)
                      `,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="block"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    HILL CITY
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    ROLEPLAY
                  </motion.span>
                </motion.h1>

                {/* Enhanced Decorative Elements */}
                <motion.div
                  className="flex justify-center items-center space-x-6 mb-6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
                  <motion.div
                    className="w-4 h-4 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
                </motion.div>

                <motion.div
                  className="flex justify-center items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-2"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                Welcome to Sri Lanka's most popular and immersive FiveM Roleplay
                server
              </motion.p>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2"
              >
                <Button
                  className="bg-transparent border-2 border-white text-white px-8 sm:px-16 md:px-24 py-4 sm:py-6 md:py-8 text-lg sm:text-2xl md:text-3xl font-black rounded-full shadow-2xl hover:shadow-white/25 hover:text-black transition-all duration-300 w-full sm:w-auto"
                  asChild
                >
                  <a href="/join" className="relative overflow-hidden group">
                    <span className="relative z-10">JOIN NOW</span>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Application Cards Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20"
              variants={itemVariants}
            >
              <ApplicationCard
                title="Whitelist Application"
                description="Complete the whitelist application required to access the server"
                buttonText="Get Started"
                imageSrc="/gta-characters-with-weapons.png"
                imageAlt="Whitelist Application"
                href="/application/whitelist"
              />

              <ApplicationCard
                title="Police Application"
                description="Join the Hill City Police Department and protect the law"
                buttonText="Apply Now"
                imageSrc="/images/police-officer.png"
                imageAlt="Police Application"
                href="/application/police"
              />

              <ApplicationCard
                title="Medical Application"
                description="Join the Hill City Hospital medical staff and save lives"
                buttonText="Join Team"
                imageSrc="/images/medical-staff.png"
                imageAlt="Medical Application"
                href="/application/medical"
              />
            </motion.div>

            {/* About Section */}
            <motion.div className="text-center py-20" variants={itemVariants}>
              <motion.div
                className="glass-dark rounded-3xl p-10 max-w-5xl mx-auto border border-white/10 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.8)",
                  borderColor: "rgba(59, 130, 246, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  About the Server
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hill City Roleplay is Sri Lanka's most progressive and
                  community-driven FiveM server. Our goal is to provide every
                  player with a next-level roleplay experience where they can
                  live out their own story, build connections, and enjoy
                  high-quality RP in a safe and fun environment.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border-0"
                      asChild
                    >
                      <a href="/about">See More</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div className="py-20" variants={itemVariants}>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center text-white mb-16 gradient-text"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Hill City?
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🚀",
                    title: "High Performance",
                    description:
                      "Optimized server with smooth gameplay experience",
                  },
                  {
                    icon: "🛡️",
                    title: "Anti-Cheat",
                    description: "Advanced security systems for fair gameplay",
                  },
                  {
                    icon: "🎮",
                    title: "Custom Scripts",
                    description: "Unique features and gameplay mechanics",
                  },
                  {
                    icon: "👥",
                    title: "Active Community",
                    description: "Friendly and supportive player base",
                  },
                  {
                    icon: "🎯",
                    title: "Regular Events",
                    description: "Exciting events and competitions",
                  },
                  {
                    icon: "🔧",
                    title: "24/7 Support",
                    description: "Round-the-clock assistance and updates",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="glass-dark rounded-2xl p-6 text-center hover-lift"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
