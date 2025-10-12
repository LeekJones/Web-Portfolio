import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "about", href: "#about", command: "cat about.md" },
  { label: "skills", href: "#skills", command: "ls skills/" },
  { label: "experience", href: "#experience", command: "tail -f experience.log" },
  { label: "projects", href: "#projects", command: "git log --projects" },
  { label: "contact", href: "#contact", command: "ssh connect" },
];

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prompt = "tyleek@portfolio";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="rounded-2xl border border-white/10 bg-card/80 shadow-card backdrop-blur">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-muted-foreground">
              <span className="flex gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] shadow-glow" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] shadow-glow" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] shadow-glow" />
              </span>
              <span className="font-semibold">terminal</span>
            </div>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-background/90 text-muted-foreground transition hover:text-primary md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
          <div className="flex items-center justify-between gap-6 px-5 py-4">
            <div className="space-y-1">
              <p className="text-xs text-accent">{prompt}:{"~"}$</p>
              <p className="text-lg font-semibold text-foreground">
                {profile.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {profile.role}
              </p>
            </div>
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group inline-flex flex-col items-start gap-1 rounded-lg border border-transparent px-3 py-2 font-medium transition hover:border-primary/40 hover:text-primary"
                >
                  <span>{item.label}</span>
                  <code className="rounded bg-background/80 px-1.5 py-0.5 text-xs text-accent">
                    {item.command}
                  </code>
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-3 text-xs md:flex">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/15 bg-background/80 px-3 py-2 font-medium text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                github
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/15 bg-background/80 px-3 py-2 font-medium text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                linkedin
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg border border-accent/40 bg-accent/20 px-3 py-2 font-medium text-accent transition hover:border-accent/70 hover:bg-accent/30"
              >
                connect
              </a>
            </div>
          </div>
          <div
            className={`md:hidden ${
              isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
            } overflow-hidden transition-[max-height] duration-300`}
          >
            <nav className="flex flex-col gap-2 px-5 py-4 text-sm text-muted-foreground">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-white/10 bg-background/80 px-4 py-3 transition hover:border-primary/40 hover:text-primary"
                >
                  <div className="text-foreground">{item.label}</div>
                  <code className="mt-1 block text-xs text-accent">
                    {item.command}
                  </code>
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-accent/40 bg-accent/20 px-4 py-3 text-accent transition hover:border-accent/60 hover:bg-accent/25"
              >
                connect
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
