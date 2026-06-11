"use client";

export default function Grain() {
  return (
    <>
      <style>{`
        @keyframes grain {
          0%   { transform: translate(0px, 0px); }
          20%  { transform: translate(-5px, 8px); }
          40%  { transform: translate(8px, -4px); }
          60%  { transform: translate(-6px, -7px); }
          80%  { transform: translate(7px, 5px); }
          100% { transform: translate(-3px, 9px); }
        }
        .grain-el {
          position: fixed;
          inset: -100px;
          width: calc(100% + 200px);
          height: calc(100% + 200px);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 150px 150px;
          opacity: 0.055;
          pointer-events: none;
          z-index: 9999;
          animation: grain 0.5s steps(3) infinite;
        }
      `}</style>
      <div className="grain-el" aria-hidden="true" />
    </>
  );
}
