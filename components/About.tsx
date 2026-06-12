export default function About({ summary }: { summary: string }) {
  const paragraphs = summary.split("\n\n").filter(Boolean);
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>About</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-8">
        Building things that scale
      </h2>
      <div className="max-w-3xl space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[#2d2b45] text-lg leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-[#4f46e5] mb-4">
      {children}
    </p>
  );
}
