# Master Prompt: Premium Cinematic Motorcycle Helmet Scroll Experience

Copy and paste the prompt below into any AI coding assistant to create an exact, 1:1 replica of this project.

***

```markdown
# Role & Project Scope
You are a world-class Design Engineer specializing in high-performance automotive and luxury hardware product experiences (Emil Design Engineering + Impeccable Design + Restrained Taste).

Build a premium, cinematic motorcycle helmet website where **the scroll-scrubbed video/frame animation IS THE HERO SECTION**. 

There must be **NO navbar**, **NO static hero banner**, **NO hero headline sitting above the animation**, and **NO conventional cards/widgets** before the animation. The user's very first encounter upon loading the website is the edge-to-edge cinematic frame animation.

---

## Strict Tech Stack
- Next.js (App Router)
- React 19 / TypeScript
- Tailwind CSS
- Pure native browser APIs (`HTML5 Canvas`, `requestAnimationFrame`, passive scroll listeners) — DO NOT introduce heavy external 3D libraries or unnecessary bloatware.

---

## 1. Frame Assets & Architecture

### Assets Location
- 240 sequential WebP frames located at:
  `/public/frames/helmet/frame_001.webp` through `frame_240.webp` (1280x720, ~20KB each).
- Fallback MP4 video at:
  `/public/helmet-hero.mp4`

### Canvas-Based Frame Scrubbing (Performance Critical)
HTML5 `<video>.currentTime` updates trigger severe browser decoder lag and frame stuttering when scrubbing via scroll. You must implement a dual-mode engine:
1. **Primary High-Performance Canvas Engine**:
   - Preload the first 15 frames immediately for instantaneous interactive rendering on load.
   - Background-load the remaining frames in controlled chunks (e.g. batches of 12) to avoid network bottlenecking.
   - An aspect-fill cover algorithm (`drawImage` with proper aspect ratio calculations) rendering directly to an HTML5 `<canvas>` sized to DPR (devicePixelRatio capped at 2).
   - Only repaint canvas when `targetFrame !== currentRenderedFrameRef.current`.
2. **Clean Fallback Toggle**:
   - A discreet, ultra-subtle monospace switch in the bottom corner (`SOURCE: 240-WEBP / MP4-SCRUB`) allowing toggle between the Canvas frame scrubber and `<video>` scrub.
3. **No Frame Shadows or Vignette Masks**:
   - Render the frames completely clean and raw — do NOT overlay fake dark vignette gradients or heavy drop-shadows across the frames. Let the original red cinematic lighting and smoke shine through.

---

## 2. Scroll Geometry & Timeline

- **Hero Track Height**: Set the hero container height to `800vh` (`style={{ height: "800vh" }}`). This provides an intentional, slow, cinematic scrubbing feel rather than flying past the scenes in one flick.
- **Sticky Viewport**: `sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#050507]`.
- **Progress Normalization**:
  ```ts
  const rawProgress = -rect.top / (rect.height - window.innerHeight);
  const clampedProgress = Math.max(0, Math.min(1, rawProgress));
  const targetFrame = Math.min(
    TOTAL_FRAMES,
    Math.max(1, Math.round(clampedProgress * (TOTAL_FRAMES - 1)) + 1)
  );
  ```
- **Accessibility**: Check `prefers-reduced-motion`. If active, collapse track to `100vh` and display frame 1 stably.

---

## 3. Scene Breakdown & Narrative Captions

Centralize scene configuration in `heroConfig.ts`. Each scene must have a prolonged **reading plateau (`peakProgressStart` to `peakProgressEnd`)** so the user has ample time to read without the text running away immediately:

### Scene 01: RIDER
- **Progress**: `start: 0.00`, `plateau: 0.03 – 0.16`, `end: 0.20`
- **Headline**: `BUILT TO MOVE`
- **Subtitle**: `Engineered for the road ahead.`
- **Tagline**: `STATIONARY STANCE`
- **Alignment**: Left
- **Telemetry**: `CHASSIS STATUS // STABLE // READY`

### Scene 02: APPROACH
- **Progress**: `start: 0.21`, `plateau: 0.24 – 0.36`, `end: 0.40`
- **Headline**: `PROTECTION, REFINED`
- **Subtitle**: `Precision engineering meets uncompromising protection.`
- **Tagline**: `VECTOR APPROACH`
- **Alignment**: Right
- **Telemetry**: `FOCAL LENGTH // OPTICAL LOCK ON APEX`

### Scene 03: TRANSFORMATION
- **Progress**: `start: 0.41`, `plateau: 0.44 – 0.56`, `end: 0.60`
- **Headline**: `FOCUS ON WHAT MATTERS`
- **Subtitle**: `Every detail has a purpose.`
- **Tagline**: `TRANSFORMATION`
- **Alignment**: Left
- **Telemetry**: `WEIGHT DISTRIBUTION // ZERO MASS RESIDUAL`

### Scene 04: FLOATING HELMET
- **Progress**: `start: 0.61`, `plateau: 0.64 – 0.76`, `end: 0.80`
- **Headline**: `ENGINEERED FROM THE CORE`
- **Subtitle**: `Form follows function.`
- **Tagline**: `FLOATING MONOCOQUE`
- **Alignment**: Right
- **Telemetry**: `AERO PROFILE // Cd 0.274 RED SMOKE TUNNEL`

### Scene 05: 360° ROTATION
- **Progress**: `start: 0.81`, `plateau: 0.84 – 0.96`, `end: 1.00`
- **Headline**: `360° OF CONFIDENCE`
- **Subtitle**: `Designed from every angle.`
- **Tagline**: `FULL ORBIT AXIS`
- **Alignment**: Center
- **Telemetry**: `ROTATION MATRIX // 360° CONTINUOUS PROFILE`

### Typography Motion Rules:
- During entry (`startProgress` to `peakProgressStart`): gentle fade-in from `translateY: 8px` to `0px` and blur from `3px` to `0px`.
- During plateau (`peakProgressStart` to `peakProgressEnd`): locked at `opacity: 1`, `translateY: 0`, and `blur: 0` for effortless reading.
- During exit (`peakProgressEnd` to `endProgress`): gentle fade-out to `translateY: -6px` and blur `3px`.
- Left and right aligned headlines stay positioned toward the outer edges of the viewport to keep the center vertical corridor of the helmet completely unobstructed.

---

## 4. UI Elements & Layout Hierarchy

1. **NO NAVBAR**:
   - Do NOT render any top navigation bar. The top of the page must be purely visual with the frame filling the screen from pixel 0.
2. **Minimal Top Telemetry HUD**:
   - `CINEMATIC PROTOCOL // 01-05` on top-left with a pulsing red dot.
   - `PROGRESS // [X]% | SCENE CHOP ACTIVE` on top-right.
3. **Bottom Scrub Status**:
   - `SCROLL TO SCRUB TIMELINE` on bottom-left.
   - Animated pill scroll-indicator on bottom-right.

---

## 5. Post-Hero Editorial Sections

After the user finishes scrubbing the 800vh hero, the page transitions smoothly into continuous dark editorial storytelling:

1. **Aerodynamic Philosophy (`ProductStory.tsx`)**:
   - Headline: `DESIGNED IN SILENCE. SCULPTED BY VELOCITY.`
   - 3 technical cards: `Seamless Monocoque`, `Deep Obsidian Visor`, `Acoustic Containment`.
2. **Protection Philosophy (`ProtectionSection.tsx`)**:
   - Headline: `Uncompromising Defense. Zero Distraction.`
   - Technical breakdown: Deflection Geometry, Multi-Density Core, Titanium D-Ring.
   - Interactive schematic block: Outer Glaze, Damping Matrix, Anatomic Liner.
3. **Tactile Details (`ProductDetails.tsx`)**:
   - Tabbed inspector for: `Obsidian Visor Shield`, `Laminar Smoke Ports`, `Carbon-Kevlar Monocoque`, `Emergency Quick Release`.
4. **Rider Synergy & Metrics (`ExperienceSection.tsx`)**:
   - Headline: `WHEN THE MACHINE DISAPPEARS, ONLY THE LINE REMAINS.`
   - Metric cards: `0.274 Cd`, `210° ARC Visibility`, `34° TUCK Tilt`, `0.0 Neutral Center of Mass`.
5. **Allocation Reservation CTA (`FinalCTA.tsx`)**:
   - Minimalist input field with priority reservation confirmation.

---

## 6. Color Palette & Aesthetics
- Background: `#050507` (Deep Obsidian Black)
- Primary Text: `#f4f4f5` (Zinc 100)
- Secondary Text: `#a1a1aa` (Zinc 400)
- Accents & Highlights: `#dc2626` / `#ef4444` (Racing Red)
- Borders: `rgba(39, 39, 42, 0.6)` (Zinc 800 / 60)
- Font: Modern grotesque / sans-serif with monospace uppercase metadata accents.
```
