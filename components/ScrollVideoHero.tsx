"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SCENES, TOTAL_FRAMES, FRAME_PATH_PATTERN } from "./heroConfig";
import SceneTitles from "./SceneTitles";

export default function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Loaded frame images cache
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentRenderedFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // States
  const [progress, setProgress] = useState<number>(0);
  const [loadPercentage, setLoadPercentage] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [mode, setMode] = useState<"frames" | "video">("frames");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Preload frames in chunks
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const loadFrame = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = FRAME_PATH_PATTERN(index);
        img.onload = () => {
          loadedCount++;
          if (!isCancelled) {
            setLoadPercentage(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          }
          resolve(img);
        };
        img.onerror = () => {
          console.warn(`Frame ${index} failed.`);
          resolve(img);
        };
        images[index - 1] = img;
      });
    };

    // Priority chunk: first 15 frames for instant rendering
    const priorityIndices = Array.from({ length: 15 }, (_, i) => i + 1);
    Promise.all(priorityIndices.map(loadFrame)).then(() => {
      if (isCancelled) return;
      imagesRef.current = images;
      setIsLoaded(true);
      renderFrame(1);

      // Background load remaining frames in small batches
      const remainingIndices = Array.from(
        { length: TOTAL_FRAMES - 15 },
        (_, i) => i + 16
      );
      
      const batchSize = 12;
      const loadBatches = async () => {
        for (let i = 0; i < remainingIndices.length; i += batchSize) {
          if (isCancelled) break;
          const chunk = remainingIndices.slice(i, i + batchSize);
          await Promise.all(chunk.map(loadFrame));
        }
      };
      loadBatches();
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // Frame drawer on Canvas with aspect-ratio cover - completely clean and raw
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      return;
    }

    currentRenderedFrameRef.current = frameIndex;

    const cw = canvas.width;
    const ch = canvas.height;

    // Calculate aspect fill cover
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let renderW = cw;
    let renderH = ch;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderW = cw;
      renderH = cw / imgRatio;
      offsetY = (ch - renderH) / 2;
    } else {
      renderH = ch;
      renderW = ch * imgRatio;
      offsetX = (cw - renderW) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }, []);

  // Resize canvas according to container dimensions and DPR
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      const frameToDraw =
        currentRenderedFrameRef.current > 0
          ? currentRenderedFrameRef.current
          : 1;
      renderFrame(frameToDraw);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  // Main scroll loop
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!containerRef.current) {
        ticking = false;
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) {
        ticking = false;
        return;
      }

      // Calculate progress 0 -> 1 based on full top edge
      const rawProgress = -rect.top / totalScrollable;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);

      if (mode === "frames") {
        const targetFrame = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.round(clampedProgress * (TOTAL_FRAMES - 1)) + 1)
        );

        if (targetFrame !== currentRenderedFrameRef.current) {
          renderFrame(targetFrame);
        }
      } else if (mode === "video" && videoRef.current) {
        const vid = videoRef.current;
        if (vid.duration) {
          vid.currentTime = clampedProgress * vid.duration;
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafIdRef.current = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [renderFrame, mode]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-[#050507]"
      // 800vh provides slow, deliberate scrub rate so captions don't run away
      style={{ height: prefersReducedMotion ? "100vh" : "800vh" }}
    >
      {/*
        Sticky Viewport occupies full 100vh directly from the top (top-0)
      */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#050507]">
        {/* Cinematic Canvas or Fallback Video - Clean, raw original frame with NO shadow overlay */}
        {mode === "frames" ? (
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{ display: "block" }}
          />
        ) : (
          <video
            ref={videoRef}
            src="/helmet-hero.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        )}

        {/* Narrative Scene Titles */}
        <SceneTitles scenes={SCENES} currentProgress={progress} />

        {/* Preload hairline progress */}
        {!isLoaded && (
          <div className="absolute top-0 left-0 right-0 z-40 h-[2px] bg-zinc-900">
            <div
              className="h-full bg-red-600 transition-all duration-200 ease-out shadow-[0_0_8px_#ef4444]"
              style={{ width: `${loadPercentage}%` }}
            />
          </div>
        )}

        {/* Source Switcher */}
        <div className="absolute bottom-4 right-6 z-30 hidden lg:flex items-center gap-3 text-[9px] font-mono tracking-widest text-zinc-600">
          <span>SOURCE:</span>
          <button
            onClick={() => setMode("frames")}
            className={`transition-colors ${
              mode === "frames" ? "text-red-400 font-bold" : "hover:text-zinc-400"
            }`}
          >
            240-WEBP
          </button>
          <span>/</span>
          <button
            onClick={() => setMode("video")}
            className={`transition-colors ${
              mode === "video" ? "text-red-400 font-bold" : "hover:text-zinc-400"
            }`}
          >
            MP4-SCRUB
          </button>
        </div>
      </div>
    </section>
  );
}
