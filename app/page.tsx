"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal, Globe, Cpu, Box, X, Send, Twitter, User } from "lucide-react";
import Faq from "../components/Faq"; // <-- IMPORTED HERE!

// --- TERMINAL COMPONENT ---
const TerminalSimulation = () => {
  const [phase, setPhase] = useState(0);
  const fullCommand = "/openaois scaffold a React app";
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    if (phase === 0) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedCommand(fullCommand.slice(0, i + 1));
        i++;
        if (i === fullCommand.length) {
          clearInterval(interval);
          setTimeout(() => setPhase(1), 600);
        }
      }, 40);
      return () => clearInterval(interval);
    } else if (phase === 1) {
      setTimeout(() => setPhase(2), 800);
    } else if (phase === 2) {
      setTimeout(() => setPhase(3), 800);
    } else if (phase === 3) {
      setTimeout(() => setPhase(4), 600);
    }
  }, [phase]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 overflow-hidden rounded-xl bg-[#0A0A0A] border border-zinc-800 shadow-2xl shadow-zinc-900/50">
      <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#111]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
        </div>
        <div className="mx-auto text-xs text-zinc-500 font-mono">user@codeaois:~</div>
      </div>
      <div className="p-6 font-mono text-sm sm:text-base text-zinc-300 h-[240px] flex flex-col gap-2 text-left">
        <div className="flex items-center gap-2">
          <span className="text-emerald-500">➜</span>
          <span className="text-cyan-500">~</span>
          <span>{typedCommand}</span>
          {phase === 0 && (
            <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-5 bg-zinc-400 align-middle" />
          )}
        </div>
        {phase >= 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500">[CodeAOIS] Analyzing request...</motion.div>}
        {phase >= 2 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-400"><span className="text-emerald-500">✓</span> Created package.json</motion.div>}
        {phase >= 3 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-400"><span className="text-emerald-500">✓</span> Scaffolded App Router structure</motion.div>}
        {phase >= 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-cyan-400">Ready. Run `npm run dev` to start.<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-5 bg-cyan-400 align-middle ml-2" /></motion.div>}
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const installCmd = "curl -fsSL https://codeaois.com/install.sh | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setEmailSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm font-mono text-zinc-400">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span> v1.0.0 Public Beta
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 mb-6">Build, debug & deploy <br /> with AI.</h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">CodeAOIS is a multi-agent terminal OS for developers.</p>
          
          <div className="relative mx-auto w-full max-w-2xl group mb-12">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative flex items-center justify-between bg-[#111] border border-zinc-800 rounded-xl p-4 font-mono text-sm">
              <span className="text-zinc-300 overflow-x-auto whitespace-nowrap pr-4"><span className="text-zinc-500 mr-4">$</span>{installCmd}</span>
              <button onClick={handleCopy} className="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors">
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all transform hover:scale-105">
            Get Early Access
          </button>
        </motion.div>
        <TerminalSimulation />
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Under the Hood</h2>
          <p className="text-zinc-400">Native integrations designed for zero-friction workflows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-2 bg-[#111] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-colors cursor-pointer">
            <Terminal className="w-8 h-8 text-cyan-500" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Interactive Terminal Streams</h3>
              <p className="text-zinc-400 text-sm">Real-time AI output directly in your command line.</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-[#111] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-colors cursor-pointer">
            <Globe className="w-8 h-8 text-emerald-500" />
            <h3 className="text-xl font-semibold text-white">Browser Automation</h3>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-[#111] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-colors cursor-pointer">
            <Cpu className="w-8 h-8 text-purple-500" />
            <h3 className="text-xl font-semibold text-white">Local RAG Memory</h3>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-2 bg-[#111] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-colors cursor-pointer">
            <Box className="w-8 h-8 text-orange-500" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Docker Sandboxing</h3>
              <p className="text-zinc-400 text-sm">Secure execution environments for every task.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 border-t border-zinc-900 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Loved by Engineers</h2>
            <p className="text-zinc-400">What the community is saying about CodeAOIS.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tweet 1 */}
            <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Sarah Jenkins</p>
                    <p className="text-zinc-500 text-xs">@sarahcodes</p>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-zinc-600" />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Just replaced my entire browser-based AI workflow with CodeAOIS. Having the agent stream directly into my terminal and edit files is literal magic. 🤯
              </p>
            </div>

            {/* Tweet 2 */}
            <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">David Chen</p>
                    <p className="text-zinc-500 text-xs">@dchen_dev</p>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-zinc-600" />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                The Docker sandboxing feature in @CodeAOIS is a lifesaver. It generated an entire Python web scraper, tested it in a container, fixed its own bugs, and then handed me the working code.
              </p>
            </div>

            {/* Tweet 3 */}
            <div className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Marcus L.</p>
                    <p className="text-zinc-500 text-xs">@marcusbuilds</p>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-zinc-600" />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                10x developer? No, I just use CodeAOIS on the Pro tier. This OS is the closest thing to AGI I've used locally. The Minimax integration is incredibly fast. 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 bg-[#0A0A0A] border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Free", price: "0" },
            { name: "Elite", price: "5", popular: true },
            { name: "Pro", price: "100" }
          ].map((plan) => (
            <div key={plan.name} className={`p-8 rounded-3xl border ${plan.popular ? 'border-cyan-500 bg-zinc-900/50 scale-105' : 'border-zinc-800'} flex flex-col`}>
              <h3 className="text-lg font-medium mb-2">{plan.name} Tier</h3>
              <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-sm font-normal text-zinc-500">/mo</span></div>
              <button onClick={() => setIsModalOpen(true)} className={`w-full py-3 rounded-xl font-semibold transition ${plan.popular ? 'bg-white text-black hover:bg-zinc-200' : 'border border-zinc-700 hover:bg-zinc-800'}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION (Placed right here!) */}
      <Faq />

      {/* WAITLIST MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-[#111] border border-zinc-800 p-8 rounded-3xl shadow-2xl">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"><X /></button>
              
              {!emailSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-2">Join the Waitlist</h2>
                  <p className="text-zinc-400 mb-6">CodeAOIS is currently in private beta. Leave your email to get an invite.</p>
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <input required type="email" placeholder="dev@example.com" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
                    <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                      <Send className="w-4 h-4" /> Secure My Spot
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">You're on the list!</h2>
                  <p className="text-zinc-400">We'll reach out as soon as a spot opens up.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}