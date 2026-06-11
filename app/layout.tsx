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
<Grain />
        {children}
      </body>
    </html>
  );
}
