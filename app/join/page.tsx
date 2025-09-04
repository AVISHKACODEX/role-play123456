"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ServerInfo {
  name: string;
  playerCount: number;
  maxPlayers: number;
  status: "online" | "offline" | "maintenance";
  uptime?: string;
  lastUpdated: string;
}

export default function JoinPage() {
  const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch server information
  const fetchServerInfo = async () => {
    try {
      const response = await fetch("/api/server-status");
      if (response.ok) {
        const data = await response.json();
        setServerInfo(data);
      } else {
        setServerInfo({
          name: "Hill City Roleplay",
          playerCount: 45,
          maxPlayers: 128,
          status: "online",
          uptime: "24h 15m",
          lastUpdated: new Date().toISOString(),
        });
      }
    } catch (error) {
      setServerInfo({
        name: "Hill City Roleplay",
        playerCount: 45,
        maxPlayers: 128,
        status: "online",
        uptime: "24h 15m",
        lastUpdated: new Date().toISOString(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServerInfo();
    const interval = setInterval(fetchServerInfo, 30000);
    setIsLoaded(true);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-emerald-400";
      case "offline":
        return "text-red-400";
      case "maintenance":
        return "text-yellow-400";
      default:
        return "text-gray-300";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Background Image with Animation */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/city-background.jpeg)" }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        suppressHydrationWarning
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60" suppressHydrationWarning />

      {/* Floating Particles Background */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        suppressHydrationWarning
      >
        {[...Array(20)].map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const positions = [
            { left: 13, top: 23 },
            { left: 27, top: 47 },
            { left: 43, top: 17 },
            { left: 63, top: 37 },
            { left: 83, top: 27 },
            { left: 17, top: 63 },
            { left: 37, top: 83 },
            { left: 57, top: 73 },
            { left: 77, top: 53 },
            { left: 93, top: 43 },
            { left: 7, top: 83 },
            { left: 33, top: 13 },
            { left: 53, top: 93 },
            { left: 73, top: 17 },
            { left: 87, top: 67 },
            { left: 22, top: 33 },
            { left: 47, top: 57 },
            { left: 67, top: 43 },
            { left: 82, top: 77 },
            { left: 97, top: 23 },
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

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <motion.main
          className="max-w-3xl mx-auto pt-32 pb-16 px-4 flex flex-col items-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Logo and title */}
          <motion.div
            className="mb-8 flex flex-col items-center"
            variants={itemVariants}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <Image
                src="/images/fivem-logo.png"
                alt="FiveM Logo"
                width={120}
                height={120}
                className="object-contain mb-4 drop-shadow-lg"
                style={{ filter: "brightness(0) invert(1)" }}
                priority
              />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold mb-2 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Hill City Roleplay
            </motion.h1>
            <motion.div
              className="flex items-center gap-2 mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span
                className={`font-semibold ${getStatusColor(
                  serverInfo?.status ?? "online"
                )}`}
              >
                {isLoading
                  ? "Checking status..."
                  : serverInfo
                  ? serverInfo.status.charAt(0).toUpperCase() +
                    serverInfo.status.slice(1)
                  : "Unknown"}
              </span>
              {serverInfo && (
                <span className="text-sm text-white/70">
                  {serverInfo.playerCount} / {serverInfo.maxPlayers} players
                </span>
              )}
            </motion.div>
            {serverInfo?.uptime && (
              <motion.span
                className="text-xs text-white/60"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Uptime: {serverInfo.uptime}
              </motion.span>
            )}
          </motion.div>

          {/* Main Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-10"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants}>
              <Button
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-lg bg-white text-neutral-900 hover:bg-gray-100 transition"
                asChild
              >
                <a href="fivem://connect/your-actual-server-ip:30120">Play Now</a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-lg bg-[#5865F2] text-white hover:bg-[#4752C4] transition"
                onClick={() =>
                  window.open("https://discord.gg/hillcityrp", "_blank")
                }
              >
                Join Discord
              </Button>
            </motion.div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            variants={itemVariants}
          >
            {/* Server Rules */}
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm flex flex-col">
                <h2 className="text-2xl font-bold mb-2">Server Rules</h2>
                <p className="text-white/80 mb-4">
                  Read our community guidelines before joining.
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <motion.div variants={buttonVariants}>
                    <Button
                      asChild
                      className="w-full bg-white text-neutral-900 hover:bg-gray-100"
                    >
                      <a href="/rules/english">English Rules</a>
                    </Button>
                  </motion.div>
                  <motion.div variants={buttonVariants}>
                    <Button
                      asChild
                      className="w-full bg-white/10 text-white hover:bg-white/20"
                    >
                      <a href="/rules/sinhala">Sinhala Rules</a>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
            {/* Quick Start Guide */}
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm flex flex-col">
                <h2 className="text-2xl font-bold mb-2">Quick Start Guide</h2>
                <ol className="list-decimal list-inside text-white/80 space-y-2 mb-4">
                  <li>Join our Discord server for updates and support.</li>
                  <li>Apply for whitelist to get access.</li>
                  <li>Connect and start your roleplay journey!</li>
                </ol>
                <motion.div variants={buttonVariants}>
                  <Button
                    className="w-full bg-[#5865F2] text-white hover:bg-[#4752C4] mt-auto"
                    onClick={() =>
                      window.open("https://discord.gg/hillcityrp", "_blank")
                    }
                  >
                    Join Discord
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}
