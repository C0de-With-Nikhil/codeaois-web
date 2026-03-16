"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Github, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter(); // <-- ADD THIS LINE
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Authentication successful! Initializing workspace...");

    // Teleport the user to the dashboard after 1 second!
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-24 font-sans relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 shadow-2xl z-10"
      >
        {/* Logo Header */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-900/20">
            <Terminal className="w-6 h-6 text-cyan-500" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-white mb-2 tracking-tight">Welcome back</h2>
        <p className="text-zinc-400 text-center mb-8 text-sm">Enter your credentials to access your terminal.</p>

        {/* Email/Password Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Email Address</label>
            <input required type="email" placeholder="dev@company.com" className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Password</label>
            <input required type="password" placeholder="••••••••" className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
          </div>

          <div className="flex items-center justify-between text-sm py-2">
            <label className="flex items-center gap-2 cursor-pointer text-zinc-400 hover:text-white transition-colors">
              <input type="checkbox" className="rounded bg-zinc-800 border-zinc-700 text-cyan-500 focus:ring-cyan-500/20" />
              Remember me
            </label>
            <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors">Forgot password?</a>
          </div>

          <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-zinc-800"></div>
          <span className="text-zinc-500 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        {/* GitHub Auth */}
        <button onClick={handleSignIn} className="w-full bg-[#111] border border-zinc-800 text-white font-medium py-3 rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-all flex items-center justify-center gap-2">
          <Github className="w-5 h-5" /> Continue with GitHub
        </button>

        {/* Waitlist Link */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Don't have an account? <Link href="/" className="text-cyan-500 hover:text-cyan-400 transition-colors">Join the waitlist</Link>
        </p>
      </motion.div>
    </div>
  );
}