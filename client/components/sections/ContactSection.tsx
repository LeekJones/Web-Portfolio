import { profile } from "@/data/profile";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  const phoneHref = profile.phone.replace(/[^+\d]/g, "");

  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-gradient-to-br from-primary/15 via-background to-secondary/10 py-24"
    >
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/40 blur-[140px]" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-secondary/40 blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-6 text-center">
        <span className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground/80">
          Connect
        </span>
        <div className="space-y-6">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
            Let&apos;s architect resilient, observable cloud platforms together
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Whether you need to modernize infrastructure, elevate observability,
            or enable automated delivery pipelines, I bring hands-on execution and
            clear communication across stakeholders.
          </p>
        </div>
        <div className="mx-auto grid w-full gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-6 w-6 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
            <span className="text-base font-semibold text-foreground">
              {profile.email}
            </span>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.35em]">
              Email
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
          <a
            href={`tel:${phoneHref}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            <Phone className="h-6 w-6 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
            <span className="text-base font-semibold text-foreground">
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.35em]">
              Phone
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-sm text-muted-foreground">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-base font-semibold text-foreground">
              {profile.location}
            </span>
            <span className="text-xs uppercase tracking-[0.35em]">
              Based in
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
