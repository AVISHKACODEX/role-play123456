"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setShowSplash(false), 1600);
		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{showSplash && (
				<motion.div
					className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4 }}
				>
					<div className="flex flex-col items-center">
						<div className="relative w-48 h-48 md:w-64 md:h-64">
							<img
								src="/images/animated-logo.gif"
								alt="Hill City Roleplay"
								className="w-full h-full object-contain drop-shadow-2xl"
							/>
						</div>
						<div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10">
							<motion.div
								className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-500"
								initial={{ x: "-100%" }}
								animate={{ x: ["-100%", "150%"] }}
								transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
