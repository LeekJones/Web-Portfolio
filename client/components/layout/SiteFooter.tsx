import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

const navigation = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export const SiteFooter = () => {
  const year = new Date().getFullYear();
  const phoneHref = profile.phone.replace(/[^+\d]/g, "");

  return (
    <footer className="border-t border-white/10 bg-background/90">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-card/80 p-8 shadow-card backdrop-blur">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow"></span>
            <span>// session summary</span>
          </div>
          <div className="grid gap-8 pt-6 md:grid-cols-[1.4fr,1fr,1fr]">
            <div className="space-y-4">
              <p className="text-sm text-accent">{profile.name}@{profile.location}</p>
              <p className="text-base text-muted-foreground/90">
                {profile.summary}
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <span className="text-accent/80">email</span>: {" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-foreground transition hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </div>
                <div>
                  <span className="text-accent/80">phone</span>: {" "}
                  <a
                    href={`tel:${phoneHref}`}
                    className="text-foreground transition hover:text-accent"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                navigation
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-transparent px-2 py-1 transition hover:border-primary/40 hover:text-primary"
                    >
                      <span className="text-accent/80">→</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                connect
              </p>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-background/80 px-3 py-2 transition hover:border-primary/50 hover:text-primary"
              >
                <Github className="h-4 w-4" />
                github
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-background/80 px-3 py-2 transition hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                linkedin
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-accent/40 bg-accent/15 px-3 py-2 text-accent transition hover:border-accent/60 hover:bg-accent/25"
              >
                <Mail className="h-4 w-4" />
                request a call
              </a>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-white/10 bg-background/70 p-4 text-xs text-muted-foreground/80">
            <p>
              {profile.availability}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-background/95">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {year} {profile.name}. uptime >= 99.9%</span>
          <span>crafted in purple terminal mode</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;