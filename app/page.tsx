import ScrollVideoHero from "@/components/ScrollVideoHero";
import ProductStory from "@/components/ProductStory";
import ProtectionSection from "@/components/ProtectionSection";
import ProductDetails from "@/components/ProductDetails";
import ExperienceSection from "@/components/ExperienceSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050507] text-[#f4f4f5] selection:bg-red-600/40 selection:text-white">
      {/*
        THE HERO IS THE SCROLL EXPERIENCE:
        - Completely pure, edge-to-edge frame presentation with no navbar.
        - The scroll-scrubbed canvas/video sequence IS the entire first encounter.
      */}
      <ScrollVideoHero />

      {/* Seamless transition into editorial product storytelling */}
      <ProductStory />
      <ProtectionSection />
      <ProductDetails />
      <ExperienceSection />
      <FinalCTA />
    </main>
  );
}
