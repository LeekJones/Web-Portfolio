import { profile } from "@/data/profile";

export const SkillsSection = () => {
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
        <div className="grid gap-6 md:grid-cols-2">
          {profile.skills.map((category) => (
            <article
              key={category.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#201233]/80 shadow-card backdrop-blur"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                <span>{category.title.toLowerCase()}</span>
                <span className="text-accent/70">module</span>
              </div>
              <ul className="grid gap-2 px-6 py-6 text-sm text-muted-foreground">
                {category.items.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="mt-1 text-accent">-</span>
                    <span className="text-muted-foreground/90">{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
