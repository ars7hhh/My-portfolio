import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phrase = "Let's know more about me";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const word = {
  hidden: { y: "60%", opacity: 0, filter: "blur(8px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function IntroTagline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const blurPx = useTransform(scrollYProgress, [0, 0.85], [0, 14]);
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);
  const inOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const inY = useTransform(scrollYProgress, [0, 0.35], [40, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.6], [0.7, 0]) }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[30rem] h-[30rem] md:w-[44rem] md:h-[44rem] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(47,129,255,0.4) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, scale, filter }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <motion.div
          style={{ opacity: inOpacity, y: inY }}
          className="mono-label text-[11px] text-ink-faint mb-6"
        >
          The person behind the models
        </motion.div>

        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-display font-semibold tracking-tight leading-[1.05] text-[9vw] sm:text-[6.5vw] md:text-[4.8vw] text-ink"
        >
          {phrase.split(" ").map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0 pb-1 align-bottom">
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.p
          style={{ opacity: inOpacity, y: inY }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-ink-soft text-base md:text-lg max-w-xl mx-auto"
        >
          Scroll down for the profile, the stack, the projects, and everything that got me here.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="mono-label text-[9px] text-ink-faint"></span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-ink-faint to-transparent"
        />
      </motion.div>
    </section>
  );
}
