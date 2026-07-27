import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading tag=" Work" title="Projects" />

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TiltCard maxTilt={3} className="group rounded-2xl">
                <article className="frame-corners glass glow-hover rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="mono-label text-[10px] text-accent mb-2">{p.tag}</div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                        {p.title}
                      </h3>
                      <p className="text-sm text-ink-faint mt-1">{p.subtitle}</p>
                    </div>
                    <div className="mono-label text-[11px] text-signal bg-signal-soft px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                      {p.accuracy}
                    </div>
                  </div>

                  <p className="mt-5 text-ink-soft leading-relaxed max-w-3xl">{p.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="mono-label text-[10px] text-ink-soft border border-line-strong rounded-full px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
