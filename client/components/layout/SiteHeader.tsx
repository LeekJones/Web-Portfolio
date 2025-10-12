import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
];

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <a
          href="/"
          className="group relative flex items-center gap-3 text-base font-semibold text-foreground"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/80 via-secondary/60 to-primary/35 text-lg font-bold text-background shadow-glow transition-transform duration-500 group-hover:scale-105">
            TJ
          </span>
          <span className="flex flex-col">
            <span className="text-sm uppercase tracking-[0.45em] text-muted-foreground">
              {profile.role}
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {profile.name}
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm font-medium text-foreground/90 shadow-card md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm transition-colors duration-200 hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-sm font-semibold text-primary-foreground/90 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/30"
          >
            Let&apos;s Connect
          </a>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              {social.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <nav
        className={`md:hidden ${
          isOpen ? "visible max-h-96 opacity-100" : "invisible max-h-0 opacity-0"
        } flex flex-col gap-3 border-t border-white/10 bg-black/60 px-6 py-4 text-sm font-semibold text-muted-foreground transition-all duration-300`}
      >
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="rounded-lg px-4 py-3 text-foreground transition hover:bg-white/10"
          >
            {item.label}
          </a>
        ))}
        <a
          href={`mailto:${profile.email}`}
          onClick={() => setIsOpen(false)}
          className="rounded-lg border border-primary/50 bg-primary/20 px-4 py-3 text-primary-foreground transition hover:bg-primary/30"
        >
          Let&apos;s Connect
        </a>
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-white/10 px-4 py-3 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            {social.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
