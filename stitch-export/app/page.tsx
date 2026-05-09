"use client";

import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="grain-overlay"></div>
      <div className="geometric-bg"></div>

      <NavBar />

      <Hero />

      <Footer />
    </>
  );
}