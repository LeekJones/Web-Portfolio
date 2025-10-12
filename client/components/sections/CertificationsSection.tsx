import { profile } from "@/data/profile";
import { BadgeCheck } from "lucide-react";

export const CertificationsSection = () => {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            watch certifications --progress
          </span>
          <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Continuous learning logged like a long-running job
          </h2>
          <p className="text-balance text-base text-muted-foreground sm:text-lg">
            Credentials underway to reinforce delivery leadership across DevOps,
            Kubernetes, and multi-cloud operations.
          </p>
        </div>
        <ul className="grid flex-1 gap-4 sm:grid-cols-2">
          {profile.certifications.map((cert) => (
            <li
              key={cert.title}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#211235]/80 px-4 py-5 text-sm text-muted-foreground shadow-card backdrop-blur"
            >
              <BadgeCheck className="h-5 w-5 text-accent" />
              <div>
                <p className="break-words font-semibold text-foreground">{cert.title}</p>
                <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
                  {cert.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsSection;
