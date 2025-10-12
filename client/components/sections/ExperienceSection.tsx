import { profile } from "@/data/profile";
import { Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground/80">
            Experience
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Leading telemetry-rich, automated platforms across global teams
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            From Fortune 100 IoT transformations to resilient validation labs and
            boutique SRE consulting, I design reliable delivery systems aligned to
            mission outcomes.
          </p>
        </div>

        <ol className="relative space-y-10 border-l border-white/10 pl-8">
          <span className="absolute left-0 top-0 -translate-x-[9px] h-4 w-4 rounded-full border border-primary bg-background" />
          {profile.experience.map((role) => (
            <li key={`${role.company}-${role.start}`} className="relative">
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <article className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-card">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {role.role}
                    </h3>
                    <p className="text-lg text-primary">
                      {role.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {role.start} — {role.end}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {role.location}
                    </span>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 text-sm text-muted-foreground/90">
                  {role.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-secondary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                    >
                      {item}
                    </span>
                  ))}
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
