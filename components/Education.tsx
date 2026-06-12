import { SectionLabel } from "./About";
import { GraduationCap } from "lucide-react";

type EducationEntry = { institution: string; degree: string; period: string; location: string };

export default function Education({ education }: { education: EducationEntry[] }) {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Education</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-12">Academic background</h2>

      <div className="space-y-4">
        {education.map((entry, i) => (
          <div
            key={i}
            className="flex gap-4 items-start rounded-2xl border border-black/8 bg-white/55 backdrop-blur-sm p-5 hover:border-black/15 transition-colors"
          >
            <div className="mt-0.5 p-2 rounded-lg bg-indigo-50 border border-indigo-100 shrink-0">
              <GraduationCap size={18} className="text-indigo-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-base font-semibold text-[#0f0e17]">{entry.institution}</h3>
                <span className="text-xs text-[#5a5775] shrink-0">{entry.period}</span>
              </div>
              <p className="text-sm text-[#2d2b45] mt-0.5">{entry.degree}</p>
              <p className="text-xs text-[#6b6888] mt-0.5">{entry.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
