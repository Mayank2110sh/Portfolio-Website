import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(threshold = 6): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("down");
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const updateDirection = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      if (Math.abs(delta) >= threshold) {
        setDirection(delta > 0 ? "down" : "up");
        lastY.current = currentY;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) {
        return;
      }
      ticking.current = true;
      window.requestAnimationFrame(updateDirection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
