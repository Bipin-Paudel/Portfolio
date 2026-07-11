import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionShell from "./SectionShell";

export default function About() {
  return (
    <SectionShell
      id="about"
      title="About"
      subtitle="A bit of context on who I am and what I've been working on."
    >
      <p className="text-muted-foreground lg:text-lg leading-relaxed">
        {portfolioData.about.description}
      </p>

      <p className="mt-4 text-muted-foreground lg:text-lg leading-relaxed">
        Right now I&apos;m learning machine learning in depth and building a
        mobile app with React Native.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="rounded-lg border border-border bg-card p-6 space-y-5">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-base">Education</h3>
          </div>
          <div className="space-y-5">
            {portfolioData.education.map((edu, i) => (
              <div key={i}>
                <p className="text-xs font-mono text-muted-foreground mb-1">
                  {edu.period}
                </p>
                <h4 className="font-medium text-sm leading-snug mb-0.5">
                  {edu.degree}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-base">Certifications</h3>
          </div>
          <div className="space-y-3">
            {portfolioData.certifications.map((cert, i) => {
              const content = (
                <div className="flex items-start justify-between gap-2 p-3 rounded-md bg-secondary hover:bg-secondary/70 transition-colors">
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug truncate">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  {cert.link && (
                    <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0 mt-1" />
                  )}
                </div>
              );

              return cert.link ? (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
