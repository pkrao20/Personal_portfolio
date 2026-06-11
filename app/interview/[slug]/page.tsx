import { notFound } from "next/navigation";
import interviewsRaw from "@/data/interviews.json";
import type { InterviewEntry } from "@/types/content";
const interviewsData = interviewsRaw as InterviewEntry[];
import PageShell from "@/components/PageShell";
import { Lightbulb, MessageSquare, CheckCircle } from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return interviewsData.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = interviewsData.find((e) => e.slug === slug);
  if (!entry) return {};
  return {
    title: `${entry.company} – ${entry.role} · Prashant Rao`,
    description: entry.excerpt,
  };
}

const OUTCOME_STYLES: Record<string, string> = {
  Selected: "text-emerald-600 bg-emerald-400/10 border-emerald-400/20",
  Rejected: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  Reference: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  Pending: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

const TYPE_ICONS: Record<string, React.ReactNode> = {
  DSA: <span className="text-xs font-bold text-violet-600">DSA</span>,
  "System Design": <span className="text-xs font-bold text-sky-600">System Design</span>,
  Technical: <span className="text-xs font-bold text-emerald-600">Technical</span>,
  Culture: <span className="text-xs font-bold text-amber-600">Culture</span>,
  Assignment: <span className="text-xs font-bold text-orange-600">Assignment</span>,
};

export default async function InterviewDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = interviewsData.find((e) => e.slug === slug);
  if (!entry) notFound();

  const outcomeClass =
    OUTCOME_STYLES[entry.outcome] ?? "text-[#4e4b6a] bg-zinc-400/10 border-zinc-400/20";

  return (
    <PageShell backHref="/interview" backLabel="All experiences">
      <article>
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${outcomeClass}`}>
              {entry.outcome}
            </span>
            <span className="text-xs text-[#8a87a2]">
              {new Date(`${entry.date}-01`).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0f0e17] leading-tight mb-1">
            {entry.company}
          </h1>
          <p className="text-[#4e4b6a] text-lg mb-5">{entry.role}</p>

          <p className="text-[#4e4b6a] leading-relaxed border-l-2 border-indigo-200 pl-4">
            {entry.excerpt}
          </p>
        </header>

        {/* Rounds */}
        <div className="space-y-8 mb-12">
          {entry.rounds.map((round, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/8 bg-white/55 p-6"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-semibold text-[#0f0e17]">{round.name}</span>
                <span className="px-2 py-0.5 rounded-full bg-black/5 border border-black/10 text-xs leading-none">
                  {TYPE_ICONS[round.type] ?? round.type}
                </span>
              </div>

              <p className="text-sm text-[#8a87a2] mb-5">{round.description}</p>

              {round.questions.length > 0 && (
                <div className="mb-5">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a87a2] mb-3">
                    <MessageSquare size={11} />
                    Questions asked
                  </p>
                  <ul className="space-y-2">
                    {round.questions.map((q, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#4e4b6a]">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-black/20 shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-lg bg-indigo-50 border border-indigo-100 p-4">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-2">
                  <Lightbulb size={11} />
                  Tips
                </p>
                <p className="text-sm text-[#4e4b6a] leading-relaxed">{round.tips}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Tips */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600 mb-3">
            <CheckCircle size={15} />
            Overall advice
          </p>
          <p className="text-[#4e4b6a] leading-relaxed">{entry.overallTips}</p>
        </div>
      </article>
    </PageShell>
  );
}
