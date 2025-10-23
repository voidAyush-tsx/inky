"use client"

import Image from "next/image";
import { SlantedMarquee } from "./SlantedMarquee";

const MARQUEE_TEXT = "Create {|:#ffffff} Publish {|:#ffffff} Inspire {|:#ffffff} Create {|:#ffffff} Publish {|:#ffffff} Inspire {|:#ffffff} Create {|:#ffffff} Publish {|:#ffffff} Inspire {|:#ffffff}";

export const MarqueeSection = () => (
  <div className="relative">
    <div className="overflow-x-clip flex flex-col items-center z-50 relative">
      <div className="rotate-[8deg] w-[120vw]">
        <SlantedMarquee
          text={MARQUEE_TEXT}
          duration={20}
          scale={1.1}
          direction="left"
          backgroundColor="#000000"
          textColor="#940008"
        />
      </div>
      <div className="rotate-[-8deg] w-[120vw] -translate-y-24">
        <SlantedMarquee
          text={MARQUEE_TEXT}
          duration={20}
          scale={1.1}
          direction="right"
          backgroundColor="#000000"
          textColor="#940008"
        />
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <Image
        src="/bottom-circle.png"
        alt="Background"
        width={1440}
        height={937.5}
        className="object-cover opacity-50"
        priority={false}
      />
    </div>
  </div>
);