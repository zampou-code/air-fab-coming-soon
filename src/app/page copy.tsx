"use client";

import { HeroBanner } from "@/components/hero-banner";
import { MainCarousel } from "@/components/main-carousel";

export default function Home() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <HeroBanner />
      <MainCarousel />
    </div>
  );
}
