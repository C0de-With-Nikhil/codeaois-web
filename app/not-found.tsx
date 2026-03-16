import React from "react";
import Link from "next/link";
import { TerminalSquare, ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center font-sans">
      
      {/* Glowing Icon */}
      <div className="w-24 h-24 bg-zinc-900/80 rounded-3xl border border-zinc-800 flex items-center justify-center mb-8 shadow-2xl shadow-cyan-900/20">
        <TerminalSquare className="w-12 h-12 text-cyan-500" />
      </div>
      
      <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">
        404
      </h1>
      
      {/* Terminal Error Text */}
      <div className="bg-[#111] border border-zinc-800 rounded-xl p-4 font-mono text-sm sm:text-base mb-10 text-zinc-300 max-w-lg w-full">
        <div className="flex items-center gap-2 text-left">
          <span className="text-emerald-500">➜</span>
          <span className="text-red-400">Error:</span> 
          <span>Directory or command not found.</span>
        </div>
      </div>
      
      {/* Next.js Link component (super fast routing) */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all transform hover:scale-105"
      >
        <ChevronRight className="w-5 h-5" /> 
        Return to ~ (Home)
      </Link>
      
    </div>
  );
}