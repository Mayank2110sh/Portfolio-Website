import { useEffect, useMemo, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";

interface DirectionalRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function DirectionalReveal({
  children,
  className,
  delay = 0,
}: DirectionalRevealProps) {
  const direction = useScrollDirection();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", amount: 0.2 });
  const controls = useAnimation();

  const variants = useMemo(
    () => ({
      hiddenDown: { opacity: 0, y: 48, scale: 0.98, filter: "blur(4px)" },
      hiddenUp: { opacity: 0, y: -48, scale: 0.98, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    }),
    [],
  );

  const hasAnimated = useRef(false);
  // Trigger entry animation only once when element first enters viewport
  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      const from = direction === "down" ? "hiddenDown" : "hiddenUp";
      void controls.set(from);
      void controls.start("visible", {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      });
      hasAnimated.current = true;
    }
  }, [isInView, direction, delay, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      animate={controls}
      initial={direction === "down" ? "hiddenDown" : "hiddenUp"}
    >
      {children}
    </motion.div>
  );
}
