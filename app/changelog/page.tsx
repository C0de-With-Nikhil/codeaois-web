"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Bug, Zap, Rocket } from "lucide-react";

const updates = [
  {
    version: "v1.0.0",
    date: "March 16, 2026",
    title: "Public Beta Launch 🚀",
    description: "CodeAOIS is officially live! We've opened the gates for our first wave of private beta users. The multi-agent terminal OS is now stable and ready for everyday development.",
    type: "launch",
    icon: Rocket,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-500/20",
  },
  {
    version: "v0.9.5",
    date: "March 10, 2026",
    title: "Command Menu & Deep Links",
    description: "Added the highly requested Ctrl+K command menu for instant navigation. You can now jump to Documentation, Pricing, or copy the install command without touching your mouse.",
    type: "feature",
    icon: Sparkles,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-500/20",
  },
  {
    version: "v0.9.0",
    date: "March 02, 2026",
    title: "Docker Sandboxing Overhaul",
    description: "Massive performance improvements to the embedded Docker execution engine. Containers now spin up 40% faster and consume significantly less idle RAM.",
    type: "improvement",
    icon: Zap,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-500/20",
  },
  {
    version: "v0.8.2",
    date: "February 24, 2026",
    title: "Resolved Terminal Streaming Latency",
    description: "Fixed a bug where the terminal UI would occasionally stutter when streaming extremely large responses from the local RAG database.",
    type: "fix",
    icon: Bug,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-500/20",
  }
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/15 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Changelog</h1>
          <p className="text-xl text-zinc-400">New updates and improvements to CodeAOIS.</p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-0 space-y-16">
          {updates.map((update, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Glowing Timeline Node */}
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-zinc-800 flex items-center justify-center`}>
                <div className={`w-3 h-3 rounded-full ${update.bgColor} flex items-center justify-center`}>
                   <div className={`w-1.5 h-1.5 rounded-full bg-current ${update.color}`}></div>
                </div>
              </div>

              {/* Version & Date */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <span className="font-mono text-lg font-bold text-white bg-[#111] px-3 py-1 rounded-lg border border-zinc-800 inline-block w-fit">
                  {update.version}
                </span>
                <span className="text-zinc-500 text-sm font-medium">{update.date}</span>
              </div>

              {/* Content Card */}
              <div className={`bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-colors shadow-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${update.bgColor} ${update.borderColor} border`}>
                    <update.icon className={`w-5 h-5 ${update.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{update.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {update.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}