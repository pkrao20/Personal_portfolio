export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-black/8 py-8 px-6 text-center">
      <div className="w-full h-36 mb-2">
        <svg width="100%" height="100%" viewBox="0 0 600 120" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" className="select-none">
          <defs>
            <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%" />
            <radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="35%" cx="50%" cy="50%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
            <mask id="textMask">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
            </mask>
          </defs>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
            strokeWidth="0.5" className="fill-transparent stroke-black/10 font-bold dark:stroke-neutral-800"
            fontFamily="helvetica" fontSize="64" style={{ opacity: 0.4 }}>
            {name}
          </text>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
            strokeWidth="0.5" className="fill-transparent stroke-black/20 font-bold dark:stroke-neutral-800"
            fontFamily="helvetica" fontSize="64" strokeDashoffset="0" strokeDasharray="1000">
            {name}
          </text>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
            stroke="url(#textGradient)" strokeWidth="0.3" mask="url(#textMask)"
            className="fill-transparent font-bold" fontFamily="helvetica" fontSize="64">
            {name}
          </text>
        </svg>
      </div>
      <p className="text-xs text-[#6b6888]">
        © {new Date().getFullYear()} {name} · Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
