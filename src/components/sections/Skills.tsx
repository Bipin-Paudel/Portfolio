import { portfolioData } from "@/data/portfolio";
import SectionShell from "./SectionShell";

export default function Skills() {
  const groups = [
    { title: "Programming", items: portfolioData.skills.programming },
    { title: "Web & Backend", items: portfolioData.skills.frameworks },
    { title: "AI & Data Science", items: portfolioData.skills.ml },
    { title: "Mobile", items: portfolioData.skills.mobile },
    { title: "Databases", items: portfolioData.skills.databases },
    { title: "Tools", items: portfolioData.skills.tools },
  ];

  return (
    <SectionShell
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I work with regularly."
    >
      <div className="divide-y divide-border">
        {groups.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-1 sm:grid-cols-[160px_minmax(0,1fr)] gap-2 sm:gap-6 py-5 first:pt-0 last:pb-0"
          >
            <h3 className="text-sm font-medium text-muted-foreground">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md border border-border bg-secondary text-sm font-mono text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
