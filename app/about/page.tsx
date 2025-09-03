"use client";

import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Don't render until component is mounted on client to avoid hydration mismatch
  if (!isLoaded) {
    return null;
  }

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/city-background.jpeg)" }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Enhanced Overlay with Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
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
          const duration = 8 + (i % 4);
          const delay = i * 0.25;

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

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto py-16"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            {/* Title Section */}
            <motion.div className="text-center mb-20" variants={itemVariants}>
              <motion.div
                className="relative mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-12 tracking-wider uppercase leading-tight"
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
            </motion.div>

            {/* About Content with Glowing Border */}
            <motion.div
              className="relative rounded-3xl p-10 border border-transparent"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)",
                backdropFilter: "blur(10px)",
                borderImage:
                  "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff) 1",
                boxShadow: `
                  0 0 20px rgba(255, 107, 107, 0.3),
                  0 0 40px rgba(78, 205, 196, 0.2),
                  0 0 60px rgba(69, 183, 209, 0.1),
                  inset 0 0 20px rgba(0, 0, 0, 0.5)
                `,
              }}
              variants={itemVariants}
              whileHover={{
                boxShadow: `
                  0 0 30px rgba(255, 107, 107, 0.5),
                  0 0 60px rgba(78, 205, 196, 0.3),
                  0 0 90px rgba(69, 183, 209, 0.2),
                  inset 0 0 30px rgba(0, 0, 0, 0.7)
                `,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-12"
                style={{
                  background:
                    "linear-gradient(45deg, #ff6b6b, #ff9ff3, #54a0ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 20px rgba(255, 107, 107, 0.5)",
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                - About Us -
              </motion.h2>

              <motion.div
                className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>
                  Welcome to HillCity Roleplay, one of the most immersive and
                  community-driven FiveM servers in Sri Lanka. Our goal is to
                  provide a next-level roleplay experience where every player
                  can live out their own story, build connections, and enjoy
                  high-quality RP in a safe and fun environment.
                </p>

                <p>
                  At HillCity, we offer a wide variety of roleplay opportunities
                  for everyone:
                </p>

                {/* Feature Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    {
                      title: "Gang RP",
                      description:
                        "Build your own crew, rise through the streets, and dominate the underworld.",
                      icon: "🦹‍♂️",
                    },
                    {
                      title: "Civilian RP",
                      description:
                        "Live a normal life, start businesses, and create your own unique character story.",
                      icon: "👨‍💼",
                    },
                    {
                      title: "Police Department RP",
                      description:
                        "Protect and serve the city, enforce the law, and keep HillCity safe.",
                      icon: "👮‍♂️",
                    },
                    {
                      title: "And Much More",
                      description:
                        "From jobs and businesses to custom events, the possibilities are endless.",
                      icon: "🎯",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 p-8 rounded-3xl border border-white/20 shadow-lg backdrop-blur-sm"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <div className="text-center">
                        <motion.div
                          className="text-4xl mb-4"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          {feature.icon}
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-white/90">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <p>
                  We also focus heavily on quality and security. Our server is
                  powered by one of the best anti-cheat systems available,
                  ensuring a fair and smooth gameplay experience for all
                  players. With beautifully designed MLOs, custom scripts, and
                  constant updates, HillCity Roleplay continues to set the
                  standard for FiveM RP servers.
                </p>
              </motion.div>
            </motion.div>

            {/* Additional Features Section */}
            <motion.div
              className="mt-20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                style={{
                  background:
                    "linear-gradient(45deg, #ff6b6b, #ff9ff3, #54a0ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Server Features
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🚀",
                    title: "High Performance",
                    description:
                      "Optimized server with smooth gameplay and minimal lag",
                  },
                  {
                    icon: "🛡️",
                    title: "Advanced Security",
                    description:
                      "State-of-the-art anti-cheat and monitoring systems",
                  },
                  {
                    icon: "🎮",
                    title: "Custom Content",
                    description:
                      "Unique scripts, vehicles, and gameplay mechanics",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 rounded-2xl p-6 text-center border border-white/10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <motion.div
                      className="text-4xl mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h4>
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
