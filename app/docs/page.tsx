import React from "react";
import { Terminal, ChevronRight, FileCode, Cpu } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans pt-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 flex-shrink-0 mt-8">
        <h3 className="text-white font-bold mb-4 text-lg tracking-tight">Documentation</h3>
        <nav className="space-y-2 text-sm">
          <a href="/docs" className="flex items-center gap-3 text-cyan-400 bg-cyan-950/30 px-4 py-2.5 rounded-xl font-medium border border-cyan-900/50">
            <Terminal className="w-4 h-4" /> Quick Start
          </a>
          <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white px-4 py-2.5 rounded-xl transition-colors hover:bg-zinc-900/50">
            <FileCode className="w-4 h-4" /> Configuration
          </a>
          <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white px-4 py-2.5 rounded-xl transition-colors hover:bg-zinc-900/50">
            <Cpu className="w-4 h-4" /> Agents & Models
          </a>
        </nav>
      </aside>

      {/* MAIN DOCUMENTATION CONTENT */}
      <main className="flex-1 pb-24 mt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400">
          Docs v1.0
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Quick Start</h1>
        <p className="text-zinc-400 mb-10 text-lg max-w-2xl leading-relaxed">
          Get up and running with CodeAOIS in under 2 minutes. This guide walks you through global installation and executing your first AI agent command.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <ChevronRight className="text-cyan-500 w-6 h-6" /> Installation
        </h2>
        <p className="text-zinc-400 mb-6 leading-relaxed max-w-2xl">
          CodeAOIS is installed globally via our secure shell script. It requires Node.js v18+ and a UNIX-like environment (macOS or Linux). Windows users should use WSL2.
        </p>

        {/* Code Block */}
        <div className="bg-[#111] border border-zinc-800 rounded-2xl p-5 font-mono text-sm mb-12 overflow-x-auto shadow-xl shadow-black">
          <span className="text-zinc-600 mr-4">$</span>
          <span className="text-zinc-200">curl -fsSL https://codeaois.com/install.sh | bash</span>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <ChevronRight className="text-cyan-500 w-6 h-6" /> Authentication
        </h2>
        <p className="text-zinc-400 mb-6 leading-relaxed max-w-2xl">
          Before running your first agent, authenticate via the CLI to link your workspace to your CodeAOIS account.
        </p>

        {/* Code Block */}
        <div className="bg-[#111] border border-zinc-800 rounded-2xl p-5 font-mono text-sm mb-12 shadow-xl shadow-black">
          <span className="text-zinc-600 mr-4">$</span>
          <span className="text-zinc-200">openaois login</span>
        </div>

        {/* Pro Tip Callout Box */}
        <div className="border border-emerald-900/50 bg-emerald-950/10 p-6 rounded-2xl max-w-2xl">
          <h3 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
            Pro Tip
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            If you are on the Elite or Pro tier, your model keys (Minimax, OpenAI, Gemini) are automatically securely pulled from your web dashboard. No local <code className="bg-black px-1.5 py-0.5 rounded text-zinc-300">.env</code> files are required!
          </p>
        </div>
      </main>
    </div>
  );
}