"use client";

import { useState } from "react";

const detailsData = [
  {
    id: "01",
    title: "OBSIDIAN VISOR SHIELD",
    category: "OPTICS",
    description:
      "Deep smoked optical curve formulated to preserve high-contrast vision in variable lighting conditions, reducing eye fatigue during sustained high-velocity runs.",
    specs: "99.4% UV Shielding // Tool-less quick release",
  },
  {
    id: "02",
    title: "LAMINAR SMOKE PORTS",
    category: "VENTILATION",
    description:
      "Dual forehead intake vectors siphon airflow directly across the crown through precision sculpted negative-pressure exhaust vents at the helmet spoiler.",
    specs: "Multi-stage slider // Zero whistling acoustic baffle",
  },
  {
    id: "03",
    title: "CARBON-KEVLAR MONOCOQUE",
    category: "MATERIAL CRAFT",
    description:
      "Hand-layered composite weave maximizing rigidity-to-weight ratio. The outer shell balances structural stiffness with energy-absorbing compliance.",
    specs: "Featherweight balance // Balanced center of mass",
  },
  {
    id: "04",
    title: "EMERGENCY QUICK RELEASE",
    category: "SAFETY SYSTEMS",
    description:
      "Integrated pull tabs allow medical crews to gently release cheek pads without exerting rotational torque on the rider's neck vertebra.",
    specs: "Red tactile pulls // Rapid rescue protocol",
  },
];

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="details"
      className="relative z-10 w-full bg-[#050507] text-[#f4f4f5] py-28 border-t border-zinc-900/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-zinc-800/40">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[11px] font-mono tracking-[0.3em] text-red-500 uppercase">
              <span>03</span>
              <span className="text-zinc-700">//</span>
              <span>TACTILE DETAILS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
              ENGINEERED PRECISION.
              <br />
              EVERY MILLIMETER.
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            SYSTEM SPECIFICATION 04 ITEMS
          </span>
        </div>

        {/* Interactive detail switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
          {/* Detail Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {detailsData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-5 rounded border transition-all duration-300 ${
                    isActive
                      ? "bg-zinc-900/70 border-red-500/60 shadow-[0_0_20px_rgba(220,38,38,0.1)]"
                      : "bg-zinc-950/30 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                      [{item.id}] // {item.category}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    )}
                  </div>
                  <h3
                    className={`text-lg font-light uppercase tracking-wide transition-colors ${
                      isActive ? "text-white font-normal" : "text-zinc-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display Screen */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 rounded border border-zinc-800/60 bg-gradient-to-br from-zinc-950 via-zinc-950/80 to-red-950/20 backdrop-blur-sm relative">
            <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-zinc-600">
              EXPLODED COMPONENT VIEW
            </div>

            <div className="pt-8">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-red-950/40 border border-red-500/40 text-red-400 mb-6">
                FEATURE FOCUS // {detailsData[activeTab].category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight uppercase mb-6">
                {detailsData[activeTab].title}
              </h3>
              <p className="text-zinc-300 font-normal leading-relaxed text-base sm:text-lg mb-8 max-w-xl">
                {detailsData[activeTab].description}
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-zinc-500">SPECIFICATION:</span>
                <span className="text-white">{detailsData[activeTab].specs}</span>
              </div>
              <span className="text-red-400 tracking-wider">AURA APEX GRADE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
