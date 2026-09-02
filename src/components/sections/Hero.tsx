import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Youtube } from "lucide-react";

export default function Hero() {
  const { about, socials } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-[calc(100svh-4rem)] mt-16 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 sm:gap-10 lg:gap-16">
          {/* ── Content Column ── */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-5 lg:space-y-6 w-full text-center md:text-left">
            {/* Header: Roles, Name, Title */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm text-muted-foreground font-mono">
                Open to Software Engineering, Backend & AI roles
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                {about.name}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-medium text-primary">
                {about.title}
              </p>
            </div>

            {/* ── Photo (Visible on Mobile only: directly under Name & Title) ── */}
            <div className="md:hidden relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] shrink-0 rounded-2xl overflow-hidden border border-border bg-card shadow-sm mx-auto my-6">
              <Image
                src="/bipin.png"
                alt="Bipin Paudel"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover"
                style={{ objectPosition: "center 0%" }}
                priority
              />
            </div>

            {/* Bio description */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {about.tagline}
            </p>

            {/* Actions & Socials */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center justify-center md:justify-start pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary
                           px-4 sm:px-5 py-2.5 text-sm font-medium text-primary-foreground
                           hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={about.resumeLink}
                download="Bipin_Paudel_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-border
                           bg-background px-4 sm:px-5 py-2.5 text-sm font-medium
                           hover:bg-secondary transition-colors"
              >
                Resume
                <Download className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-md border border-border text-muted-foreground
                             hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-md border border-border text-muted-foreground
                             hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2.5 rounded-md border border-border text-muted-foreground
                             hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Photo (Visible on Desktop / Tablets md: and up) ── */}
          <div className="hidden md:block relative md:w-60 lg:w-72 md:aspect-[4/5] lg:h-[350px] lg:aspect-auto shrink-0 rounded-xl overflow-hidden border border-border bg-card shadow-sm">
            <Image
              src="/bipin.png"
              alt="Bipin Paudel"
              fill
              sizes="(max-width: 1024px) 240px, 288px"
              className="object-cover"
              style={{ objectPosition: "center 0%" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
