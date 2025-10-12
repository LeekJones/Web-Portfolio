import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const focusItems = profile.focusAreas;

export const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-24 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute -right-32 top-0 -z-10 h-72 w-72 rounded-full bg-secondary/40 blur-[120px]" />
      <div className="absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-primary/40 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center">
        <div className="space-y-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-muted-foreground/80">
            <Sparkles className="h-4 w-4" />
            Impact-driven cloud leadership
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {profile.headline}
            </p>
          </div>
          <p className="max-w-2xl text-base text-muted-foreground/90 sm:text-lg">
            {profile.summary} I specialize in weaving observability, automation,
            and resilient infrastructure into high-stakes, edge-to-cloud
            platforms that demand unwavering reliability.
          </p>
          <div className="flex flex-wrap gap-3">
            {focusItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "shadow-glow bg-primary/90 text-primary-foreground hover:bg-primary"
              )}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Tyleek
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/20 bg-white/5 text-foreground hover:border-primary/60 hover:text-primary"
              )}
            >
              LinkedIn
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="transition hover:text-primary"
              >
                {profile.phone}
              </a>
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href={`mailto:${profile.email}`}
                className="transition hover:text-primary"
              >
                {profile.email}
              </a>
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-foreground">Impact Metrics</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Outcomes delivered across Azure, multi-cloud, and hybrid edge
              ecosystems.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {profile.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-6 text-center shadow-inner"
                >
                  <span className="text-3xl font-semibold text-primary">
                    {metric.value}
                  </span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/80">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-sm text-primary-foreground">
              <p className="font-semibold uppercase tracking-[0.35em] text-primary">
                Availability
              </p>
              <p className="mt-2 text-base text-foreground">
                {profile.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
