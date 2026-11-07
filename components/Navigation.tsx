"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const sections = ["hero", "design", "protection", "details", "experience"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= vh * 0.4 && rect.bottom >= vh * 0.2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-[#050507]/95 backdrop-blur-md border-b border-zinc-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-6 h-6 rounded border border-red-500/40 bg-red-950/30 group-hover:border-red-500 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-white uppercase group-hover:text-red-400 transition-colors">
              AURA V-1
            </span>
          </div>
        </button>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-6 px-4 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/50 text-[10px] font-mono tracking-[0.2em] text-zinc-400">
          {[
            { id: "design", label: "DESIGN" },
            { id: "protection", label: "PROTECTION" },
            { id: "details", label: "DETAILS" },
            { id: "experience", label: "EXPERIENCE" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative py-1 transition-colors hover:text-white uppercase ${
                activeSection === item.id ? "text-white" : ""
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-red-500 shadow-[0_0_6px_#ef4444]" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("experience")}
            className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/80 hover:bg-red-950/40 hover:border-red-500/60 text-[10px] font-mono tracking-[0.18em] text-zinc-200 transition-all duration-300"
          >
            <span>EXPLORE</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 text-red-400">
              →
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
