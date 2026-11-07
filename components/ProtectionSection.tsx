"use client";

export default function ProtectionSection() {
  return (
    <section
      id="protection"
      className="relative z-10 w-full bg-[#050507] text-[#f4f4f5] py-28 border-t border-zinc-900/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Manifesto */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3 text-[11px] font-mono tracking-[0.3em] text-red-500 uppercase">
              <span>02</span>
              <span className="text-zinc-700">//</span>
              <span>PROTECTION PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6 uppercase leading-[1.1]">
              Uncompromising Defense.
              <br />
              Zero Distraction.
            </h2>
            <p className="text-zinc-400 font-normal leading-relaxed text-sm sm:text-base mb-8">
              True protection does not announce itself through bulk or weight. It exists in the
              disciplined geometry that deflects impact energy before it reaches the core, allowing
              the rider to remain completely focused on the machine and the asphalt ahead.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between py-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 uppercase tracking-wider">DEFLECTION GEOMETRY</span>
                <span className="text-white">RADIUS-CONTROLLED SHELL</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 uppercase tracking-wider">FORCE DISSIPATION</span>
                <span className="text-white">MULTI-DENSITY CONCENTRIC CORE</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-zinc-800/60">
                <span className="text-zinc-400 uppercase tracking-wider">RETENTION LOCK</span>
                <span className="text-white">TITANIUM DOUBLE D-RING</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Telemetry Blueprint Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-8 sm:p-12 overflow-hidden">
              {/* Subtle grid pattern & red glow */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(220,38,38,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-12">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase">
                      SCHEMATIC ARCHITECTURE
                    </span>
                    <h3 className="text-2xl font-light text-white tracking-wide mt-1">
                      KINETIC BUFFER ZONE
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600">REF: AURA-992</span>
                </div>

                {/* Conceptual Schematic Layers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded bg-zinc-900/60 border border-zinc-800/60">
                    <span className="text-[10px] font-mono text-zinc-500 block mb-1">LAYER 01</span>
                    <h4 className="text-sm font-medium text-white mb-2">Outer Glaze</h4>
                    <p className="text-xs text-zinc-400 leading-normal font-normal">
                      High-tensile composite designed to glance off abrasive road surfaces.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-zinc-900/60 border border-zinc-800/60">
                    <span className="text-[10px] font-mono text-zinc-500 block mb-1">LAYER 02</span>
                    <h4 className="text-sm font-medium text-white mb-2">Damping Matrix</h4>
                    <p className="text-xs text-zinc-400 leading-normal font-normal">
                      Segmented absorption cells to disperse rotational deceleration.
                    </p>
                  </div>

                  <div className="p-4 rounded bg-zinc-900/60 border border-zinc-800/60">
                    <span className="text-[10px] font-mono text-zinc-500 block mb-1">LAYER 03</span>
                    <h4 className="text-sm font-medium text-white mb-2">Anatomic Liner</h4>
                    <p className="text-xs text-zinc-400 leading-normal font-normal">
                      Moisture-regulating antimicrobial contour for unbroken contact stability.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>IMPACT SIMULATION: COMPLETED</span>
                  <span className="text-red-400">ZERO COMPROMISE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
