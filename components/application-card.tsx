"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useHydration } from "@/hooks/use-hydration";

interface ApplicationCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export default function ApplicationCard({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  href,
}: ApplicationCardProps) {
  const isHydrated = useHydration();

  if (!isHydrated) {
    return (
      <div className="relative group">
        <Link href={href} className="block">
          <div className="relative h-96 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
              <img
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                className="h-64 w-auto object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 text-center">
                {title}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-4 line-clamp-2">
                {description}
              </p>
              <div className="flex justify-center">
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-6 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full">
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <Link href={href} className="block">
        <motion.div
          className="relative h-96 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 cursor-pointer"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
            borderColor: "rgba(59, 130, 246, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
            <motion.img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="h-64 w-auto object-contain"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-white mb-3 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-gray-300 text-sm text-center mb-4 line-clamp-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-6 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full">
                  {buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
