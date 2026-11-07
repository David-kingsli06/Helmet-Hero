import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURA V-1 // APEX CINEMATIC HELMET",
  description:
    "Engineered for the road ahead. Precision protection and aerodynamic mastery in a smoky red cinematic visual experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#050507] text-[#f4f4f5] antialiased selection:bg-red-600/40 selection:text-white">
      <body className="min-h-full flex flex-col bg-[#050507] text-[#f4f4f5] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
