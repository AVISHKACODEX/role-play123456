"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ClientOnly from "@/components/client-only";
import { useHydration } from "@/hooks/use-hydration";

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
  const isHydrated = useHydration();
  const [isPlayDialogOpen, setIsPlayDialogOpen] = useState(false);
  const [dontAskAgain, setDontAskAgain] = useState(false);

  // Prefer cfx join code for best compatibility with FiveM launcher
  const fivemProtocolUrl = "fivem://connect/cfx.re/join/royam7";
  const httpFallbackUrl = "https://cfx.re/join/royam7";

  useEffect(() => {
    try {
      const stored = localStorage.getItem("hc_fivem_auto_open");
      if (stored === "true") {
        setDontAskAgain(true);
      }
    } catch {}
  }, []);

  const handlePlayClick = () => {
    if (dontAskAgain) {
      // Directly try to open FiveM when user opted to skip dialog
      openFiveM();
      return;
    }
    setIsPlayDialogOpen(true);
  };

  const openFiveM = () => {
    // Strategy 1: navigate via location (works in most browsers)
    try {
      window.location.href = fivemProtocolUrl;
    } catch {}

    // Strategy 2: hidden iframe (helps on some browsers)
    try {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = fivemProtocolUrl;
      document.body.appendChild(iframe);
      // Clean up later
      setTimeout(() => iframe.remove(), 3000);
    } catch {}

    // Fallback: open official HTTP join link in a new tab after small delay
    setTimeout(() => {
      try {
        window.open(httpFallbackUrl, "_blank");
      } catch {
        // last resort
        window.location.assign(httpFallbackUrl);
      }
    }, 1200);
  };

  const handleConfirmOpen = () => {
    try {
      if (dontAskAgain) {
        localStorage.setItem("hc_fivem_auto_open", "true");
      }
    } catch {}
    openFiveM();
    setIsPlayDialogOpen(false);
  };

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

  // Avoid rendering complex animated content until client is hydrated
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center" suppressHydrationWarning>
        Loading...
      </div>
    );
  }

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

      {/* Floating Particles Background - client only to avoid hydration mismatches */}
      <ClientOnly>
        <div
          className="fixed inset-0 overflow-hidden pointer-events-none"
          suppressHydrationWarning
        >
          {[...Array(20)].map((_, i) => {
            // Deterministic positions to keep stable across renders
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
                animate={{ y: [0, -100, 0], opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
              />
            );
          })}
        </div>
      </ClientOnly>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <motion.main
          className="max-w-3xl mx-auto pt-32 pb-16 px-4 flex flex-col items-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded && isHydrated ? "visible" : "hidden"}
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
            {/* Status/players/uptime intentionally removed from UI */}
          </motion.div>

          {/* Main Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-10 px-2"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants}>
              <Button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-white text-neutral-900 hover:bg-gray-100 transition"
                onClick={handlePlayClick}
              >
                Play Now
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-[#5865F2] text-white hover:bg-[#4752C4] transition"
                onClick={() =>
                  window.open("https://discord.gg/hillcity", "_blank")
                }
              >
                Join Discord
              </Button>
            </motion.div>
          </motion.div>

          {/* Modern confirmation dialog for launching FiveM */}
          <AlertDialog open={isPlayDialogOpen} onOpenChange={setIsPlayDialogOpen}>
            <AlertDialogContent className="bg-neutral-900/80 backdrop-blur-md border border-white/10 text-white">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-bold">
                  Open FiveM?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-white/70">
                  We’ll open the FiveM app and connect you to Hill City Roleplay.
                  If you prefer, you can choose to skip this confirmation next time.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <div className="mt-4 flex items-center gap-3">
                <input
                  id="dont-ask"
                  type="checkbox"
                  checked={dontAskAgain}
                  onChange={(e) => setDontAskAgain(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-transparent"
                />
                <label htmlFor="dont-ask" className="text-sm text-white/80 select-none">
                  Don’t ask me again on this device
                </label>
              </div>

              <AlertDialogFooter className="mt-6">
                <AlertDialogCancel className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleConfirmOpen}
                  className="bg-white text-neutral-900 hover:bg-gray-100"
                >
                  Open FiveM
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

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
                      window.open("https://discord.gg/hillcity", "_blank")
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
