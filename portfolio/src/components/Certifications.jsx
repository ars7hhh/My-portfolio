import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, achievements } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import PhotoFrame from "./PhotoFrame";

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading tag="Credentials" title="Certifications & Achievements" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div>
            <h3 className="mono-label text-[11px] text-ink-faint mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -16, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="glass glow-hover flex items-start justify-between gap-4 rounded-2xl px-5 py-4"
                >
                  <div>
                    <div className="text-sm font-medium text-ink">{c.name}</div>
                    <div className="text-xs text-ink-faint mt-0.5">{c.authority}</div>
                  </div>
                  <span className="mono-label text-[10px] text-accent shrink-0">{c.date}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mono-label text-[11px] text-ink-faint mb-6">Achievements & Activities</h3>
            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="text-sm text-ink-soft leading-relaxed flex gap-3"
                >
                  <span className="mono-label text-[10px] text-signal shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {a}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mono-label text-[11px] text-ink-faint mb-6">Certificate Gallery</h3>
          <p className="text-xs text-ink-faint mb-6 -mt-3">Click a certificate to view it full-size.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {certifications.map((c, i) => (
              <motion.button
                key={c.name}
                type="button"
                onClick={() => setLightbox(c)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="text-left cursor-zoom-in"
              >
                <PhotoFrame
                  src={c.image}
                  alt={c.name}
                  aspect="aspect-[4/3]"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              src={lightbox.image}
              alt={lightbox.name}
              className="max-w-4xl w-full rounded-2xl border border-line-strong shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
