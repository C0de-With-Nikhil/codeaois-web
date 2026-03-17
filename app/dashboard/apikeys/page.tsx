"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Key, Plus, Copy, CheckCircle2, AlertTriangle, 
  Terminal, LayoutDashboard, FolderGit2, Settings, LogOut
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ApiKeysPage() {
  const router = useRouter();
  
  // Dummy state for keys
  const [keys, setKeys] = useState([
    { id: 1, name: "MacBook Pro Terminal", key: "ca_live_8f92...a1b2", created: "Oct 12, 2023", lastUsed: "2 mins ago" }
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newKey = {
        id: Date.now(),
        name: `CLI Agent ${keys.length + 1}`,
        key: `ca_live_${Math.random().toString(36).substring(2, 10)}...${Math.random().toString(36).substring(2, 6)}`,
        created: "Just now",
        lastUsed: "Never"
      };
      setKeys([newKey, ...keys]);
      setIsGenerating(false);
      toast.success("New API key generated successfully!");
    }, 1000);
  };

  const handleCopy = (keyString: string) => {
    navigator.clipboard.writeText(keyString);
    toast.success("API Key copied to clipboard!");
  };

  const handleLogout = () => {
    document.cookie = "codeaois-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/signin");
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] text-zinc-100 flex font-sans overflow-hidden">
      
      {/* --- LEFT SIDEBAR --- */}
      <aside className="w-64 border-r border-zinc-900 bg-[#0A0A0A] flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-zinc-900">
            <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <Terminal className="w-5 h-5 text-cyan-500" />
              <span className="text-white">Code<span className="text-zinc-500">AOIS</span></span>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors font-medium">
              <LayoutDashboard className="w-4 h-4" /> Overview
            </Link>
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors font-medium">
              <FolderGit2 className="w-4 h-4" /> Projects
            </Link>
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-zinc-900 text-white rounded-lg transition-colors font-medium">
              <Key className="w-4 h-4 text-cyan-500" /> API Keys
            </a>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors font-medium">
              <Settings className="w-4 h-4" /> Settings
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-zinc-900">
          <div className="flex gap-2 w-full">
            <Link href="/" className="flex-1 flex items-center justify-center py-2 text-xs text-zinc-400 hover:text-white transition-colors bg-[#111] rounded-md border border-zinc-800 hover:border-zinc-700">
              ← Website
            </Link>
            <button onClick={handleLogout} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs text-red-500/80 hover:text-red-400 transition-colors bg-red-500/10 rounded-md border border-red-500/20 hover:border-red-500/40 font-medium">
              <LogOut className="w-3 h-3" /> Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#050505]">
        <div className="max-w-4xl mx-auto p-8 w-full mt-8">
          
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">API Keys</h1>
              <p className="text-zinc-500 mt-1">Manage the secret keys used to authenticate your CLI.</p>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? "Generating..." : <><Plus className="w-4 h-4" /> Create Secret Key</>}
            </button>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 flex items-start gap-4 mb-8">
            <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-orange-500 font-bold text-sm">Keep your keys secure</h4>
              <p className="text-zinc-400 text-sm mt-1">Do not share your API keys in publicly accessible areas such as GitHub, client-side code, or public AWS S3 buckets.</p>
            </div>
          </div>

          {/* Keys Table */}
          <div className="bg-[#0A0A0A] border border-zinc-800 rounded-3xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#111]">
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Name</th>
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Secret Key</th>
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Created</th>
                  <th className="py-4 px-6 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((k) => (
                  <motion.tr initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={k.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors">
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-white">{k.name}</div>
                      <div className="text-xs text-zinc-500 mt-1">Last used: {k.lastUsed}</div>
                    </td>
                    <td className="py-4 px-6">
                      <code className="bg-[#111] border border-zinc-800 text-cyan-400 px-3 py-1 rounded-md text-sm font-mono tracking-wider">
                        {k.key}
                      </code>
                    </td>
                    <td className="py-4 px-6 text-sm text-zinc-400">{k.created}</td>
                    <td className="py-4 px-6 text-right">
                      <button onClick={() => handleCopy(k.key)} className="text-zinc-500 hover:text-white transition-colors p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800">
                        <Copy className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}