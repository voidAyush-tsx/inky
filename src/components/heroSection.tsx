"use client"

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import LottieBackground from "./finger_scan";
import { StatLine } from "./StatLine";

export const HeroSection = () => (
  <section className="flex-1 w-full max-w-7xl mx-auto py-32">
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Blurred background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-[#972323] opacity-20 blur-3xl" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#ffffff05]" />
      </div>

      {/* Stats Lines */}
      <StatLine 
        pathD="M0 0.476562H159.052L189.529 60.0019H259.53"
        circleX={258.103}
        circleY={59.5257}
        count={150}
        label="Articles published"
        position="top"
      />
      
      <StatLine 
        pathD="M0 81.9082H195.719L226.196 22.3829H296.198"
        circleX={294.77}
        circleY={22.858}
        count={50}
        label="Books published"
        position="bottom"
      />

      {/* Lottie animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <LottieBackground opacity={0.8} />
      </div>
    </div>

    {/* Hero Text */}
    <motion.div
      className="absolute flex flex-col items-start justify-center -translate-y-64 -translate-x-1/12 max-w-lg text-left"
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <motion.div
        className="font-inky-header text-5xl leading-snug"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        Where Storytelling Comes Alive
      </motion.div>
      <motion.div
        className="font-inky-body text-xl text-[#E00C17] mt-2"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Publishing, design, and multimedia solutions for creators who want to leave a mark
      </motion.div>
      <motion.div
        className="flex items-end gap-2 font-kiwi-maru text-lg text-[#A4A4A4] mt-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
      >
        our services
        <ArrowRight className="w-5" />
      </motion.div>
    </motion.div>
  </section>
);