"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

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
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight"
            onClick={closeSidebar}
          >
            Bipin Paudel
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Sidebar + Overlay ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <nav
        className={`fixed top-0 left-0 h-full w-72 z-[60] md:hidden
                    bg-background border-r border-border flex flex-col
                    transition-transform duration-200 ease-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
          <Link
            href="/"
            onClick={closeSidebar}
            className="font-semibold tracking-tight"
          >
            Bipin Paudel
          </Link>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeSidebar}
                className="flex items-center px-4 py-3 rounded-md text-base
                           text-foreground/80 hover:text-foreground hover:bg-secondary
                           transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar footer */}
        <div className="px-6 py-6 border-t border-border shrink-0">
          <p className="text-xs text-muted-foreground mb-3">
            Bipin Paudel · AI & Backend Developer
          </p>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md
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
      </nav>
    </>
  );
}
