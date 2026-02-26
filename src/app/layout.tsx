import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CanvasCursor from "@/components/ui/CanvasCursor";
import {
  PersonJsonLd,
  WebSiteJsonLd,
  ProfilePageJsonLd,
} from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://paudelbipin.com.np";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bipin Paudel | Full-Stack Developer & ML Engineer — Nepal",
    template: "%s | Bipin Paudel",
  },
  description:
    "Portfolio of Bipin Paudel — Computer Science student and full-stack developer from Nepal, skilled in Python, Django, React, Next.js, FastAPI, and Machine Learning. Building scalable, impact-driven software solutions.",
  keywords: [
    "Bipin Paudel",
    "Full-Stack Developer",
    "Python Developer",
    "Django Developer",
    "React Developer",
    "Next.js Developer",
    "Machine Learning Engineer",
    "ML Engineer Nepal",
    "Web Developer Nepal",
    "Software Developer Nepal",
    "Bharatpur Developer",
    "Chitwan Developer",
    "FastAPI Developer",
    "Computer Science Student Nepal",
    "Tribhuvan University",
    "Portfolio",
    "Bipin Paudel Portfolio",
    "Fullstack Developer Nepal",
    "paudelbipin",
  ],
  authors: [{ name: "Bipin Paudel", url: BASE_URL }],
  creator: "Bipin Paudel",
  publisher: "Bipin Paudel",
  category: "Portfolio",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Bipin Paudel Portfolio",
    title: "Bipin Paudel | Full-Stack Developer & ML Engineer",
    description:
      "Portfolio of Bipin Paudel — Full-Stack Developer and ML Engineer from Nepal, specializing in Python, Django, React, Next.js, and Machine Learning.",
    images: [
      {
        url: "/Bipin.png",
        width: 800,
        height: 800,
        alt: "Bipin Paudel — Full-Stack Developer & ML Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paudelbipin19",
    creator: "@paudelbipin19",
    title: "Bipin Paudel | Full-Stack Developer & ML Engineer",
    description:
      "Portfolio of Bipin Paudel — Full-Stack Developer and ML Engineer from Nepal. Python · Django · React · Next.js · Machine Learning.",
    images: ["/Bipin.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
        <WebSiteJsonLd />
        <ProfilePageJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <CanvasCursor />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
