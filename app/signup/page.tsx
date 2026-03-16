"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Github, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function SignUpPage() {
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome to the elite! Redirecting to setup...");
  };

  // Simple visual password strength logic
  const getStrengthColor = () => {
    if (password.length === 0) return "bg-zinc-800";
    if (password.length < 6) return "bg-red-500";
    if (password.length < 10) return "bg-orange-500";
    return "bg-emerald-500";
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-24 font-sans relative overflow-hidden">
      
      {/* Subtle Background Glow - Purple/Cyan mix for creation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-900/10 to-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl bg-[#0A0A0A] border border-zinc-800 rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row"
      >
        
        {/* Left Side - Marketing / Info */}
        <div className="hidden md:flex flex-col justify-between bg-[#111] w-2/5 p-8 border-r border-zinc-800">
          <div>
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-6">
              <Terminal className="w-5 h-5 text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Initialize Workspace</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Join thousands of developers building the future of software with CodeAOIS.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 14-day free trial
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cancel anytime
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Create your account</h2>

          <button onClick={handleSignUp} className="w-full bg-[#111] border border-zinc-800 text-white font-medium py-3 rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-all flex items-center justify-center gap-2 mb-6">
            <Github className="w-5 h-5" /> Sign up with GitHub
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-zinc-800"></div>
            <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Or continue with email</span>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">Email Address</label>
              <input required type="email" placeholder="dev@company.com" className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5">Password</label>
              <input 
                required 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#111] border border-zinc-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 transition-colors text-white mb-2" 
              />
              {/* Password Strength Bar */}
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                <div className={`h-full transition-all duration-300 ${getStrengthColor()}`} style={{ width: password.length === 0 ? '0%' : password.length < 6 ? '33%' : password.length < 10 ? '66%' : '100%' }}></div>
              </div>
            </div>

            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-2">
              Create Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-zinc-500 text-sm mt-6">
            Already have an account? <Link href="/signin" className="text-cyan-500 hover:text-cyan-400 transition-colors">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}