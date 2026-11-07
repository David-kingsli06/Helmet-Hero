export interface SceneConfig {
  id: string;
  sceneNumber: string;
  title: string;
  subtitle: string;
  startProgress: number; // 0 to 1
  peakProgressStart: number; // start of full hold plateau
  peakProgressEnd: number;   // end of full hold plateau
  endProgress: number;   // 0 to 1
  alignment?: "left" | "right" | "center";
  tagline?: string;
  telemetry?: {
    label: string;
    value: string;
  };
}

export const SCENES: SceneConfig[] = [
  {
    id: "scene-1",
    sceneNumber: "01",
    title: "BUILT TO MOVE",
    subtitle: "Engineered for the road ahead.",
    startProgress: 0.0,
    peakProgressStart: 0.03,
    peakProgressEnd: 0.16,
    endProgress: 0.20,
    alignment: "left",
    tagline: "STATIONARY STANCE",
    telemetry: {
      label: "CHASSIS STATUS",
      value: "STABLE // READY",
    },
  },
  {
    id: "scene-2",
    sceneNumber: "02",
    title: "PROTECTION, REFINED",
    subtitle: "Precision engineering meets uncompromising protection.",
    startProgress: 0.21,
    peakProgressStart: 0.24,
    peakProgressEnd: 0.36,
    endProgress: 0.40,
    alignment: "right",
    tagline: "VECTOR APPROACH",
    telemetry: {
      label: "FOCAL LENGTH",
      value: "OPTICAL LOCK ON APEX",
    },
  },
  {
    id: "scene-3",
    sceneNumber: "03",
    title: "FOCUS ON WHAT MATTERS",
    subtitle: "Every detail has a purpose.",
    startProgress: 0.41,
    peakProgressStart: 0.44,
    peakProgressEnd: 0.56,
    endProgress: 0.60,
    alignment: "left",
    tagline: "TRANSFORMATION",
    telemetry: {
      label: "WEIGHT DISTRIBUTION",
      value: "ZERO MASS RESIDUAL",
    },
  },
  {
    id: "scene-4",
    sceneNumber: "04",
    title: "ENGINEERED FROM THE CORE",
    subtitle: "Form follows function.",
    startProgress: 0.61,
    peakProgressStart: 0.64,
    peakProgressEnd: 0.76,
    endProgress: 0.80,
    alignment: "right",
    tagline: "FLOATING MONOCOQUE",
    telemetry: {
      label: "AERO PROFILE",
      value: "Cd 0.274 RED SMOKE TUNNEL",
    },
  },
  {
    id: "scene-5",
    sceneNumber: "05",
    title: "360° OF CONFIDENCE",
    subtitle: "Designed from every angle.",
    startProgress: 0.81,
    peakProgressStart: 0.84,
    peakProgressEnd: 0.96,
    endProgress: 1.0,
    alignment: "center",
    tagline: "FULL ORBIT AXIS",
    telemetry: {
      label: "ROTATION MATRIX",
      value: "360° CONTINUOUS PROFILE",
    },
  },
];

export const TOTAL_FRAMES = 240;
export const FRAME_PATH_PATTERN = (index: number) =>
  `/frames/helmet/frame_${String(index).padStart(3, "0")}.webp`;
