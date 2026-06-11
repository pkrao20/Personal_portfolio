import { SectionLabel } from "./About";

type SkillMap = Record<string, string[]>;

const CATEGORY_COLORS: Record<string, string> = {
  Languages:        "bg-violet-50  text-violet-700  border-violet-100",
  Frontend:         "bg-sky-50     text-sky-700     border-sky-100",
  "Backend & APIs": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Cloud & DevOps": "bg-orange-50  text-orange-700  border-orange-100",
  Databases:        "bg-rose-50    text-rose-700    border-rose-100",
  "Testing & Tools":"bg-amber-50   text-amber-700   border-amber-100",
  "Core CS":        "bg-slate-50   text-slate-600   border-slate-100",
};

export default function Skills({ skills }: { skills: SkillMap }) {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-12">Technical toolkit</h2>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => {
          const colorClass = CATEGORY_COLORS[category] ?? "bg-slate-50 text-slate-600 border-slate-100";
          return (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#8a87a2] mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className={`text-sm px-3 py-1 rounded-full border ${colorClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
