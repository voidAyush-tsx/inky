"use client"

import Image from "next/image";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/heroSection";
import { MarqueeSection } from "@/components/MarqueeSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <Header />
      <HeroSection />
      <MarqueeSection />
      
      <section className="relative w-full py-32 mt-32">
        <div className="relative flex items-center justify-center mx-auto max-w-7xl">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, #FF0000 0%, rgba(32, 5, 5, 0) 25%)",
              filter: "blur(200px)",
              zIndex: 0,
            }}
          />
          <div
            className="flex font-inky-header font-extrabold text-9xl text-center items-center justify-center text-transparent leading-tight relative z-10"
            style={{
              WebkitTextStroke: "1.2px #000000",
              WebkitTextFillColor: "rgba(0, 0, 0, 0)",
              filter: "drop-shadow(0 1.72px 10px #FF0000)",
            }}
          >
            LEAVE A MARK WITH INKY
          </div>
        </div>
      </section>
    </div>
  );
}