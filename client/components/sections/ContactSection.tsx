import { profile } from "@/data/profile";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  const phoneHref = profile.phone.replace(/[^+\d]/g, "");

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#180b28]/90 py-24"
    >
      <div className="absolute -left-32 top-12 h-64 w-64 rounded-full bg-primary/30 blur-[140px]" />
      <div className="absolute -right-28 bottom-0 h-64 w-64 rounded-full bg-secondary/30 blur-[140px]" />
      <div className="relative mx-auto w-full max-w-5xl space-y-10 px-6 text-center">
        <span className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-accent">
          sudo connect --target cloud
        </span>
        <div className="space-y-6">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
            Initiate the next cloud or observability mission
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Drop a command and I will respond with architecture insight, delivery
            ops planning, and the telemetry you need to trust rollout after
            rollout.
          </p>
        </div>
        <div className="mx-auto grid w-full gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-6 py-8 text-sm text-accent transition hover:border-accent/60 hover:bg-accent/20"
          >
            <Mail className="h-6 w-6 text-accent transition-transform duration-300 group-hover:-translate-y-1" />
            <span className="text-base font-semibold text-foreground">
              {profile.email}
            </span>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.35em]">
              send packet
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
          <a
            href={`tel:${phoneHref}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-background/80 px-6 py-8 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            <Phone className="h-6 w-6 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
            <span className="text-base font-semibold text-foreground">
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.35em]">
              initiate call
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-background/80 px-6 py-8 text-sm text-muted-foreground">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-base font-semibold text-foreground">
              {profile.location}
            </span>
            <span className="text-xs uppercase tracking-[0.35em]">
              base of ops
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
