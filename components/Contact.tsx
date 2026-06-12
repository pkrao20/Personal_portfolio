import { SectionLabel } from "./About";
import { Mail, Phone } from "lucide-react";
import type { ComponentType } from "react";

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

function CodechefIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.257.004C5.367.257.044 5.038.044 11.132c0 6.29 5.122 11.387 11.413 11.387 6.29 0 11.499-5.097 11.499-11.387C22.956 4.842 17.147-.249 11.257.004zm-.195 3.829c1.662 0 2.993.562 3.993 1.684.999 1.123 1.498 2.628 1.498 4.514v.38h-8.12v.38c0 1.21.285 2.176.856 2.9.57.724 1.38 1.086 2.427 1.086.799 0 1.47-.19 2.013-.57.543-.38.961-.942 1.256-1.685l1.969.951c-.437.971-1.104 1.732-2.003 2.284-.899.551-1.969.827-3.21.827-1.847 0-3.3-.58-4.361-1.741-1.061-1.162-1.591-2.762-1.591-4.8 0-1.942.52-3.505 1.562-4.685 1.04-1.181 2.464-1.771 4.27-1.771l.44.246zm-.076 1.818c-.894 0-1.618.295-2.17.884-.553.59-.876 1.399-.969 2.427h6.15c-.076-1.028-.38-1.837-.912-2.427-.532-.59-1.214-.884-2.099-.884z" />
    </svg>
  );
}

function CodeforcesIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
    </svg>
  );
}

type Contact = {
  email: string; phone: string; linkedin: string; github: string;
  codechef?: string; codeforces?: string;
};

type LinkDef = {
  key: keyof Contact; label: string; Icon: ComponentType<{ size?: number }>;
  href: (v: string) => string; display: string; external: boolean;
};

const LINKS: LinkDef[] = [
  { key: "email",      label: "Email",       Icon: Mail,           href: (v) => `mailto:${v}`, display: "pkraojee2020@gmail.com",    external: false },
  { key: "phone",      label: "Phone",       Icon: Phone,          href: (v) => `tel:${v}`,    display: "+91 7052436817",            external: false },
  { key: "linkedin",   label: "LinkedIn",    Icon: LinkedinIcon,   href: (v) => v,             display: "linkedin.com/in/pkrao20",   external: true  },
  { key: "github",     label: "GitHub",      Icon: GithubIcon,     href: (v) => v,             display: "github.com/pkrao20",        external: true  },
];

export default function Contact({ contact }: { contact: Contact }) {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionLabel>Contact</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f0e17] mb-4">Let&apos;s connect</h2>
      <p className="text-[#2d2b45] mb-12 max-w-xl">
        Open to new roles, collaborations, or just a good technical conversation. Feel free to reach
        out through any of the channels below.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LINKS.map(({ key, label, Icon, href, display, external }) => {
          const val = contact[key];
          if (!val) return null;
          return (
            <a
              key={key}
              href={href(val)}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-2xl border border-black/8 bg-white/55 backdrop-blur-sm p-4 hover:border-black/15 hover:bg-white/75 transition-all group"
            >
              <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 group-hover:bg-indigo-100 transition-colors text-indigo-500 shrink-0">
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#5a5775]">{label}</p>
                <p className="text-sm text-[#0f0e17] truncate">{display}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
