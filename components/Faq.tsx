"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Does CodeAOIS work on Windows?",
    answer: "Yes, but we strongly recommend using WSL2 (Windows Subsystem for Linux) for the best experience. Native Windows support is currently in beta."
  },
  {
    question: "How is my codebase indexed for RAG?",
    answer: "Everything stays local. We use an embedded vector database that runs entirely on your machine. Your proprietary code never leaves your hardware unless you explicitly send a snippet to a cloud LLM."
  },
  {
    question: "Can I use my own API keys?",
    answer: "Absolutely. On the Free and Pro tiers, you can bring your own OpenAI, Anthropic, or Gemini API keys. The Elite tier includes built-in tokens for convenience."
  },
  {
    question: "What languages are supported?",
    answer: "The OS is language-agnostic. Whether you're writing Python, Rust, TypeScript, or Go, the agents can read, execute, and debug your environment."
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-zinc-200 group-hover:text-cyan-400 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-500 group-hover:text-cyan-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  return (
    <section className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400">Everything you need to know about the OS.</p>
        </div>
        <div className="border-t border-zinc-800">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}