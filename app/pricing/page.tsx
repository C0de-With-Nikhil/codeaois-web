"use client";

import React, { useState } from "react";
import { Check, Minus, Terminal } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "0",
      description: "For hobbyists exploring AI workflows.",
      features: ["Basic Terminal Streaming", "Local RAG (Up to 50MB)", "Community Support", "Bring Your Own Key (BYOK)"]
    },
    {
      name: "Pro",
      price: isAnnual ? "24" : "29",
      badge: "Most Popular",
      description: "For professional developers building daily.",
      features: ["Advanced Terminal Streams", "Local RAG (Up to 5GB)", "Docker Sandboxing", "Browser Automation", "Priority Email Support"]
    },
    {
      name: "Elite",
      price: isAnnual ? "79" : "99",
      description: "For engineering teams needing maximum power.",
      features: ["Everything in Pro", "Unlimited Cloud & Local RAG", "Custom AI Agents", "Team Workspaces", "SSO & Advanced Security", "24/7 Dedicated Support"]
    }
  ];

  const featuresMatrix = [
    { name: "Terminal Streaming", free: true, pro: true, elite: true },
    { name: "Bring Your Own Key (BYOK)", free: true, pro: true, elite: true },
    { name: "Local RAG Storage", free: "50 MB", pro: "5 GB", elite: "Unlimited" },
    { name: "Docker Sandboxing", free: false, pro: true, elite: true },
    { name: "Browser Automation", free: false, pro: true, elite: true },
    { name: "Custom AI Agents", free: false, pro: false, elite: true },
    { name: "Team Workspaces", free: false, pro: false, elite: true },
    { name: "Single Sign-On (SSO)", free: false, pro: false, elite: true },
    { name: "Support Level", free: "Community", pro: "Priority Email", elite: "24/7 Dedicated" },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 font-sans relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header & Toggle */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Pricing that scales with you.</h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Choose the perfect plan for your development workflow. Save 20% when billed annually.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-cyan-500 transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-zinc-500'} flex items-center gap-2`}>
              Annually <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-0.5 rounded-full border border-emerald-500/20">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-[#0A0A0A] border ${plan.badge ? 'border-cyan-500 shadow-2xl shadow-cyan-900/20 md:-translate-y-4' : 'border-zinc-800'} rounded-3xl p-8 flex flex-col relative`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                <span className="text-zinc-500">/mo</span>
                {isAnnual && plan.price !== "0" && <p className="text-emerald-400 text-sm mt-1">Billed annually</p>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-cyan-500 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.badge ? 'bg-white text-black hover:bg-zinc-200' : 'bg-[#111] text-white border border-zinc-700 hover:bg-zinc-800'}`}>
                {plan.name === "Elite" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        {/* The Ultimate Comparison Matrix */}
        <div className="hidden md:block">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Compare Features</h2>
          <div className="bg-[#0A0A0A] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#111]">
                  <th className="p-6 font-semibold text-zinc-400 w-1/4">Features</th>
                  <th className="p-6 font-bold text-white text-center w-1/4">Free</th>
                  <th className="p-6 font-bold text-cyan-400 text-center w-1/4">Pro</th>
                  <th className="p-6 font-bold text-white text-center w-1/4">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {featuresMatrix.map((item, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-6 text-zinc-300 font-medium">{item.name}</td>
                    
                    {/* Free Column */}
                    <td className="p-6 text-center">
                      {typeof item.free === 'boolean' ? (item.free ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <Minus className="w-5 h-5 text-zinc-700 mx-auto" />) : <span className="text-zinc-400">{item.free}</span>}
                    </td>
                    
                    {/* Pro Column (Highlighted) */}
                    <td className="p-6 text-center bg-cyan-950/10">
                      {typeof item.pro === 'boolean' ? (item.pro ? <Check className="w-5 h-5 text-cyan-400 mx-auto" /> : <Minus className="w-5 h-5 text-zinc-700 mx-auto" />) : <span className="text-cyan-100">{item.pro}</span>}
                    </td>
                    
                    {/* Elite Column */}
                    <td className="p-6 text-center">
                      {typeof item.elite === 'boolean' ? (item.elite ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <Minus className="w-5 h-5 text-zinc-700 mx-auto" />) : <span className="text-zinc-400">{item.elite}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}