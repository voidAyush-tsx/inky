"use client";

import Lottie from "lottie-react";
import animationData from "../../public/finger_scan.json";

interface LottieBackgroundProps {
  className?: string;
  speed?: number;
  opacity?: number;
}

export default function LottieBackground({ 
  className = "", 
  speed = 1,
  opacity = 0.5 
}: LottieBackgroundProps) {
  return (
    <div 
      className={`pointer-events-none z-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center ${className}`}
      style={{ opacity }}
    >
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ 
          width: '100%', 
          height: '100%',
          maxWidth: '100%', 
          maxHeight: '100%',
        }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
}