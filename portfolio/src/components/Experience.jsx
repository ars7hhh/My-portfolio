import { motion } from "framer-motion";
import { experience, education } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import eraCertImg from "../assets/certs/era_cert.png";
function TimelineItem({ start, end, title, subtitle, detail, points, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8 pb-10 border-l border-line last:pb-0"
    >
      <span className="absolute -left-[6px] top-1.5 w-[11px] h-[11px] rounded-full bg-accent shadow-[0_0_12px_2px_rgba(47,129,255,0.7)]" />
      <div className="mono-label text-[10px] text-ink-faint mb-1.5">
        {start}
        {end ? ` — ${end}` : ""}
      </div>
      <h4 className="font-display text-lg font-semibold text-ink">{title}</h4>
      <p className="text-sm text-ink-soft mt-0.5">{subtitle}</p>
      {detail && <p className="text-sm text-accent mt-0.5">{detail}</p>}
      {points && (
        <ul className="mt-3 space-y-2">
          {points.map((pt, i) => (
            <li key={i} className="text-sm text-ink-soft leading-relaxed flex gap-2">
              <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading tag="Timeline" title="Experience & Education" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="mono-label text-[11px] text-ink-faint mb-8">Experience</h3>
            {experience.map((e, i) => (
             <div key={e.company}>
              <TimelineItem
                key={e.company}
                start={e.start}
                end={e.end}
                title={e.role}
                subtitle={`${e.company} · ${e.location}`}
                points={e.points}
                index={i}
              />
              <a
                href={eraCertImg}
                target="_blank"
                rel="noreferrer"
                className="mono-label text-[10px] text-accent hover:underline inline-block -mt-8 ml-8"
               >
      View certificate →
    </a>
  </div>
))}
          </div>

          <div>
            <h3 className="mono-label text-[11px] text-ink-faint mb-8">Education</h3>
            {education.map((ed, i) => (
              <TimelineItem
                key={ed.school}
                start={ed.start}
                end={ed.end}
                title={ed.school}
                subtitle={ed.degree}
                detail={ed.detail}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
