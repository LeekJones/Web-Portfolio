import { profile } from "@/data/profile";
import { ArrowUpRight, Layers } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-white/5 bg-white/5 py-24 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground/80">
              Project Spotlight
            </span>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Architecting telemetry pipelines and automation blueprints that
              scale
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Featured initiatives spanning Azure IoT, validation observability,
              and reference architectures that accelerate SRE practices for
              engineering teams.
            </p>
          </div>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            GitHub Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                <Layers className="h-3 w-3" />
                {project.year}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground/90">
                  {project.description}
                </p>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground/90">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-secondary" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
