import { profile } from "@/data/profile";

const sectionSummaries = () => {
  const programming = profile.skills.find(
    (category) => category.title === "Programming & Automation",
  )?.items.length;
  const cloud = profile.skills.find(
    (category) => category.title === "Cloud Platforms",
  )?.items.length;
  const observability = profile.skills.find(
    (category) => category.title === "Observability & Streaming",
  )?.items.length;

  return [
    {
      label: "Languages & Automation",
      value: programming ?? 0,
      description: "Scripting languages, compiled systems, and automation workflows.",
    },
    {
      label: "Cloud & Platform Services",
      value: cloud ?? 0,
      description: "Azure-first delivery with complementary AWS experience.",
    },
    {
      label: "Observability Stack",
      value: observability ?? 0,
      description: "Full telemetry toolchain for metrics, logs, and traces.",
    },
  ];
};

export const SkillsSection = () => {
  const summaries = sectionSummaries();

  return (
    <section id="skills" className="border-t border-white/10 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-accent">
            skills.yaml
          </span>
          <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Systems craftsmanship across code, infrastructure, and telemetry
          </h2>
          <p className="text-balance text-base text-muted-foreground sm:text-lg">
            Each discipline is configured like a module—declarative, automated, and
            observable end-to-end.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {summaries.map((summary) => (
            <div
              key={summary.label}
              className="rounded-3xl border border-white/10 bg-background/60 p-6 shadow-card backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.45em] text-muted-foreground">
                {summary.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-primary">
                {summary.value.toString().padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm text-muted-foreground/80">
                {summary.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((category) => (
            <article
              key={category.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#201233]/80 shadow-card backdrop-blur"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                <span>{category.title.toLowerCase()}</span>
                <span className="text-accent/70">module</span>
              </div>
              <div className="flex flex-1 flex-wrap gap-1.5 px-6 py-5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/90">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-background/60 px-2.5 py-1 text-muted-foreground shadow-sm shadow-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
