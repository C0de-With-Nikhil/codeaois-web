"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Bug, Zap, Rocket, Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase"; // Importing our DB connection

export default function ChangelogPage() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // This function fetches the data from your real database!
  useEffect(() => {
    async function fetchChangelog() {
      const { data, error } = await supabase
        .from('changelog')
        .select('*');

      if (error) {
        console.error("Error fetching changelog:", error.message, error.details, error.hint);
      } else {
        setUpdates(data || []);
      }
      setLoading(false);
    }

    fetchChangelog();
  }, []);

  // Icon mapping helper
  const getIcon = (type: string) => {
    switch (type) {
      case 'launch': return Rocket;
      case 'feature': return Sparkles;
      case 'fix': return Bug;
      default: return Zap;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'launch': return "text-emerald-400";
      case 'feature': return "text-cyan-400";
      case 'fix': return "text-orange-400";
      default: return "text-purple-400";
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/15 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Changelog</h1>
          <p className="text-xl text-zinc-400">Live updates from the CodeAOIS core team.</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
          </div>
        ) : (
          <div className="relative border-l border-zinc-800 ml-4 md:ml-0 space-y-16">
            {updates.map((update, index) => {
              const Icon = getIcon(update.type);
              const colorClass = getColor(update.type);
              
              return (
                <motion.div 
                  key={update.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-zinc-800 flex items-center justify-center`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-current ${colorClass}`}></div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <span className="font-mono text-lg font-bold text-white bg-[#111] px-3 py-1 rounded-lg border border-zinc-800 inline-block w-fit">
                      {update.version}
                    </span>
                    <span className="text-zinc-500 text-sm font-medium">{update.date}</span>
                  </div>

                  <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-colors shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`w-5 h-5 ${colorClass}`} />
                      <h3 className="text-2xl font-bold text-white tracking-tight">{update.title}</h3>
                    </div>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      {update.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}