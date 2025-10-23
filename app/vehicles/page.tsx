"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Vehicle data with prices and images
const vehicles = [
  // RS 2000 - Premium vehicles
  {
    id: "bugatti",
    name: "Bugatti",
    price: 5000,
    frontImage: "/car_img/bugatti_front.png",
    backImage: "/car_img/bugatti_back.png",
    category: "premium",
  },
  {
    id: "lamborghini",
    name: "Lamborghini Urus",
    price: 5000,
    frontImage: "/car_img/lamborghini_urus_frot.png",
    backImage: "/car_img/lamborghini_urus_back.png",
    category: "premium",
  },
  {
    id: "gtr",
    name: "Nissan GTR",
    price: 5000,
    frontImage: "/car_img/gtr_front.png",
    backImage: "/car_img/gtr_back.png",
    category: "premium",
  },
  {
    id: "bmw",
    name: "BMW",
    price: 5000,
    frontImage: "/car_img/bmw_front.png",
    backImage: "/car_img/bmw_back.png",
    category: "premium",
  },
  {
    id: "benz",
    name: "Mercedes Benz",
    price: 5000,
    frontImage: "/car_img/benz_front.png",
    backImage: "/car_img/benz_back.png",
    category: "premium",
  },
  {
    id: "v8",
    name: "V8",
    price: 5000,
    frontImage: "/car_img/v8_front.png",
    backImage: "/car_img/v8_back.png",
    category: "premium",
  },
  // RS 1500 - Standard vehicles
  {
    id: "bentley",
    name: "Bentley",
    price: 3500,
    frontImage: "/car_img/bentley_front.png",
    backImage: "/car_img/bentley_back.png",
    category: "standard",
  },
  {
    id: "masarati",
    name: "Maserati",
    price: 3500,
    frontImage: "/car_img/masarati_front.png",
    backImage: "/car_img/masarati_back.png",
    category: "standard",
  },
  {
    id: "supra",
    name: "Toyota Supra",
    price: 3500,
    frontImage: "/car_img/supra_front.png",
    backImage: "/car_img/supra_back.png",
    category: "standard",
  },
  {
    id: "mazda",
    name: "Mazda",
    price: 3500,
    frontImage: "/car_img/mazda_front.png",
    backImage: "/car_img/mazda_back.png",
    category: "standard",
  },
  {
    id: "subaru",
    name: "Subaru",
    price: 3500,
    frontImage: "/car_img/subaru_front.png",
    backImage: "/car_img/subaru_back.png",
    category: "standard",
  },
  {
    id: "nissanjeep",
    name: "Nissan Jeep",
    price: 3500,
    frontImage: "/car_img/nissanjeep_front.png",
    backImage: "/car_img/nissanjeep_back.png",
    category: "standard",
  },
  {
    id: "rubiconjeep",
    name: "Rubicon Jeep",
    price: 3500,
    frontImage: "/car_img/rubiconjeep_front.png",
    backImage: "/car_img/rubiconjeep_back.png",
    category: "standard",
  },
  // RS 1000 - Bikes
  {
    id: "bmw_s1000rr",
    name: "BMW S1000RR",
    price: 3000,
    frontImage: "/car_img/Bmw_S1000rr_bike_front.png",
    backImage: "/car_img/Bmw_S1000rr_bike_back.png",
    category: "bike",
  },
  {
    id: "ducati",
    name: "Ducati Bike",
    price: 3000,
    frontImage: "/car_img/dukati_bike_front.png",
    backImage: "/car_img/dukati_bike_back.png",
    category: "bike",
  },
  {
    id: "ninja_h2",
    name: "Ninja H2",
    price: 3000,
    frontImage: "/car_img/ninja_h2_bike_front.png",
    backImage: "/car_img/ninja_h2_bike_back.png",
    category: "bike",
  },
];

// Sort vehicles by price (highest to lowest)
const sortedVehicles = vehicles.sort((a, b) => b.price - a.price);

interface VehicleCardProps {
  vehicle: (typeof vehicles)[0];
  index: number;
}

function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      suppressHydrationWarning
    >
      {/* Price Badge */}
      <div className="absolute top-4 right-4 z-10" suppressHydrationWarning>
        <div
          className={`px-4 py-2 rounded-full text-base font-bold ${
            vehicle.price === 2000
              ? "bg-yellow-500/90 text-black"
              : vehicle.price === 1500
              ? "bg-blue-500/90 text-white"
              : "bg-green-500/90 text-white"
          }`}
          suppressHydrationWarning
        >
          RS {vehicle.price}
        </div>
      </div>

      {/* Vehicle Image */}
      <div
        className="relative h-64 mb-6 overflow-hidden rounded-lg"
        suppressHydrationWarning
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          suppressHydrationWarning
        >
          <Image
            src={isHovered ? vehicle.backImage : vehicle.frontImage}
            alt={vehicle.name}
            fill
            className="object-contain transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          suppressHydrationWarning
        />
      </div>

      {/* Vehicle Info */}
      <div className="text-center" suppressHydrationWarning>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
          {vehicle.name}
        </h3>
        <p className="text-white/70 text-sm capitalize">
          {vehicle.category} Vehicle
        </p>
      </div>

      {/* Hover effect indicator */}
      {/* Removed hover text as per request */}
    </motion.div>
  );
}

export default function VehiclesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
            { left: 11, top: 21 },
            { left: 26, top: 46 },
            { left: 41, top: 16 },
            { left: 61, top: 36 },
            { left: 81, top: 26 },
            { left: 16, top: 61 },
            { left: 36, top: 81 },
            { left: 56, top: 71 },
            { left: 76, top: 51 },
            { left: 91, top: 41 },
            { left: 6, top: 81 },
            { left: 31, top: 11 },
            { left: 51, top: 91 },
            { left: 71, top: 16 },
            { left: 86, top: 66 },
            { left: 21, top: 31 },
            { left: 46, top: 56 },
            { left: 66, top: 41 },
            { left: 81, top: 76 },
            { left: 96, top: 21 },
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
      <main className="relative z-10 pt-32 pb-16 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          suppressHydrationWarning
        >
          {/* Header */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8"
            variants={itemVariants}
            suppressHydrationWarning
          >
            <motion.h1
              className="text-4xl font-bold text-white mb-6 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              OOC Vehicles
            </motion.h1>

            <motion.p
              className="text-white/80 text-center mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover our exclusive custom vehicles available in Hill City
              Roleplay. Hover over vehicles to see different angles.
            </motion.p>

            {/* Price Legend */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              suppressHydrationWarning
            >
              <div className="flex items-center gap-2" suppressHydrationWarning>
                <div
                  className="w-4 h-4 bg-yellow-500/90 rounded"
                  suppressHydrationWarning
                ></div>
                <span className="text-white/80 text-sm">RS 2000 - Premium</span>
              </div>
              <div className="flex items-center gap-2" suppressHydrationWarning>
                <div
                  className="w-4 h-4 bg-blue-500/90 rounded"
                  suppressHydrationWarning
                ></div>
                <span className="text-white/80 text-sm">
                  RS 1500 - Standard
                </span>
              </div>
              <div className="flex items-center gap-2" suppressHydrationWarning>
                <div
                  className="w-4 h-4 bg-green-500/90 rounded"
                  suppressHydrationWarning
                ></div>
                <span className="text-white/80 text-sm">RS 1000 - Bikes</span>
              </div>
            </motion.div>

            {/* Purchase Instructions */}
            <motion.div
              className="text-center mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              suppressHydrationWarning
            >
              <p className="text-white/90 text-lg font-medium">
                - To purchase a vehicle, please open a ticket in our Discord
                server -
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              suppressHydrationWarning
            >
              <Link href="/">
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-8 py-3 text-lg font-medium backdrop-blur-sm transition-all duration-200">
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Vehicles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemVariants}
            suppressHydrationWarning
          >
            {sortedVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
