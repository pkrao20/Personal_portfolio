import portfolioData from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Links · Prashant Rao",
  description: "A collection of projects and apps built by Prashant Rao.",
};

const LINKS = [
  {
    title: "Zesty Pony",
    url: "https://zesty-pony-57e672.netlify.app/",
    description: "Live project demo hosted on Netlify.",
  },
  {
    title: "Hacker Earth",
    url: "https://hacker-earth.netlify.app/",
    description: "Hackathon / competitive coding project.",
  },
  {
    title: "PK Roadmap",
    url: "https://pk-roadmap.netlify.app/",
    description: "Interactive roadmap built and deployed by Prashant.",
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar name={portfolioData.name} />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-28 pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-4">
          External
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0e17] mb-4">Links</h1>
        <p className="text-[#2d2b45] mb-14 max-w-xl">
          A collection of live apps, tools, and projects I've built and shipped.
        </p>

        <div className="space-y-4">
          {LINKS.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 rounded-xl border border-black/8 bg-white/55 p-6 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
            >
              <div>
                <h2 className="text-lg font-semibold text-[#0f0e17] group-hover:text-indigo-600 transition-colors mb-1">
                  {link.title}
                </h2>
                <p className="text-sm text-[#5a5775]">{link.description}</p>
                <span className="mt-2 inline-block text-xs text-[#6b6888] font-mono break-all">
                  {link.url}
                </span>
              </div>
              <ExternalLink
                size={18}
                className="shrink-0 mt-1 text-[#6b6888] group-hover:text-indigo-500 transition-colors"
              />
            </a>
          ))}
        </div>
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
