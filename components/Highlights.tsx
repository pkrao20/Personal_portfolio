import { SectionLabel } from "./About";

const HIGHLIGHTS = [
  "IIT Indore Graduate (2024)",
  "Founding Engineer at Perusal",
  "Built ATS platform from scratch",
  "Reduced onboarding pipeline from 90s → 10s",
  "Built wealth-management flows at BlinkMoney",
  "5★ CodeChef (Rating 2055)",
  "Codeforces Specialist",
];

export default function Highlights() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <SectionLabel>Highlights</SectionLabel>
      <ul className="flex flex-col gap-3 max-w-2xl">
        {HIGHLIGHTS.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[#4e4b6a] text-base">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4f46e5] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
