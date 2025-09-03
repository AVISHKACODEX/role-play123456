"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/join", label: "Join Now" },
    { href: "/application", label: "Application" },
    { href: "/vehicles", label: "OOC Vehicles" },
    { href: "/contact", label: "Contact with Us" },
  ];

  useEffect(() => {
    setIsLoaded(true);
    // Set active item based on current pathname
    const currentItem = navItems.find((item) => item.href === pathname);
    if (currentItem) {
      setActiveItem(currentItem.href);
    }
  }, [pathname]);

  const handleItemClick = (href: string, event: React.MouseEvent) => {
    setActiveItem(href);
    setIsMobileMenuOpen(false);

    // Enhanced ripple effect
    const button = event.currentTarget as HTMLElement;
    const ripple = document.createElement("div");
    ripple.className =
      "absolute rounded-full bg-white/30 transform scale-0 animate-[ripple-animation_0.6s_linear] pointer-events-none";

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  // Don't render until component is mounted on client
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {/* Mobile Header with Animated Logo - Centered */}
      <motion.div
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="flex flex-col items-center justify-center px-4 py-2 min-h-[120px]">
          {/* Animated Logo - Centered */}
          <motion.div
            className="relative mb-2 flex justify-center"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-lg"
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
            <div className="relative w-32 h-32 flex justify-center">
              <Image
                src="/images/animated-logo.gif"
                alt="Hill City Roleplay"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Mobile Menu Button - Centered */}
          <motion.button
            className="bg-white/10 border border-white/20 rounded-full p-2 text-white flex justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown - Centered */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="bg-black/95 border-t border-white/10 backdrop-blur-[20px]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="px-4 py-3 space-y-2 flex flex-col items-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      href={item.href}
                      className={`block text-white no-underline py-3 px-4 rounded-[20px] font-medium text-base transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden group text-center ${
                        activeItem === item.href
                          ? "bg-white/10"
                          : "hover:bg-white/10"
                      }`}
                      onClick={(e) => handleItemClick(item.href, e)}
                    >
                      {/* Radial gradient background on hover */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Text */}
                      <span className="relative z-[2]">{item.label}</span>

                      {/* Hover effect line */}
                      <motion.div
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[50%] h-[2px] bg-gradient-to-r from-[#667eea] to-[#4facfe] rounded-[1px]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Desktop Navigation - Centered */}
      <motion.nav
        className="nav-fixed-center hidden md:block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="nav-background px-8 py-3 flex justify-center items-center">
          <div className="flex items-center gap-3 justify-center">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`nav-item text-white no-underline ${
                    activeItem === item.href ? "active" : ""
                  }`}
                  onClick={(e) => handleItemClick(item.href, e)}
                >
                  {/* Radial gradient background on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Text */}
                  <span className="relative z-[2] transition-all duration-300 ease-in-out group-hover:scale-105">
                    {item.label}
                  </span>

                  {/* Hover effect line */}
                  <motion.div
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[60%] h-[3px] bg-gradient-to-r from-[#667eea] to-[#4facfe] rounded-[2px]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                </Link>

                {/* Separators */}
                {index < navItems.length - 1 && (
                  <motion.div
                    className="nav-separator"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
