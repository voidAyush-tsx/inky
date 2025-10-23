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
      className={`pointer-events-none z-0 ${className}`}
      style={{ opacity }}
    >
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
}