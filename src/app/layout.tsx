import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CanvasCursor from "@/components/ui/CanvasCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bipin Paudel | Full-Stack Developer & ML Engineer",
  description:
    "Portfolio of Bipin Paudel — Computer Science student and full-stack developer skilled in Django, React, Next.js, and Machine Learning.",
  keywords: ["Bipin Paudel", "Full-Stack Developer", "Django", "React", "Machine Learning", "Nepal"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paudelbipin.com.np",
    title: "Bipin Paudel | Full-Stack Developer",
    description: "Portfolio of Bipin Paudel — Django · React · ML Engineer based in Nepal.",
    siteName: "Bipin Paudel Portfolio",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <CanvasCursor />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

