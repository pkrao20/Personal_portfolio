import { SectionLabel } from "./About";

type Project = {
  name: string; period: string; description: string;
  highlights: string[]; tech: string[];
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Projects</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-12">Personal builds</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="rounded-2xl border border-black/8 bg-white/55 backdrop-blur-sm p-6 hover:border-black/15 hover:bg-white/70 transition-all"
          >
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="text-lg font-semibold text-[#0f0e17]">{project.name}</h3>
              <span className="text-xs text-[#8a87a2]">{project.period}</span>
            </div>
            <p className="text-sm text-[#4e4b6a] mb-4">{project.description}</p>
            <ul className="space-y-1.5 mb-5">
              {project.highlights.map((h, j) => (
                <li key={j} className="flex gap-3 text-xs text-[#6e6b85]">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-black/20 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
