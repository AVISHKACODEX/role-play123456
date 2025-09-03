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
import { Suspense } from "react";

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
        sizes: "any",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo/FinalLogo.png",
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
          <ClientOnly>
            <ThemeInitializer />
            <AnimatedLogo />
            <LinkPreloader />
          </ClientOnly>
          <Suspense fallback={null}>{children}</Suspense>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
