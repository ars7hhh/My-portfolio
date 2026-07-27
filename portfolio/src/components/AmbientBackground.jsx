import { useScroll, useTransform, motion } from "framer-motion";

export default function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-bg" />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -left-40 w-[38rem] h-[38rem] rounded-full opacity-30 blur-[110px]"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,_var(--color-accent)_0%,_transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-56 w-[44rem] h-[44rem] rounded-full opacity-25 blur-[130px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,_var(--color-violet)_0%,_transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/4 w-[34rem] h-[34rem] rounded-full opacity-20 blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,_var(--color-cyan)_0%,_transparent_70%)]" />
      </motion.div>

      {/* fine noise-like grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
