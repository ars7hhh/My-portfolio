import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/portfolioData";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.4 },
  },
};

const letter = {
  hidden: { y: "115%", opacity: 0, filter: "blur(6px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function IntroName() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const blurPx = useTransform(scrollYProgress, [0, 0.85], [0, 14]);
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = profile.name.split(" ");

  return (
    <section
      id="intro"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center py-[env(safe-area-inset-top)] px-4"
    >
      <motion.div
        style={{ opacity: orbOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[36rem] h-[36rem] md:w-[52rem] md:h-[52rem] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(47,129,255,0.55) 0%, rgba(99,169,255,0.32) 45%, transparent 72%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, scale, filter }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mono-label text-[11px] md:text-xs text-accent mb-6 flex items-center gap-2"
        >
        </motion.span>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={profile.name}
          className="font-display font-semibold tracking-tight leading-[0.95] text-[13vw] sm:text-[10vw] md:text-[11vw] text-gradient"
        >
          {words.map((word, wi) => (
            <span key={wi} className="block sm:inline-block overflow-hidden pb-2 sm:mr-[0.28em] last:mr-0 align-bottom">
              <span className="inline-flex">
                {word.split("").map((ch, ci) => (
                  <motion.span key={ci} variants={letter} className="inline-block">
                    {ch}
                  </motion.span>
                ))}
              </span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-sm md:text-base text-ink-soft font-medium max-w-xl mx-auto leading-relaxed"
        >
          Computer Science Graduate specializing in Data Science | AI &amp; ML.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.9 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="mono-label text-[9px] text-ink-faint">scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-ink-faint to-transparent"
        />
      </motion.div>
    </section>
  );
}