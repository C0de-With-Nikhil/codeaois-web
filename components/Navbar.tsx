"use client";

import React, { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Spinning Logo */}
        <a href="/" className="group flex items-center gap-2 font-bold text-xl tracking-tighter transition-opacity">
          <Terminal className="w-5 h-5 text-cyan-500 transition-transform duration-500 group-hover:rotate-180" />
          <span className="group-hover:text-white transition-colors">Code<span className="text-zinc-500">AOIS</span></span>
        </a>

        {/* Desktop Navigation (Hidden on small screens) */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="/docs" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Sign In
          </a>
        </nav>

        {/* Mobile Hamburger Button (Only visible on small screens) */}
        <button 
          className="sm:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden absolute top-16 left-0 w-full bg-[#0A0A0A] border-b border-zinc-900 flex flex-col px-6 py-6 gap-6 shadow-2xl"
          >
            <a href="/docs" className="text-zinc-400 hover:text-white font-medium text-lg" onClick={() => setIsOpen(false)}>Docs</a>
            <a href="#" className="text-zinc-400 hover:text-white font-medium text-lg" onClick={() => setIsOpen(false)}>GitHub</a>
            <a href="#" className="w-full text-center px-4 py-3 bg-white text-black rounded-lg font-semibold text-lg" onClick={() => setIsOpen(false)}>
              Sign In
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}