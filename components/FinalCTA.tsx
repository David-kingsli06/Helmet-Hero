"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="relative z-10 w-full bg-[#050507] text-[#f4f4f5] pt-24 pb-16 border-t border-zinc-900 overflow-hidden">
      {/* Dramatic smoky red ambient glow centered behind CTA */}
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[900px] h-[500px] bg-red-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-[10px] font-mono tracking-[0.25em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          ALLOCATION RELEASE // BATCH 01
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white uppercase mb-6 leading-[1.05]">
          COMMAND THE ROAD.
          <br />
          SECURE YOUR ALLOCATION.
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-12">
          Strictly limited series production. Hand-finished with bespoke obsidian visor
          and precision-tailored acoustic liners. Register below for private preview access.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded bg-zinc-900/80 border border-red-500/50 text-white font-mono text-sm">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>PRIORITY ACCESS CODE TRANSMITTED // CHECK YOUR TERMINAL</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="ENTER RIDER EMAIL..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded bg-zinc-950/80 border border-zinc-800 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold whitespace-nowrap transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              REGISTER
            </button>
          </form>
        )}

        {/* Footer Meta Details */}
        <div className="mt-24 pt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600">
          <div className="flex items-center gap-4">
            <span>AURA MOTORSPORT DIVISION</span>
            <span>//</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-6 text-zinc-500">
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">
              TELEMETRY LOGS
            </span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">
              PRIVACY POLICY
            </span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">
              TERMS OF ALLOCATION
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
