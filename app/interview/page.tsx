import interviewsRaw from "@/data/interviews.json";
import type { InterviewEntry } from "@/types/content";
const interviewsData = interviewsRaw as InterviewEntry[];
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, BookOpen } from "lucide-react";

export const metadata = {
  title: "Interview Experiences · Prashant Rao",
  description: "Detailed write-ups of SDE interviews — DSA rounds, system design, behavioural, and prep advice.",
};

const OUTCOME_STYLES: Record<string, string> = {
  Selected: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Rejected: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  Reference: "text-indigo-600 bg-indigo-400/10 border-indigo-400/20",
  Pending: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

export default function InterviewsPage() {
  const interviews = interviewsData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar name={portfolioData.name} />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-28 pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-4">
          Interview Experiences
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0e17] mb-4">
          Interview write-ups
        </h1>
        <p className="text-[#2d2b45] mb-14 max-w-xl">
          Round-by-round breakdowns of real SDE interviews — what was asked, what worked, and what I'd
          do differently.
        </p>

        {interviews.length === 0 ? (
          <div className="rounded-xl border border-black/8 border-dashed p-16 text-center">
            <p className="text-[#5a5775] text-sm">Write-ups coming soon.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {interviews.map((entry) => {
              const outcomeClass =
                OUTCOME_STYLES[entry.outcome] ?? "text-[#2d2b45] bg-zinc-400/10 border-zinc-400/20";
              return (
                <Link
                  key={entry.slug}
                  href={`/interview/${entry.slug}`}
                  className="group block rounded-xl border border-black/8 bg-white/55 p-6 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h2 className="text-lg font-semibold text-[#0f0e17] group-hover:text-indigo-600 transition-colors">
                        {entry.company}
                      </h2>
                      <p className="text-sm text-[#2d2b45]">{entry.role}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${outcomeClass}`}>
                        {entry.outcome}
                      </span>
                      <span className="text-xs text-[#6b6888]">
                        {new Date(`${entry.date}-01`).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#2d2b45] mb-4 leading-relaxed">{entry.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#6b6888]">
                      <BookOpen size={12} />
                      {entry.rounds.length} round{entry.rounds.length !== 1 ? "s" : ""}
                    </div>
                    <ArrowRight size={14} className="text-[#6b6888] group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
