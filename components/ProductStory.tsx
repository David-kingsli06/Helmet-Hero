"use client";

export default function ProductStory() {
  return (
    <section
      id="design"
      className="relative z-10 w-full bg-[#050507] text-[#f4f4f5] pt-24 pb-32 border-t border-zinc-900/60 overflow-hidden"
    >
      {/* Subtle smoky red background highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-zinc-800/40">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[11px] font-mono tracking-[0.3em] text-red-500 uppercase">
              <span>01</span>
              <span className="text-zinc-700">//</span>
              <span>AERODYNAMIC PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white uppercase">
              DESIGNED IN SILENCE.
              <br />
              SCULPTED BY VELOCITY.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            The transition from rider to pure silhouette reveals the pure monocoque
            geometry. No extraneous lines. Every contour channels high-velocity airflow
            away from the rider’s neck.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          <div className="flex flex-col justify-between p-8 rounded border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full pointer-events-none group-hover:bg-red-600/10 transition-colors" />
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-widest block mb-4">
                [ 01 // FORM ]
              </span>
              <h3 className="text-xl font-light text-white mb-3 uppercase tracking-wide">
                Seamless Monocoque
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Continuous shell geometry eliminates mechanical seam vulnerabilities.
                Tapered crown channels minimize high-speed buffeting at extreme yaw angles.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>STRUCTURAL INTEGRITY</span>
              <span className="text-red-400 font-bold">UNIFIED AXIS</span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 rounded border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full pointer-events-none group-hover:bg-red-600/10 transition-colors" />
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-widest block mb-4">
                [ 02 // VISOR ]
              </span>
              <h3 className="text-xl font-light text-white mb-3 uppercase tracking-wide">
                Deep Obsidian Visor
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Engineered for edge-to-edge optical clarity across 210° horizontal field of view.
                Subtle flush-mount mechanism preserves laminar flow across the visor interface.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>OPTICAL HORIZON</span>
              <span className="text-red-400 font-bold">210° PERIPHERAL</span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 rounded border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full pointer-events-none group-hover:bg-red-600/10 transition-colors" />
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-widest block mb-4">
                [ 03 // ACOUSTICS ]
              </span>
              <h3 className="text-xl font-light text-white mb-3 uppercase tracking-wide">
                Acoustic Containment
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Internal airflow channels tuned in smoke tunnels to prevent vortex turbulence,
                dampening wind roar while preserving ambient road feedback.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>ATMOSPHERE</span>
              <span className="text-red-400 font-bold">SMOKE CALIBRATED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
