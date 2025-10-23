"use client"

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  delay?: number;
}

export const AnimatedCounter = ({ target, delay = 1.25 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        if (current <= target) {
          setCount(current);
          current++;
        } else {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, target, delay]);

  return <span ref={ref}>{count}</span>;
};