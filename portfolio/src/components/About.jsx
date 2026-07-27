import { motion } from "framer-motion";
import { profile, stats, languages } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import PhotoFrame from "./PhotoFrame";
import headshot from "../assets/saheed.png";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading tag="About" title="Profile" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <PhotoFrame
              src={headshot}
              alt="Saheed Arshad"
              label=""
              className="max-w-xs mx-auto md:mx-0"
            />
          </motion.div>

          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-lg md:text-xl text-ink-soft leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass glow-hover rounded-2xl p-4"
                >
                  <div className="font-display text-3xl md:text-4xl font-semibold text-ink">
                    {s.value}
                    <span className="text-accent">{s.suffix}</span>
                  </div>
                  <div className="mono-label text-[10px] text-ink-faint mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 pt-8 border-t border-line flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="mono-label text-[10px] text-ink-faint">Languages</span>
              {languages.map((lang, i) => (
                <span key={lang} className="text-sm text-ink-soft">
                  {lang}
                  {i < languages.length - 1 && <span className="text-line-strong ml-3">/</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
