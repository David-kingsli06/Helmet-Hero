"use client";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 w-full bg-[#050507] text-[#f4f4f5] py-28 border-t border-zinc-900/60 overflow-hidden"
    >
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex items-center gap-2 mb-3 text-[11px] font-mono tracking-[0.3em] text-red-500 uppercase">
          <span>04</span>
          <span className="text-zinc-700">//</span>
          <span>RIDER SYNERGY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-16 border-b border-zinc-800/40">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase leading-[1.08]">
              WHEN THE MACHINE DISAPPEARS,
              <br />
              ONLY THE LINE REMAINS.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              At 240 km/h, sensory overwhelm is the greatest threat. AURA V-1 acts as a pure
              sensory conduit—filtering violent wind sheer into smooth laminar hush, delivering
              uninhibited situational awareness.
            </p>
          </div>
        </div>

        {/* Cinematic Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
          <div className="p-6 rounded border border-zinc-900 bg-zinc-950/40">
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-2">
              COEFFICIENT OF DRAG
            </span>
            <div className="text-3xl sm:text-4xl font-light text-white font-mono tracking-tight">
              0.274 <span className="text-sm text-red-500">Cd</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-normal">
              Wind-tunnel honed teardrop silhouette.
            </p>
          </div>

          <div className="p-6 rounded border border-zinc-900 bg-zinc-950/40">
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-2">
              HORIZONTAL VISIBILITY
            </span>
            <div className="text-3xl sm:text-4xl font-light text-white font-mono tracking-tight">
              210° <span className="text-sm text-red-500">ARC</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-normal">
              Panoramic peripheral apex scanning.
            </p>
          </div>

          <div className="p-6 rounded border border-zinc-900 bg-zinc-950/40">
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-2">
              VERTICAL APEX TILT
            </span>
            <div className="text-3xl sm:text-4xl font-light text-white font-mono tracking-tight">
              34° <span className="text-sm text-red-500">TUCK</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-normal">
              Unclipped sightline in full racing tuck.
            </p>
          </div>

          <div className="p-6 rounded border border-zinc-900 bg-zinc-950/40">
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-2">
              CENTER OF MASS
            </span>
            <div className="text-3xl sm:text-4xl font-light text-white font-mono tracking-tight">
              NEUTRAL <span className="text-sm text-red-500">0.0</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-normal">
              Neutralized neck fatigue over long stints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
