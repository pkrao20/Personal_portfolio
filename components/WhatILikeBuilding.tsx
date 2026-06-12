import { SectionLabel } from "./About";

const INTERESTS = [
  "Search systems",
  "Backend architecture",
  "Payments and idempotency",
  "Workflow automation",
  "AI-powered products",
  "Scalable APIs",
];

export default function WhatILikeBuilding() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Engineering Taste</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-8">What I like building</h2>
      <ul className="flex flex-col gap-3 max-w-xl">
        {INTERESTS.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[#2d2b45] text-base">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4f46e5] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
