"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, FileCode, CreditCard, Send, X } from "lucide-react";
import { toast } from "sonner";

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // This listens for the Ctrl+K or Cmd+K keyboard press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Quick actions array
  const actions = [
    {
      id: "docs",
      icon: FileCode,
      label: "Read Documentation",
      shortcut: "G D",
      action: () => {
        window.location.href = "/docs";
      },
    },
    {
      id: "pricing",
      icon: CreditCard,
      label: "View Pricing Tiers",
      shortcut: "G P",
      action: () => {
        setIsOpen(false);
        window.scrollTo({ top: document.body.scrollHeight / 1.5, behavior: "smooth" });
      },
    },
    {
      id: "copy",
      icon: Terminal,
      label: "Copy Install Command",
      shortcut: "C I",
      action: () => {
        navigator.clipboard.writeText("curl -fsSL https://codeaois.com/install.sh | bash");
        toast.success("Install command copied to clipboard!");
        setIsOpen(false);
      },
    },
    {
      id: "waitlist",
      icon: Send,
      label: "Join Private Beta Waitlist",
      shortcut: "J W",
      action: () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.info("Scroll down to the CTA or click 'Get Early Access'!");
      },
    },
  ];

  // Filter actions based on what the user types
  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh] px-4">
          {/* Blur Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#111] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Search Input Area */}
            <div className="flex items-center px-4 py-4 border-b border-zinc-800">
              <Search className="w-5 h-5 text-zinc-500 mr-3" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500 text-lg"
              />
              <div className="flex items-center gap-1">
                <kbd className="bg-zinc-800 border border-zinc-700 text-zinc-400 px-2 py-0.5 rounded text-xs font-mono">esc</kbd>
              </div>
            </div>

            {/* Action List */}
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredActions.length > 0 ? (
                filteredActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={action.action}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-cyan-950/30 hover:text-cyan-400 group transition-colors text-zinc-300"
                  >
                    <div className="flex items-center gap-3">
                      <action.icon className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                      <span className="font-medium">{action.label}</span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-zinc-500">
                  No results found for "{search}"
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-4 py-3 border-t border-zinc-800 bg-[#0A0A0A] flex justify-between items-center text-xs text-zinc-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">Use keyboard to navigate</span>
              </div>
              <div className="flex items-center gap-1">
                CodeAOIS Menu
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}