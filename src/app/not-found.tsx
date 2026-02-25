import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist. Navigate back to Bipin Paudel's portfolio.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <div className="relative mb-8">
                <h1 className="text-[10rem] md:text-[14rem] font-black text-primary/10 leading-none select-none">
                    404
                </h1>
                <p className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-foreground">
                    Page Not Found
                </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-md mb-10">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="flex gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 
                       text-sm font-semibold text-white shadow-lg shadow-primary/30
                       hover:bg-primary/90 transition-all duration-200"
                >
                    <Home className="w-4 h-4" />
                    Go Home
                </Link>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-border 
                       bg-background/80 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold 
                       shadow-sm hover:bg-secondary transition-all duration-200"
                >
                    <ArrowLeft className="w-4 h-4" />
                    View Projects
                </Link>
            </div>
        </div>
    );
}
