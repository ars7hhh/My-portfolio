import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setActive(true);
    };
    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-30 pointer-events-none hidden md:block"
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: 420,
        height: 420,
        borderRadius: "9999px",
        background: "radial-gradient(circle, rgba(47,129,255,0.09) 0%, transparent 70%)",
      }}
    />
  );
}
