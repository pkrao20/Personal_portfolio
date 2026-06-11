import { SectionLabel } from "./About";
import { Trophy, ExternalLink } from "lucide-react";

type Achievement = { title: string; detail: string; link: string | null };

export default function Achievements({ achievements }: { achievements: Achievement[] }) {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Achievements</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-12">Competitive highlights</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="rounded-2xl border border-black/8 bg-white/55 backdrop-blur-sm p-5 hover:border-black/15 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <Trophy size={18} className="text-amber-500 mt-0.5 shrink-0" />
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a09db8] hover:text-[#4f46e5] transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <p className="text-sm font-semibold text-[#0f0e17] mb-1">{a.title}</p>
            <p className="text-xs text-[#8a87a2]">{a.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
