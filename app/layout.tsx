import type React from "react";
import type { Metadata } from "next";
import { Geist as GeistSans, JetBrains_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedLogo from "@/components/animated-logo";
import ClientOnly from "@/components/client-only";
import ThemeInitializer from "@/components/theme-initializer";
import LinkPreloader from "@/components/link-preloader";
import { Toaster } from "@/components/ui/toaster";
import { ModernToastProvider } from "@/components/modern-toast-provider";
import { Suspense } from "react";
import SplashScreen from "@/components/splash-screen";

// Configure fonts - must be called and assigned to const in module scope
const geistSans = GeistSans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const bruceForever = localFont({
  src: "../Fonts/BruceForeverRegular-X3jd2.ttf",
  variable: "--font-bruce-forever",
});

export const metadata: Metadata = {
  title: "Hill City Roleplay",
  description: "Welcome to Hill City Roleplay - Your FiveM Gaming Community",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo/FinalLogo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/logo/FinalLogo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo/FinalLogo.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/logo/FinalLogo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/logo/FinalLogo.png",
    shortcut: "/logo/FinalLogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${inter.variable} ${bruceForever.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <body
        className="font-inter dark:bg-black dark:text-white"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="hill-city-theme"
        >
          <ModernToastProvider>
            <ClientOnly>
              <ThemeInitializer />
              <AnimatedLogo />
              <LinkPreloader />
              <Toaster />
              <SplashScreen />
            </ClientOnly>
            <Suspense fallback={null}>{children}</Suspense>
            {/* Global full-width footer */}
            <footer className="fixed bottom-0 left-0 right-0 z-50">
              <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <span className="text-white/70">Developed by</span>
                  <a
                    href="https://eganexsoftware.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline"
                  >
                    Eganex Softwares
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="https://www.facebook.com/share/1G7z1GPojm/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </footer>
          </ModernToastProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
