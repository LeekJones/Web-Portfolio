import { profile } from "@/data/profile";
import { Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            tail -n 3 experience.log
          </span>
          <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Deploying resilient platforms with observable certainty
          </h2>
          <p className="text-balance text-base text-muted-foreground sm:text-lg">
            Operational stories from cloud modernization, validation automation,
            and SRE consulting—documented like commit history.
          </p>
        </div>

        <ol className="relative space-y-12 border-l border-white/10 pl-10">
          <span className="absolute left-0 top-0 -translate-x-[9px] h-4 w-4 rounded-full border border-accent bg-background" />
          {profile.experience.map((role) => (
            <li key={`${role.company}-${role.start}`} className="relative">
              <span className="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-accent bg-background" />
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#1b0f2b]/80 shadow-card backdrop-blur">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  <span>{role.company.toLowerCase()}</span>
                  <span className="text-accent/70">{role.role.toLowerCase()}</span>
                </div>
                <div className="grid gap-4 px-6 py-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {role.role}
                    </h3>
                    <ul className="grid gap-4 text-sm text-muted-foreground/90">
                      {role.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-background/70 p-4"
                        >
                          <span className="mt-1 text-accent">➤</span>
                          <span className="break-words leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-background/80 p-5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      {role.start} — {role.end}
                    </span>
                    <span className="inline-flex items-center gap-2 text-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      {role.location}
                    </span>
                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
                        stack
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {role.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
