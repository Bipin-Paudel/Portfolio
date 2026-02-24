"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

function BLogo({ size = 36 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="url(#bLogo)" />
            <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle"
                fontFamily="Georgia, serif" fontWeight="900" fontSize="40" fill="#ffffff">
                B
            </text>
        </svg>
    );
}

export function Navbar() {
    const { setTheme, theme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when sidebar is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            {/* ── Top Bar ── */}
            <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group" onClick={closeSidebar} aria-label="Bipin Paudel Home">
                        <BLogo size={34} />
                    </Link>

                    {/* Desktop links */}
                    <nav className="hidden md:flex items-center gap-0.5 bg-secondary/30 p-1 rounded-full border border-border/40">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-background transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side: theme toggle + hamburger */}
                    <div className="flex items-center gap-3">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                            </button>
                        )}

                        {/* Hamburger – mobile only */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile Sidebar + Overlay ── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dark backdrop */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={closeSidebar}
                        />

                        {/* Sidebar panel – slides in from the left */}
                        <motion.nav
                            key="sidebar"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 35 }}
                            className="fixed top-0 left-0 h-full w-72 z-[60] md:hidden
                         bg-background/95 backdrop-blur-xl border-r border-border
                         flex flex-col shadow-2xl"
                        >
                            {/* Sidebar header */}
                            <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
                                <Link href="/" onClick={closeSidebar} className="flex items-center gap-2" aria-label="Bipin Paudel Home">
                                    <BLogo size={30} />
                                    <span className="font-bold text-base tracking-tight">Bipin<span className="text-primary">.</span></span>
                                </Link>
                                <button
                                    onClick={closeSidebar}
                                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Nav links */}
                            <ul className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                                {links.map((link, i) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeSidebar}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                                 text-foreground/80 hover:text-foreground hover:bg-secondary
                                 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Sidebar footer */}
                            <div className="px-6 py-6 border-t border-border shrink-0">
                                <p className="text-xs text-muted-foreground mb-3">Bipin Paudel · Full-Stack Dev</p>
                                {mounted && (
                                    <button
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl
                               bg-secondary hover:bg-secondary/80 text-sm font-medium transition-colors"
                                    >
                                        {theme === "dark" ? (
                                            <>
                                                <Sun size={16} /> Light Mode
                                            </>
                                        ) : (
                                            <>
                                                <Moon size={16} /> Dark Mode
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
