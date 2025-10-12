import { profile } from "@/data/profile";
import { ArrowUpRight, Layers } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-white/10 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
              cat projects/README.md
            </span>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              Reference architectures and telemetry pipelines ready for reuse
            </h2>
            <p className="text-balance text-base text-muted-foreground sm:text-lg">
              Each project combines automation, observability, and reliability to
              keep distributed systems accountable.
            </p>
          </div>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent/70 hover:bg-accent/20"
          >
            github repo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#1d1030]/80 shadow-card backdrop-blur"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                <span>{project.title.toLowerCase()}</span>
                <span className="inline-flex items-center gap-2 text-accent">
                  <Layers className="h-3.5 w-3.5" />
                  {project.year}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-6 px-6 py-6">
                <p className="text-sm text-muted-foreground/90">
                  {project.description}
                </p>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="text-accent">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-background/70 px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
