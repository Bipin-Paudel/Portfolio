import { portfolioData } from "@/data/portfolio";
import { MapPin, ExternalLink } from "lucide-react";
import SectionShell from "./SectionShell";

export default function Experience() {
  return (
    <SectionShell
      id="experience"
      title="Experience"
      subtitle="Places I've worked and what I built there."
    >
      <div className="divide-y divide-border">
        {portfolioData.experience.map((job) => (
          <article
            key={job.company + job.role}
            className="py-8 first:pt-0 last:pb-0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                {job.role}
              </h3>
              <span className="text-xs font-mono text-muted-foreground whitespace-nowrap sm:text-right sm:pt-1.5">
                {job.period}
              </span>
              <p className="sm:col-start-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {job.company}
                </span>
                <span className="mx-2">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {job.location}
                </span>
              </p>
            </div>

            <ul className="mt-4 space-y-2">
              {job.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {job.link && (
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                {job.link.replace("https://", "")}
              </a>
            )}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
