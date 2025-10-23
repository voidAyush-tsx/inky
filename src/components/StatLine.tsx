"use client"

import { motion } from "motion/react";
import { AnimatedCounter } from "./animated_counter";

interface StatLineProps {
  pathD: string;
  circleX: number;
  circleY: number;
  count: number;
  label: string;
  position: 'top' | 'bottom';
}

export const StatLine = ({ pathD, circleX, circleY, count, label, position }: StatLineProps) => {
  const isTop = position === 'top';
  
  return (
    <span>
      <svg 
        width={isTop ? "281" : "318"} 
        height="83" 
        viewBox={isTop ? "0 0 281 83" : "0 0 318 83"}
        fill="none" 
        className={`absolute right-1/12 ${isTop ? 'top-1/4' : 'bottom-1/5'}`}
      >
        <motion.path 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
          d={pathD}
          stroke="#777777" 
          strokeWidth="0.952405"
        />
        <g filter={`url(#filter0_f_${isTop ? '182' : '185'})`}>
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.25, ease: "easeInOut", delay: 0.5 }}
            cx={circleX} 
            cy={circleY} 
            r="8.57165" 
            fill="white"
          />
        </g>
        <motion.circle 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.25, ease: "easeInOut", delay: 0.5 }}
          cx={circleX} 
          cy={circleY} 
          r="6.66684" 
          fill="#D9D9D9"
        />
        <defs>
          <filter 
            id={`filter0_f_${isTop ? '182' : '185'}`}
            x={circleX - 22.858} 
            y={circleY - 22.858} 
            width="45.7167" 
            height="45.7157" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="7.14304" result="effect1_foregroundBlur"/>
          </filter>
        </defs>
      </svg>
      
      <span className="flex flex-col items-start justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className={`absolute ${isTop ? 'right-8 top-1/3' : 'right-10 bottom-1/3'} text-white font-inky-header text-xl sm:text-2xl md:text-3xl font-bold`}
        >
          <AnimatedCounter target={count} />+
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className={`absolute ${isTop ? 'right-0 top-2/5 translate-y-3' : 'right-1 bottom-1/3 translate-y-4'} text-[#A4A4A4] font-inky-body text-[10px] sm:text-xs font-normal`}
        >
          {label}
        </motion.span>
      </span>
    </span>
  );
};