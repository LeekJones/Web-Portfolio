import HeroSection from "@/components/sections/HeroSection";
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
      <HeroSection />
      <section className="px-6">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="flex-1 text-sm text-muted-foreground/90">{description}</p>
              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground/60">
                {profile.name}
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
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
