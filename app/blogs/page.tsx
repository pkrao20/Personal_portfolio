import blogsRaw from "@/data/blogs.json";
import type { BlogPost } from "@/types/content";
const blogsData = blogsRaw as BlogPost[];
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata = {
  title: "Blog · Prashant Rao",
  description: "Writing about backend systems, full-stack development, fintech engineering, and lessons from production.",
};

export default function BlogsPage() {
  const blogs = blogsData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar name={portfolioData.name} />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-28 pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-4">
          Writing
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f0e17] mb-4">Blog</h1>
        <p className="text-[#4e4b6a] mb-14 max-w-xl">
          Lessons from building production systems, integration war stories, and engineering trade-offs
          I wish someone had written down sooner.
        </p>

        {blogs.length === 0 ? (
          <div className="rounded-xl border border-black/8 border-dashed p-16 text-center">
            <p className="text-[#8a87a2] text-sm">Posts coming soon.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group block rounded-xl border border-black/8 bg-white/55 p-6 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h2 className="text-lg font-semibold text-[#0f0e17] group-hover:text-indigo-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <span className="text-xs text-[#8a87a2] shrink-0 pt-1">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-sm text-[#4e4b6a] mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-black/8 text-[#4e4b6a] border border-black/10"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#a09db8] shrink-0">
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[#a09db8] group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
