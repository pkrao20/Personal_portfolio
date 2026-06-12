"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const ANCHOR_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PAGE_LINKS = [
  { label: "Blog", href: "/blogs" },
  { label: "Interviews", href: "/interview" },
];

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#eceaf3]/80 backdrop-blur border-b border-black/8">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-[#0f0e17] hover:text-[#4f46e5] transition-colors"
        >
          {name}
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {ANCHOR_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#2d2b45] hover:text-[#0f0e17] transition-colors px-3 py-1.5 rounded-md hover:bg-black/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="w-px h-4 bg-black/15 mx-2" />
          {PAGE_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-[#4f46e5] hover:text-[#3730a3] transition-colors px-3 py-1.5 rounded-md hover:bg-indigo-50"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-[#2d2b45] hover:bg-black/5 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-black/8 bg-[#eceaf3]/95 backdrop-blur px-6 py-4 flex flex-col gap-1">
          {ANCHOR_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#2d2b45] hover:text-[#0f0e17] py-2.5 px-3 rounded-md hover:bg-black/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="my-2 h-px bg-black/10" />
          {PAGE_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#4f46e5] hover:text-[#3730a3] py-2.5 px-3 rounded-md hover:bg-indigo-50 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
