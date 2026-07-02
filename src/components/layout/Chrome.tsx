import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple"
    />
  );
}

export function PageLoader() {
  const [show, setShow] = useState(true);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 700);
    return () => clearTimeout(t);
  }, [pathname]);
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
      className="pointer-events-none fixed inset-0 z-[80] grid place-items-center bg-background"
    >
      <div className="font-display text-2xl font-semibold">
        <span className="text-gradient">Hammad</span>
        <span className="inline-block ml-1 h-3 w-3 rounded-full bg-brand-blue animate-pulse-glow" />
      </div>
    </motion.div>
  );
}
