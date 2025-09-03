"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DiscordMember {
  id: string;
  username: string;
  status: string;
  avatar_url: string;
  game?: {
    name: string;
  };
}

interface DiscordWidget {
  id: string;
  name: string;
  presence_count: number;
  members: DiscordMember[];
}

export default function ContactPage() {
  const [discordData, setDiscordData] = useState<DiscordWidget | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        // Use our server-side API route to avoid CORS issues
        const response = await fetch("/api/discord-widget", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          // Add timeout to prevent hanging requests
          signal: AbortSignal.timeout(10000), // 10 second timeout
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setDiscordData(data);
      } catch (error) {
        console.error("Failed to fetch Discord data:", error);
        // Set fallback data when Discord API is unavailable
        setDiscordData({
          id: "1345678800477753394",
          name: "Hill City Roleplay",
          presence_count: 0,
          members: [],
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiscordData();
    setIsLoaded(true);
  }, []);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-500";
      case "dnd":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

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

      {/* Floating Particles Background */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        suppressHydrationWarning
      >
        {[...Array(20)].map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const positions = [
            { left: 15, top: 25 },
            { left: 35, top: 45 },
            { left: 55, top: 15 },
            { left: 75, top: 35 },
            { left: 90, top: 20 },
            { left: 20, top: 60 },
            { left: 40, top: 80 },
            { left: 60, top: 70 },
            { left: 80, top: 50 },
            { left: 95, top: 40 },
            { left: 10, top: 80 },
            { left: 30, top: 10 },
            { left: 50, top: 90 },
            { left: 70, top: 15 },
            { left: 85, top: 65 },
            { left: 25, top: 30 },
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
              suppressHydrationWarning
            />
          );
        })}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main
        className="relative z-10 pt-44 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 px-3 sm:px-4 md:px-6"
        suppressHydrationWarning
      >
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          suppressHydrationWarning
        >
          {/* Page Title */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            suppressHydrationWarning
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Contact With Us
            </motion.h1>
            <motion.p
              className="text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Join our vibrant community and connect with fellow roleplayers in
              Hill City
            </motion.p>
          </motion.div>

          {/* Discord Widget Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16"
            variants={itemVariants}
            suppressHydrationWarning
          >
            {/* Discord Server Info */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              suppressHydrationWarning
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Hill City Roleplay Discord
                </h2>
                {isLoading ? (
                  <div className="animate-pulse" suppressHydrationWarning>
                    <div
                      className="h-8 bg-white/20 rounded mb-4"
                      suppressHydrationWarning
                    ></div>
                    <div
                      className="h-6 bg-white/20 rounded"
                      suppressHydrationWarning
                    ></div>
                  </div>
                ) : discordData ? (
                  <div>
                    <p className="text-2xl font-bold text-blue-400 mb-2">
                      {discordData.presence_count > 0
                        ? `${discordData.presence_count} Members Online`
                        : "Join Our Community"}
                    </p>
                    <p className="text-white/80">
                      {discordData.presence_count > 0
                        ? `Join our growing community of ${discordData.name}`
                        : "Connect with fellow roleplayers in Hill City"}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-2xl font-bold text-blue-400 mb-2">
                      Join Our Community
                    </p>
                    <p className="text-white/80">
                      Connect with fellow roleplayers in Hill City
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-4" suppressHydrationWarning>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  suppressHydrationWarning
                >
                  <Button
                    className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-4 text-lg font-medium rounded-xl transition-all duration-200"
                    onClick={() =>
                      window.open("https://discord.gg/hillcityrp", "_blank")
                    }
                  >
                    Join Discord Server
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  suppressHydrationWarning
                >
                  <Button
                    className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 py-4 text-lg font-medium rounded-xl transition-all duration-200"
                    onClick={() =>
                      window.open(
                        "https://facebook.com/groups/hillcityrp",
                        "_blank"
                      )
                    }
                  >
                    Join Facebook Group
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Online Members Preview */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              suppressHydrationWarning
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Members Online
              </h3>

              {isLoading ? (
                <div className="space-y-3" suppressHydrationWarning>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 animate-pulse"
                      suppressHydrationWarning
                    >
                      <div
                        className="w-10 h-10 bg-white/20 rounded-full"
                        suppressHydrationWarning
                      ></div>
                      <div className="flex-1" suppressHydrationWarning>
                        <div
                          className="h-4 bg-white/20 rounded w-24 mb-2"
                          suppressHydrationWarning
                        ></div>
                        <div
                          className="h-3 bg-white/20 rounded w-16"
                          suppressHydrationWarning
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : discordData && discordData.members.length > 0 ? (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {discordData.members.slice(0, 10).map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="relative">
                        <img
                          src={member.avatar_url}
                          alt={member.username}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-black ${getStatusColor(
                            member.status
                          )}`}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">
                          {member.username}
                        </p>
                        {member.game && (
                          <p className="text-white/60 text-sm truncate">
                            Playing {member.game.name}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  {discordData.members.length > 10 && (
                    <p className="text-white/60 text-center py-2">
                      +{discordData.members.length - 10} more members online
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/60 mb-2">
                    No members currently online
                  </p>
                  <p className="text-white/40 text-sm">
                    Join our Discord to see who's online!
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Server Information */}
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center mb-16"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            suppressHydrationWarning
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Hill City Roleplay Server
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-3xl mx-auto">
              Experience the most immersive roleplay environment in FiveM. Join
              thousands of players in a living, breathing city where every
              choice matters and every story unfolds.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4"
              suppressHydrationWarning
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
              >
                <Button
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 text-lg font-medium rounded-full transition-all duration-200"
                  onClick={() =>
                    window.open("https://discord.gg/hillcityrp", "_blank")
                  }
                >
                  Join Our Community
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
              >
                <Button
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 text-lg font-medium rounded-full transition-all duration-200"
                  onClick={() =>
                    window.open(
                      "https://facebook.com/groups/hillcityrp",
                      "_blank"
                    )
                  }
                >
                  Follow on Facebook
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Developer Profile Section */}
          <motion.div
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            suppressHydrationWarning
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Meet Our Developer
              </h3>
              <p className="text-white/80 text-lg">
                The creative mind behind Hill City Roleplay's immersive systems
              </p>
            </div>

            {/* Expandable Developer Details */}
            <div className="bg-black/30 rounded-xl border border-white/20 overflow-hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
              >
                <div>
                  <h4 className="text-xl font-bold text-white">
                    View Developer Details
                  </h4>
                  <p className="text-white/60 text-sm mt-1">
                    Click to expand and learn more about my expertise
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/60"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 space-y-6">
                  <div className="bg-black/20 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-4">
                      About Me
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      I'm a dedicated FiveM Developer specializing in creating
                      custom scripts, resources, and server frameworks tailored
                      to unique roleplay experiences. With expertise in Qbox,
                      QBCore, and standalone development, I focus on
                      performance, creativity, and delivering immersive gameplay
                      systems that enhance player engagement.
                    </p>
                  </div>

                  <div className="bg-black/20 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-4">
                      What I Do
                    </h4>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start space-x-3">
                        <span className="text-white/80 mt-1">•</span>
                        <span>
                          <strong>Custom Script Development</strong> – From
                          jobs, heists, and crafting systems to advanced
                          utilities like inventory, banking, and UI reworks.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-white/80 mt-1">•</span>
                        <span>
                          <strong>Server Optimization</strong> – FPS boosts,
                          anti-cheat systems, and resource performance
                          improvements for smooth gameplay.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-white/80 mt-1">•</span>
                        <span>
                          <strong>UI & UX Design</strong> – Modern, responsive,
                          and theme-based UIs (glassmorphism, NoPixel-inspired
                          dashboards).
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-white/80 mt-1">•</span>
                        <span>
                          <strong>Framework Integration</strong> – Expertise in
                          Qbox, QBCore, Ox Inventory, UI, and third-party
                          scripts.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-white/80 mt-1">•</span>
                        <span>
                          <strong>Custom Systems</strong> – Mining, farming,
                          recycling, garages, boss menus, rent systems, and more
                          — built from scratch or modified for your server's
                          needs.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-white/80 mt-1">•</span>
                        <span>
                          <strong>Discord Integration</strong> – Webhooks and
                          logging systems for security, staff tools, and player
                          management.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-black/20 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-4">
                      Why Choose Me?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-white/80">✔️</span>
                        <span className="text-white/80">
                          Clean, optimized, and secure code
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/80">✔️</span>
                        <span className="text-white/80">
                          Tailored solutions to match your server's vision
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/80">✔️</span>
                        <span className="text-white/80">
                          Continuous support and updates
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/80">✔️</span>
                        <span className="text-white/80">
                          Passionate about roleplay immersion and server growth
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Me Section */}
                  <div className="bg-black/20 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-6 text-center">
                      Contact Me
                    </h4>
                    <div className="text-center">
                      <p className="text-white/80 mb-6">
                        Ready to bring your FiveM server vision to life? Get in
                        touch directly via WhatsApp for a quick response!
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-medium rounded-lg transition-all duration-200"
                          onClick={() =>
                            window.open("https://wa.me/94760194974", "_blank")
                          }
                        >
                          <svg
                            className="w-6 h-6 mr-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          WhatsApp: +94 76 019 4974
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
