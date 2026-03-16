import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import { Toaster } from "sonner";
import Footer from "../components/Footer";
import CommandMenu from "../components/CommandMenu";

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
        
        {/* The Notification Machine */}
        <Toaster theme="dark" position="bottom-right" richColors />

        {/* The Command Menu (Ctrl+K) */}
        <CommandMenu />

        {/* The Glowing Mouse Cursor */}
        <Cursor />

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}