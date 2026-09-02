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
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 lg:gap-16">
          {/* ── Text ── */}
          <div className="flex-1 min-w-0 space-y-5 lg:space-y-6">
            <p className="text-sm text-muted-foreground font-mono">
              Open to Software Engineering, Backend & AI roles
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              {about.name}
            </h1>

            <p className="text-lg lg:text-xl font-medium text-primary">
              {about.title}
            </p>

            <p className="text-muted-foreground lg:text-lg max-w-2xl leading-relaxed">
              {about.tagline}
            </p>

            <div className="flex flex-wrap gap-3 items-center pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary
                           px-5 py-2.5 text-sm font-medium text-primary-foreground
                           hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={about.resumeLink}
                download="Bipin_Paudel_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-border
                           bg-background px-5 py-2.5 text-sm font-medium
                           hover:bg-secondary transition-colors"
              >
                Resume
                <Download className="w-4 h-4" />
              </a>

              <div className="flex gap-2">
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

          {/* ── Photo ── */}
          <div className="relative w-36 h-36 sm:w-52 sm:h-52 lg:w-72 lg:h-72 shrink-0 rounded-lg overflow-hidden border border-border">
            <Image
              src="/bipin.jpg"
              alt="Bipin Paudel"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 208px, 288px"
              className="object-cover"
              style={{ objectPosition: "center 85%" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
