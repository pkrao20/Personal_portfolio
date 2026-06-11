import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Grain from "@/components/Grain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant Rao | Founding Engineer | IIT Indore",
  description:
    "Founding Engineer with 2+ years building SaaS, fintech and AI products from 0→1. IIT Indore grad. NestJS, PostgreSQL, AWS, React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Lavender tint — top right corner */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: -80,
            right: -80,
            width: 520,
            height: 520,
            background:
              "radial-gradient(ellipse at center, rgba(192,168,255,0.45) 0%, rgba(167,139,250,0.20) 50%, transparent 75%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Sky tint — top left corner */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: -60,
            left: -80,
            width: 460,
            height: 460,
            background:
              "radial-gradient(ellipse at center, rgba(147,219,251,0.40) 0%, rgba(125,211,252,0.15) 50%, transparent 75%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Grain />
        {children}
      </body>
    </html>
  );
}
