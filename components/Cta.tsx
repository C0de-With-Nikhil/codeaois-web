"use client";

import React from "react";
import { Terminal } from "lucide-react";

// We pass in a function called 'onOpenWaitlist' so the button knows what to do!
export default function Cta({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black border-t border-zinc-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-black border border-zinc-800 rounded-3xl p-12 text-center relative z-10 shadow-2xl shadow-cyan-900/10">
        <Terminal className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to upgrade your terminal?
        </h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Join the elite developers who are already building 10x faster with CodeAOIS. 
          Spots in the private beta are extremely limited.
        </p>
        <button
          onClick={onOpenWaitlist}
          className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Secure Your Spot Now
        </button>
      </div>
    </section>
  );
}