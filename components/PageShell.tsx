import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({
  backHref,
  backLabel,
  children,
}: {
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar name={portfolioData.name} />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-24 pb-16">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-[#5a5775] hover:text-[#2d2b45] transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          {backLabel}
        </Link>
        {children}
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}
