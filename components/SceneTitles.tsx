"use client";

import { SceneConfig } from "./heroConfig";

interface SceneTitlesProps {
  scenes: SceneConfig[];
  currentProgress: number;
}

export default function SceneTitles({
  scenes,
  currentProgress,
}: SceneTitlesProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-8 md:p-12">
      {/* Top telemetry & frame indicator - clean and unclipped */}
      <div className="flex items-start justify-between w-full pt-2 text-[10px] font-mono tracking-widest text-zinc-500">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-zinc-400 uppercase tracking-[0.2em]">
            CINEMATIC PROTOCOL // 01-05
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-zinc-400">
          <span>PROGRESS // {Math.round(currentProgress * 100)}%</span>
          <span className="text-zinc-700">|</span>
          <span className="text-red-400/90 font-mono">SCENE CHOP ACTIVE</span>
        </div>
      </div>

      {/* Main Narrative Overlays - Anchored towards the sides to preserve helmet focal center */}
      <div className="relative w-full my-auto">
        {scenes.map((scene) => {
          const { startProgress, peakProgressStart, peakProgressEnd, endProgress } = scene;
          let opacity = 0;
          let translateY = 8;
          let blur = 3;

          if (currentProgress >= startProgress && currentProgress <= endProgress) {
            if (currentProgress < peakProgressStart) {
              // Fade in
              const ratio = (currentProgress - startProgress) / (peakProgressStart - startProgress);
              opacity = Math.max(0, Math.min(1, ratio));
              translateY = 8 * (1 - ratio);
              blur = 3 * (1 - ratio);
            } else if (currentProgress <= peakProgressEnd) {
              // Steady reading plateau - stays locked in crisp focus
              opacity = 1;
              translateY = 0;
              blur = 0;
            } else {
              // Fade out
              const ratio = (currentProgress - peakProgressEnd) / (endProgress - peakProgressEnd);
              opacity = Math.max(0, Math.min(1, 1 - ratio));
              translateY = -6 * ratio;
              blur = 3 * ratio;
            }
          }

          if (opacity <= 0.01) return null;

          const alignClasses =
            scene.alignment === "right"
              ? "items-end text-right ml-auto"
              : scene.alignment === "center"
              ? "items-center text-center mx-auto"
              : "items-start text-left mr-auto";

          return (
            <div
              key={scene.id}
              style={{
                opacity,
                transform: `translate3d(0, ${translateY}px, 0)`,
                filter: `blur(${blur}px)`,
                transition: "filter 0.2s ease-out",
              }}
              className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 flex flex-col ${alignClasses} max-w-lg lg:max-w-xl transition-transform duration-150 ease-out`}
            >
              {/* Scene Index & Tagline */}
              <div className="flex items-center gap-2 mb-2 text-[10px] font-mono tracking-[0.25em] text-red-500 uppercase">
                <span>SCENE {scene.sceneNumber}</span>
                <span className="text-zinc-700">//</span>
                <span className="text-zinc-400">{scene.tagline}</span>
              </div>

              {/* Primary Headline */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-2 leading-[1.1] uppercase">
                {scene.title}
              </h2>

              {/* Supporting Subtitle */}
              <p className="text-xs sm:text-sm md:text-base font-normal tracking-wide text-zinc-400 max-w-sm leading-relaxed">
                {scene.subtitle}
              </p>

              {/* Telemetry badge */}
              {scene.telemetry && (
                <div className="mt-4 inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#050507]/60 border border-zinc-800/60 backdrop-blur-md text-[9px] font-mono tracking-wider text-zinc-400">
                  <span className="text-red-500 font-semibold">{scene.telemetry.label}</span>
                  <span className="text-zinc-700">//</span>
                  <span className="text-zinc-300">{scene.telemetry.value}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom status & scroll guide */}
      <div className="flex items-end justify-between w-full pb-2 text-[10px] font-mono tracking-widest text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]" />
          <span className="text-zinc-400 uppercase text-[9px] sm:text-[10px]">
            SCROLL TO SCRUB TIMELINE
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-1 text-zinc-500">
          <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-500">SCROLL</span>
          <div className="w-3.5 h-6 rounded-full border border-zinc-700/80 flex items-start justify-center p-0.5">
            <span className="w-1 h-1.5 rounded-full bg-red-500 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
