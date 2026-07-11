type SectionShellProps = {
  id: string;
  title: string;
  subtitle: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
};

export default function SectionShell({
  id,
  title,
  subtitle,
  aside,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="border-t border-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16">
          <header className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
            {aside}
          </header>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
