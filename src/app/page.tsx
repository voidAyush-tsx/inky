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
      
      <section className="relative w-full py-16">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/textual_image.png"
            alt="Textual Background"
            width={1215.14}
            height={316.57}
            className="object-cover"
            priority={false}
          />
        </div>
      </section>
    </div>
  );
}