import React from "react";
import { Terminal, Twitter, Github, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Grid of Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4 transition-opacity hover:opacity-80">
              <Terminal className="w-5 h-5 text-cyan-500" />
              <span className="text-white">Code<span className="text-zinc-500">AOIS</span></span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The multi-agent terminal OS for elite developers. Build, debug, and deploy at the speed of thought.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors"><MessageSquare className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Supported Models</a></li>
              <li><a href="/changelog" className="hover:text-cyan-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="/docs" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub Repo</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord Community</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Status */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm font-mono">
            © {new Date().getFullYear()} CodeAOIS Inc. All rights reserved.
          </p>
          
          {/* Pulsing Server Status Indicator */}
          <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-400">All systems normal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}