"use client";

import React from "react";
import { motion } from "framer-motion";
import { Triangle, Hexagon, Circle, Square, Command, Cpu } from "lucide-react";

// We are faking some cool tech company names and pairing them with Lucide icons
const logos = [
  { name: "AcmeAI", icon: Triangle },
  { name: "Quantum", icon: Hexagon },
  { name: "Nexus", icon: Circle },
  { name: "Hyperion", icon: Square },
  { name: "Aperture", icon: Command },
  { name: "Synapse", icon: Cpu },
];

export default function LogoTicker() {
  return (
    <section className="py-12 border-y border-zinc-900 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-semibold text-zinc-600 uppercase tracking-[0.3em]">
          Trusted by elite engineering teams at
        </p>
      </div>
      
      {/* This mask-image creates the fading effect on the left and right edges */}
      <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-20 pr-20 flex-none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {/* We double the array so it loops seamlessly without a jump */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-zinc-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              <logo.icon className="w-8 h-8" />
              <span className="text-2xl font-extrabold tracking-tighter">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}