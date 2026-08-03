import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  PersonJsonLd,
  WebSiteJsonLd,
  ProfilePageJsonLd,
} from "@/components/seo/JsonLd";

const BASE_URL = "https://paudelbipin.com.np";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bipin Paudel | AI & Backend Developer from Nepal",
    template: "%s | Bipin Paudel",
  },
  description:
    "Official portfolio website of Bipin Paudel — AI & Backend Developer based in Chitwan, Nepal. Specializing in Python, Django, Next.js, RAG, and machine learning.",
  keywords: [
    "Bipin Paudel",
    "Bipin Paudel Nepal",
    "Bipin Paudel Chitwan",
    "Bipin Paudel Developer",
    "Bipin Paudel Portfolio",
    "Bipin Paudel Software Engineer",
    "Bipin Paudel SkinPal AI",
    "Bipin Paudel ResearchGap",
    "Bipin Paudel CSIT",
    "AI Developer Nepal",
    "Backend Developer Nepal",
    "Python Developer Nepal",
    "Django Developer Nepal",
    "Next.js Developer Nepal",
    "React Native Developer Nepal",
    "Expo Mobile Developer",
    "Android App Developer Nepal",
    "Mobile Developer Nepal",
    "Machine Learning Engineer Nepal",
  ],
  authors: [{ name: "Bipin Paudel", url: BASE_URL }],
  creator: "Bipin Paudel",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Bipin Paudel",
    title: "Bipin Paudel | AI & Backend Developer",
    description:
      "AI & Backend developer from Nepal working with Python, Django, Next.js, and machine learning.",
    images: [
      {
        url: "/bipin.jpg",
        width: 800,
        height: 800,
        alt: "Bipin Paudel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paudelbipin19",
    creator: "@paudelbipin19",
    title: "Bipin Paudel | AI & Backend Developer",
    description:
      "AI & Backend developer from Nepal working with Python, Django, Next.js, and machine learning.",
    images: ["/bipin.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <PersonJsonLd />
        <WebSiteJsonLd />
        <ProfilePageJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
