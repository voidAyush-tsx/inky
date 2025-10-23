"use client";

import Lottie from "lottie-react";
import animationData from "../../public/finger_scan.json"; // Adjust path to your JSON file

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
        style={{ width: '20%', height: '20%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
}