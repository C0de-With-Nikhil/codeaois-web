import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeAOIS | Build with AI",
  description: "A multi-agent terminal OS for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-zinc-100 min-h-screen flex flex-col cursor-default`}>
        
        {/* The Glowing Mouse Cursor */}
        <Cursor />

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t border-zinc-900 bg-[#0A0A0A] py-8 mt-12 text-center text-sm text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} CodeAOIS. All systems operational.</p>
        </footer>
      </body>
    </html>
  );
}