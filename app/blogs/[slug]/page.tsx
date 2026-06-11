import { notFound } from "next/navigation";
import blogsRaw from "@/data/blogs.json";
import type { BlogPost } from "@/types/content";
const blogsData = blogsRaw as BlogPost[];
import PageShell from "@/components/PageShell";
import { Clock, Tag } from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return blogsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} · Prashant Rao`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell backHref="/blogs" backLabel="All posts">
      <article>
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0f0e17] leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#8a87a2]">
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readTime} read
            </span>
          </div>

          <p className="mt-6 text-[#4e4b6a] text-lg leading-relaxed border-l-2 border-indigo-200 pl-4">
            {post.excerpt}
          </p>
        </header>

        {/* Body */}
        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-[#0f0e17] mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-[#4e4b6a] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
