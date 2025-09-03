import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryan Prajapati - Full Stack Developer",
  description: "Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Aryan Prajapati" }],
  creator: "Aryan Prajapati",
  openGraph: {
    title: "Aryan Prajapati - Full Stack Developer",
    description: "Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Prajapati - Full Stack Developer",
    description: "Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
