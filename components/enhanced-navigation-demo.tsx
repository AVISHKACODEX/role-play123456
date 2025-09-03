"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Motion-enabled Button - using motion.button for proper motion support
const MotionButton = motion.button;

export default function EnhancedNavigationDemo() {
  const [activeTab, setActiveTab] = useState("home");

  const demoItems = [
    {
      id: "home",
      label: "Home",
      icon: "🏠",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "about",
      label: "About",
      icon: "ℹ️",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "services",
      label: "Services",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "contact",
      label: "Contact",
      icon: "📞",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4 gradient-text">
            Enhanced Navigation Demo
          </h1>
          <p className="text-xl text-gray-300">
            Showcasing improved animations and design elements
          </p>
        </motion.div>

        {/* Enhanced Navigation Bar */}
        <motion.div
          className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4">
            {demoItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <MotionButton
                  onClick={() => setActiveTab(item.id)}
                  className={`relative overflow-hidden px-6 py-3 rounded-xl font-medium transition-all duration-300 border-0 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                    activeTab === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Icon */}
                  <motion.span
                    className="mr-2 text-lg"
                    animate={{
                      rotate: activeTab === item.id ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.span>

                  {/* Label */}
                  <span className="relative z-10">{item.label}</span>

                  {/* Active indicator */}
                  {activeTab === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-white rounded-full"
                      layoutId="activeTab"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </MotionButton>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 min-h-[400px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.div
                className="text-6xl mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {demoItems.find((item) => item.id === activeTab)?.icon}
              </motion.div>

              <h2 className="text-3xl font-bold text-white mb-4">
                {demoItems.find((item) => item.id === activeTab)?.label} Content
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                This is the content for the{" "}
                {demoItems
                  .find((item) => item.id === activeTab)
                  ?.label.toLowerCase()}{" "}
                section. Notice the smooth transitions and enhanced animations
                when switching between tabs.
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              title: "Smooth Animations",
              description: "Enhanced with Framer Motion for fluid transitions",
              icon: "✨",
            },
            {
              title: "Glass Morphism",
              description: "Modern backdrop blur and transparency effects",
              icon: "🔮",
            },
            {
              title: "Responsive Design",
              description: "Optimized for all screen sizes and devices",
              icon: "📱",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-black/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
