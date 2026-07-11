import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-mono text-muted-foreground mb-3">404</p>
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
        Page not found
      </h1>
      <p className="text-muted-foreground max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5
                     text-sm font-medium text-primary-foreground
                     hover:opacity-90 transition-opacity"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-md border border-border
                     px-5 py-2.5 text-sm font-medium
                     hover:bg-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          View Projects
        </Link>
      </div>
    </div>
  );
}
