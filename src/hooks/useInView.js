"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useInView – returns [ref, isVisible].
 * Once the element enters the viewport, isVisible is set to true and stays true.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.15]  – how much of the element must be visible
 * @param {string} [options.rootMargin="0px"] – margin around the root
 */
export function useInView({ threshold = 0.15, rootMargin = "0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser doesn't support IntersectionObserver, show immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once only
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
