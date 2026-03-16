import React from "react";
import { FileCode, ChevronRight, Terminal } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 font-sans">
      
      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24 border border-zinc-900 bg-[#0A0A0A] rounded-2xl p-6">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-cyan-500" /> Documentation
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              <a href="#" className="text-cyan-400 font-medium flex items-center gap-1">
                <ChevronRight className="w-4 h-4" /> Introduction
              </a>
            </li>
            <li><a href="#" className="hover:text-white transition-colors pl-5">Quick Start</a></li>
            <li><a href="#" className="hover:text-white transition-colors pl-5">CLI Commands</a></li>
            <li><a href="#" className="hover:text-white transition-colors pl-5">Docker Sandboxing</a></li>
            <li><a href="#" className="hover:text-white transition-colors pl-5">API Reference</a></li>
          </ul>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 text-zinc-300 max-w-3xl">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Introduction</h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Welcome to the official documentation for CodeAOIS. This guide will help you understand the architecture, installation process, and advanced capabilities of your new multi-agent terminal OS.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-zinc-800 pb-2">Getting Started</h2>
        <p className="mb-6 leading-relaxed">
          To install CodeAOIS globally on your system, run the following command in your terminal. Ensure you have Node.js 18+ and Docker installed.
        </p>

        {/* Elite Code Block */}
        <div className="bg-[#111] border border-zinc-800 rounded-xl p-4 font-mono text-sm mb-8 shadow-xl shadow-cyan-900/5 relative group">
          <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
             <Terminal className="w-4 h-4 text-zinc-500" />
          </div>
          <span className="text-zinc-600 select-none mr-4">$</span>
          <span className="text-cyan-400">curl</span> -fsSL https://codeaois.com/install.sh | <span className="text-cyan-400">bash</span>
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-zinc-800 pb-2">Configuration</h2>
        <p className="mb-4 leading-relaxed">
          After installation, initialize your workspace using the setup command. This will generate a <code className="bg-zinc-900 text-cyan-300 px-1.5 py-0.5 rounded border border-zinc-800 text-sm">codeaois.config.json</code> file in your root directory.
        </p>
        <p className="leading-relaxed">
          From there, you can configure your custom LLM API keys, specify your preferred embedded vector database, and set your Docker security limits.
        </p>
        
      </main>
    </div>
  );
}