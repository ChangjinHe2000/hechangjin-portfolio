import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "何畅金 | AI Application Developer",
  description:
    "Changjin He — an AI Application Developer building practical products with RAG, LLMs, AI Agents and full-stack engineering.",
  keywords: ["Changjin He", "何畅金", "AI Application Developer", "RAG", "LLM", "Medical AI"],
  openGraph: {
    title: "何畅金 | AI Application Developer",
    description: "Building practical AI applications with RAG, LLMs, AI Agents and full-stack engineering.",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
