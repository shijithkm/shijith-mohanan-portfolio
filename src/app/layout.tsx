import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shijith Mohanan | Technical Solution Architect & AI Engineer",
  description:
    "Technical Solution Architect with 17+ years of experience building enterprise web applications, AI/ML solutions, and intelligent automation using React, Next.js, Node.js, LangGraph, and LLMs.",
  keywords: [
    "Shijith Mohanan",
    "Technical Solution Architect",
    "Fullstack Developer",
    "React",
    "Next.js",
    "AI Engineer",
    "LangGraph",
    "LLM",
    "RAG",
    "Node.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Shijith Mohanan | Technical Solution Architect & AI Engineer",
    description:
      "Technical Solution Architect with 17+ years of experience building enterprise web applications and AI-powered automation solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
