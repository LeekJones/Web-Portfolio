import { profile } from "@/data/profile";

export const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-white/5 bg-white/3 py-24 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground/80">
            Skills & Tooling
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Full-stack cloud engineering across code, infrastructure, and
            observability
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            A balanced blend of software engineering, DevOps automation, and
            telemetry craftsmanship enables rapid delivery of resilient platforms
            without sacrificing governance or insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.skills.map((category) => (
            <article
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="relative z-[1] space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="grid gap-2 text-sm text-muted-foreground/90">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 text-sm text-muted-foreground/90"
                    >
                      <span className="mt-1 block h-2 w-2 rounded-full bg-primary/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
