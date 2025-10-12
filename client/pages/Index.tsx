import PortfolioHero from "@/components/sections/HeroSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { profile } from "@/data/profile";
import { Gauge, Layers, Orbit, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Edge-to-cloud observability",
    description:
      "Telemetry pipelines designed for IoT, hybrid, and distributed platforms with real-time insight and traceability.",
    icon: Orbit,
  },
  {
    title: "Automated delivery systems",
    description:
      "Infrastructure-as-code, GitOps, and CI/CD workflows that shrink deployment timeframes and remove manual drift.",
    icon: Gauge,
  },
  {
    title: "Reliability leadership",
    description:
      "Incident-ready operations, SLO culture, and resilient architectures that protect uptime for mission-critical workloads.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-cloud expertise",
    description:
      "Practical experience spanning Azure, AWS, on-prem clusters, and edge devices with governance baked in from day one.",
    icon: Layers,
  },
];

export default function Index() {
  return (
    <div className="space-y-24 pb-24">
      <PortfolioHero />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            printf "core pillars"
          </span>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#180b28]/80 shadow-card backdrop-blur"
              >
                <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-foreground/80">{title.toLowerCase()}</span>
                </div>
                <div className="flex flex-1 flex-col gap-4 px-5 py-5">
                  <p className="text-sm text-muted-foreground/90">{description}</p>
                  <span className="mt-auto text-xs uppercase tracking-[0.35em] text-accent">
                    {profile.name}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
