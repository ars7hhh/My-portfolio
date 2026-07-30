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
        
                    {p.repo && (
                  <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="glow-hover mt-5 inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors border border-line-strong rounded-full px-4 py-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.65.34-1.11.62-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
                      </svg>
                     View Repository
                  </a>
)}
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
