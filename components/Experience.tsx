import { SectionLabel } from "./About";

type Job = {
  company: string; role: string; period: string;
  location: string; highlights: string[];
};

export default function Experience({ experience }: { experience: Job[] }) {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Experience</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-12">Work history</h2>

      <div className="relative border-l border-black/10 pl-8 space-y-12">
        {experience.map((job, i) => (
          <div key={i} className="relative group">
            <span className="absolute -left-[2.39rem] top-1.5 w-3 h-3 rounded-full border-2 border-[#4f46e5] bg-[#eceaf3] group-hover:bg-[#4f46e5] transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-[#0f0e17]">{job.role}</h3>
                <p className="text-[#4f46e5] text-sm font-medium">{job.company}</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-xs text-[#8a87a2]">{job.period}</p>
                <p className="text-xs text-[#a09db8]">{job.location}</p>
              </div>
            </div>

            <ul className="space-y-2">
              {job.highlights.map((point, j) => (
                <li key={j} className="flex gap-3 text-sm text-[#4e4b6a]">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-black/20 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
