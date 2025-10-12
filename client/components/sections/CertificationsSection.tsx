import { profile } from "@/data/profile";
import { BadgeCheck } from "lucide-react";

export const CertificationsSection = () => {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground/80">
            Continuous Learning
          </span>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Certifications & commitments underway
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Expanding mastery across Azure DevOps, container orchestration, and
            cloud-native ecosystems to complement real-world delivery experience.
          </p>
        </div>
        <ul className="grid flex-1 gap-4 sm:grid-cols-2">
          {profile.certifications.map((cert) => (
            <li
              key={cert.title}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-5 text-sm text-muted-foreground/90 shadow-card"
            >
              <BadgeCheck className="h-5 w-5 text-secondary" />
              <div>
                <p className="font-semibold text-foreground">{cert.title}</p>
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
