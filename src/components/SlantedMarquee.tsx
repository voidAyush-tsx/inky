"use client"

import { motion } from "motion/react";
import { useState } from "react";

interface MarqueeProps {
  text: string;
  duration?: number;
  scale?: number;
  direction?: 'left' | 'right';
  backgroundColor?: string;
  textColor?: string;
  translateY?: number;
}

export const SlantedMarquee = ({ 
  text, 
  duration = 20, 
  scale = 1.1,
  direction = 'left',
  backgroundColor = '#000000',
  textColor = '#940008',
  translateY = 0
}: MarqueeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden whitespace-nowrap py-4 border-2 border-white"
      style={{
        backgroundColor,
        transform: `translateY(${translateY}px) scale(${scale})`,
        boxShadow: `0 10px 40px ${backgroundColor}33`,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-5">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              x: direction === 'left' ? [0, '-100%'] : ['-100%', '0%'],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
            style={{
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
            className="shrink-0"
          >
            <span 
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium tracking-tight"
              style={{ color: textColor }}
              dangerouslySetInnerHTML={{ 
                __html: text.replace(
                  /\{([^}]+):([^}]+)\}/g, 
                  `<span style="color: $2;">$1</span>`
                )
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};