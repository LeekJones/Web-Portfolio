import { profile } from "@/data/profile";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40 text-sm text-muted-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr,1fr,1fr]">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground/80">
            {profile.role}
          </span>
          <h3 className="text-2xl font-semibold text-foreground">{profile.name}</h3>
          <p className="max-w-md text-muted-foreground">
            {profile.summary}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-foreground/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${profile.phone}`} className="transition hover:text-primary">
                {profile.phone}
              </a>
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-foreground">Navigate</h4>
          <ul className="grid gap-2">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="block text-xs text-muted-foreground">
            {profile.availability}
          </span>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-foreground">Connect</h4>
          <ul className="grid gap-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="text-muted-foreground/70">
            Crafted for impactful edge-to-cloud and observability initiatives.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
