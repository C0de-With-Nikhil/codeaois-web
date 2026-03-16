"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, FolderGit2, Activity, Settings, 
  Bell, Search, Plus, Terminal, ExternalLink, MoreVertical, Database, X, Loader2
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Dashboard() {
  const [projects, setProjects] = useState([
    { name: "codeaois-web", status: "Ready", env: "Production", time: "2m ago", icon: Terminal },
    { name: "ai-trading-bot", status: "Building", env: "Preview", time: "15m ago", icon: Activity },
    { name: "rag-pipeline", status: "Ready", env: "Production", time: "3h ago", icon: Database },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAgentName, setNewAgentName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgentName) return;

    setIsCreating(true);

    setTimeout(() => {
      const newProject = {
        name: newAgentName.toLowerCase().replace(/\s+/g, '-'),
        status: "Building",
        env: "Development",
        time: "Just now",
        icon: Terminal
      };
      
      setProjects([newProject, ...projects]);
      setIsCreating(false);
      setIsModalOpen(false);
      setNewAgentName("");
      toast.success("Agent sandbox provisioned successfully!");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] text-zinc-100 flex font-sans overflow-hidden">
      
      {/* --- LEFT SIDEBAR (Desktop Only) --- */}
      <aside className="w-64 border-r border-zinc-900 bg-[#0A0A0A] flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-zinc-900">
            <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <Terminal className="w-5 h-5 text-cyan-500" />
              <span className="text-white">Code<span className="text-zinc-500">AOIS</span></span>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-zinc-900 text-white rounded-lg font-medium">
              <LayoutDashboard className="w-4 h-4 text-cyan-500" /> Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors font-medium">
              <FolderGit2 className="w-4 h-4" /> Projects
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors font-medium">
              <Activity className="w-4 h-4" /> Deployments
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors font-medium">
              <Settings className="w-4 h-4" /> Settings
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-zinc-900">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer transition-colors mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-zinc-500 truncate">Pro Tier</p>
            </div>
          </div>
          
          <Link href="/" className="flex items-center justify-center w-full py-2 text-xs text-zinc-500 hover:text-cyan-400 transition-colors bg-[#111] rounded-md border border-zinc-800 hover:border-zinc-700">
            ← Return to Website
          </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      {/* Added pb-20 on mobile so the bottom nav doesn't cover the content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative pb-20 md:pb-0">
        
        <header className="h-16 border-b border-zinc-900 flex items-center justify-between px-4 md:px-8 bg-[#0A0A0A]/80 backdrop-blur-md shrink-0 z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
            <span className="text-white hover:underline cursor-pointer hidden sm:block">John Doe</span>
            <span className="text-zinc-600 hidden sm:block">/</span>
            <span className="text-white">Overview</span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative hidden lg:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search projects... (Ctrl+K)" 
                className="pl-9 pr-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-white w-64"
              />
            </div>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-3 py-1.5 md:px-4 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <Plus className="w-4 h-4" /> <span className="hidden sm:inline">New Agent</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-6 md:mb-8 tracking-tight">Welcome back, John</h1>

            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-bold text-white">Recent Projects</h2>
              <button className="text-sm text-cyan-500 hover:text-cyan-400 font-medium transition-colors">View All</button>
            </div>

            {/* Dynamic Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <AnimatePresence>
                {projects.map((project, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    key={project.name + i} 
                    className="bg-[#111] border border-zinc-800 rounded-2xl p-5 md:p-6 hover:border-zinc-700 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all group cursor-pointer flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-colors ${project.status === 'Building' ? 'text-orange-400 border-orange-500/30' : 'text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30'}`}>
                        {project.status === "Building" ? <Loader2 className="w-5 h-5 animate-spin" /> : <project.icon className="w-5 h-5" />}
                      </div>
                      <button className="text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity p-1">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 tracking-tight">{project.name}</h3>
                    <a href="#" className="text-xs md:text-sm text-zinc-500 hover:text-cyan-400 flex items-center gap-1 mb-6 md:mb-8 transition-colors w-fit">
                      codeaois.com/{project.name} <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="flex items-center justify-between text-xs font-medium mt-auto border-t border-zinc-800/50 pt-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${project.status === "Ready" ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-orange-500 animate-pulse"}`}></span>
                        <span className={project.status === "Ready" ? "text-emerald-500" : "text-orange-500"}>{project.status}</span>
                      </div>
                      <span className="text-zinc-500">{project.time}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* --- MOBILE BOTTOM NAV (Visible only on small screens) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-zinc-900 flex items-center justify-around px-4 py-3 z-50 pb-safe">
        <a href="#" className="flex flex-col items-center gap-1.5 text-cyan-500">
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
          <FolderGit2 className="w-5 h-5" />
          <span className="text-[10px] font-medium">Projects</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
          <Activity className="w-5 h-5" />
          <span className="text-[10px] font-medium">Activity</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
          <Settings className="w-5 h-5" />
          <span className="text-[10px] font-medium">Settings</span>
        </a>
      </nav>

      {/* --- CREATE AGENT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isCreating && setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-[#111] border border-zinc-800 rounded-2xl shadow-2xl p-6">
              <button disabled={isCreating} onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white disabled:opacity-50"><X className="w-5 h-5" /></button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/10 text-cyan-500 rounded-lg"><Terminal className="w-6 h-6" /></div>
                <div>
                  <h2 className="text-xl font-bold text-white">Initialize Agent</h2>
                  <p className="text-xs text-zinc-400">Spin up a new AI execution environment.</p>
                </div>
              </div>

              <form onSubmit={handleCreateAgent} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5">Agent Identifier</label>
                  <input 
                    required 
                    disabled={isCreating}
                    autoFocus
                    type="text" 
                    value={newAgentName}
                    onChange={(e) => setNewAgentName(e.target.value)}
                    placeholder="e.g. data-scraper-bot" 
                    className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-colors text-white disabled:opacity-50" 
                  />
                </div>

                <div className="bg-[#0A0A0A] border border-zinc-800 rounded-xl p-4 flex items-start gap-3 mt-4">
                   <Activity className="w-5 h-5 text-orange-500 shrink-0" />
                   <p className="text-xs text-zinc-400 leading-relaxed">This will consume <span className="text-white font-medium">1.5GB</span> of your monthly Docker sandboxing quota.</p>
                </div>

                <button 
                  type="submit" 
                  disabled={isCreating || !newAgentName}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCreating ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Provisioning Sandbox...</>
                  ) : (
                    <><Plus className="w-4 h-4" /> Create Sandbox</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}