import { ArrowDown, Mail, FileText } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Contact = { email: string; linkedin: string; github: string };
type HeroProps = {
  name: string; tagline: string; subtitle: string;
  location: string; available: boolean; contact: Contact;
};

const TIMELINE = [
  { label: "2+ Years Experience" },
  { label: "Founding Engineer" },
  { label: "IIT Indore" },
  { label: "Immediate Joiner" },
];

export default function Hero({ name, tagline, subtitle, location, available, contact }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto relative">
      <div className="max-w-3xl">
        {available && (
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Founding Engineer &amp; Product Engineering Roles
          </span>
        )}

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0f0e17] leading-none mb-4">
          {name}
        </h1>

        <p className="text-xl md:text-2xl text-[#4e4b6a] font-light mb-2">{tagline}</p>
        <p className="text-sm text-[#8a87a2] mb-8">
          {subtitle} &nbsp;·&nbsp; {location}
        </p>

        {/* Timeline strip */}
        <div className="flex flex-wrap gap-3 mb-8">
          {TIMELINE.map((item) => (
            <span
              key={item.label}
              className="text-xs font-medium px-3 py-1 rounded-full bg-[#0f0e17]/5 border border-black/10 text-[#4e4b6a]"
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-[#4f46e5] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#4338ca] transition-colors"
          >
            <FileText size={15} />
            Resume
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm bg-[#0f0e17] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2a2840] transition-colors"
          >
            <Mail size={15} />
            Get in touch
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-black/15 text-[#4e4b6a] bg-white/50 px-5 py-2.5 rounded-lg hover:border-black/30 hover:text-[#0f0e17] transition-colors"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-black/15 text-[#4e4b6a] bg-white/50 px-5 py-2.5 rounded-lg hover:border-black/30 hover:text-[#0f0e17] transition-colors"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8a87a2] hover:text-[#4e4b6a] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
