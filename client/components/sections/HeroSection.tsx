import { profile } from "@/data/profile";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const focusItems = profile.focusAreas;

const PortfolioHero = () => {
  const phoneHref = profile.phone.replace(/[^+\d]/g, "");

  return (
    <section id="about" className="relative overflow-hidden pb-24 pt-28 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-background/75 shadow-card backdrop-blur">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] shadow-glow" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] shadow-glow" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] shadow-glow" />
                </span>
                whoami.sh
              </span>
              <span className="text-accent/70">EXECUTING</span>
            </div>
            <div className="space-y-5 px-6 py-6 font-mono text-sm leading-relaxed text-muted-foreground">
              <p className="text-accent">
                $ whoami
              </p>
              <p className="pl-6 text-xl font-semibold text-foreground">
                {profile.name}
              </p>
              <p className="text-accent">$ echo \"{profile.role}\"</p>
              <p className="pl-6 text-secondary">
                {profile.headline}
              </p>
              <p className="text-accent">$ cat summary.txt</p>
              <p className="pl-6 text-base text-muted-foreground/90">
                {profile.summary}
              </p>
              <p className="text-accent"># focus-areas</p>
              <div className="space-y-2 pl-6">
                {focusItems.map((item) => (
                  <p key={item} className="text-sm text-primary">
                    ▸ {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-background/75 shadow-card backdrop-blur">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              <span>contact.cfg</span>
              <span className="text-accent/70">ACTIVE</span>
            </div>
            <div className="grid gap-4 px-6 py-6 text-sm text-muted-foreground sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="group flex flex-col gap-1 rounded-2xl border border-accent/30 bg-accent/10 px-5 py-4 text-accent transition hover:border-accent/60 hover:bg-accent/20"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-accent/70">
                  email
                </span>
                <span className="text-base font-semibold text-foreground">
                  {profile.email}
                </span>
                <span className="inline-flex items-center gap-1 text-xs">
                  send
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-1 rounded-2xl border border-white/15 bg-background/80 px-5 py-4 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
                  linkedin
                </span>
                <span className="text-base font-semibold text-foreground">
                  {profile.links.linkedin.replace("https://", "")}
                </span>
                <span className="inline-flex items-center gap-1 text-xs">
                  open
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
              <a
                href={`tel:${phoneHref}`}
                className="group flex flex-col gap-1 rounded-2xl border border-white/15 bg-background/80 px-5 py-4 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
                  phone
                </span>
                <span className="text-base font-semibold text-foreground">
                  {profile.phone}
                </span>
                <span className="inline-flex items-center gap-1 text-xs">
                  dial
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
              <div className="flex flex-col gap-1 rounded-2xl border border-white/15 bg-background/80 px-5 py-4 text-muted-foreground">
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
                  location
                </span>
                <span className="text-base font-semibold text-foreground">
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs">
                  geo
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-2 capitalize transition hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-3.5 w-3.5" />
              github
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-2 capitalize transition hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-3.5 w-3.5" />
              linkedin
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-accent transition hover:border-accent/60 hover:bg-accent/20"
            >
              <Mail className="h-3.5 w-3.5" />
              contact
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-background/75 shadow-card backdrop-blur">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              <span>metrics.json</span>
              <span className="text-accent/70">READONLY</span>
            </div>
            <div className="grid gap-4 px-6 py-6 sm:grid-cols-2">
              {profile.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-[#221136]/80 p-5 shadow-inner"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-primary">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/80">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-accent/30 bg-accent/10 px-6 py-6 text-sm text-accent shadow-card">
            <p className="text-xs uppercase tracking-[0.35em] text-accent/70">
              availability
            </p>
            <p className="mt-3 text-base text-foreground">
              {profile.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
