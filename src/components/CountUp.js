"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * CountUp – animates a numeric value from 0 to `end` when it scrolls into view.
 *
 * Supports display strings like "200+", "98%", "5M+", "7+ Years".
 * Respects `prefers-reduced-motion`: shows the final value immediately.
 *
 * Props:
 *  - value  {string}  e.g. "200+", "98%", "5M+", "7+ Years"
 *  - duration {number} animation duration in ms (default: 1800)
 */
export default function CountUp({ value, duration = 1800 }) {
  const [ref, isVisible] = useInView({ threshold: 0.3 });
  const [display, setDisplay] = useState("0");
  const rafRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    // Respect prefers-reduced-motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplay(value);
      hasAnimated.current = true;
      return;
    }

    // Parse the raw number and suffix out of strings like "200+", "5M+", "7+ Years", "98%"
    // Handles: digits, optional decimal, then anything (suffix)
    const match = String(value).match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      hasAnimated.current = true;
      return;
    }

    const end = parseFloat(match[1]);
    const suffix = match[2]; // e.g. "+", "%", "M+", "+ Years"

    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(value); // ensure exact final value
        hasAnimated.current = true;
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, value, duration]);

  return <span ref={ref}>{display}</span>;
}
