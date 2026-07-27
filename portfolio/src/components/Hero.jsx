import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-24"
    >
      <HeroScene />

      {/* legibility gradient so the glowing scene never fights the copy */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(90deg, var(--color-bg) 0%, var(--color-bg) 24%, rgba(6,7,10,0.55) 48%, transparent 66%)",
        }}
      />

      <div className="pointer-events-none absolute inset-4 sm:inset-6 md:inset-10 border border-line rounded-sm hidden sm:block" />
      <div className="pointer-events-none absolute top-8 right-6 md:top-10 md:right-12 mono-label text-[10px] text-ink-faint hidden lg:flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
        model: portfolio.v3 · drag to explore
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mono-label text-[11px] text-accent mb-5 flex items-center gap-2"
          >
            Hey, I'm Saheed
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 mono-label text-xs text-ink-faint"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base text-ink-soft leading-relaxed max-w-xl"
          >
            {profile.punchline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="frame-corners px-6 py-3 bg-accent text-bg font-medium text-sm rounded-full hover:brightness-110 transition-all glow-accent"
            >
              View projects
            </a>
            <a
              href="/Saheed_Arshad_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass glow-hover px-6 py-3 text-ink font-medium text-sm rounded-full"
            >
              Preview CV
            </a>
            <a
              href="/Saheed_Arshad_CV.pdf"
              download
              className="glass glow-hover px-6 py-3 text-ink font-medium text-sm rounded-full"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
