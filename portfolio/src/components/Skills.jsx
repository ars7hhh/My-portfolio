import { motion } from "framer-motion";
import { skillGroups, creativeTools } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import ToolIcon from "./ToolIcon";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading tag=" Stack" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="glass glow-hover rounded-2xl p-6"
            >
              <h3 className="mono-label text-[10px] text-accent mb-4">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                       key={`${g.group}-${item}`}
                    className="glow-hover text-sm text-ink-soft border border-line-strong rounded-full px-3 py-1 hover:text-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (skillGroups.length % 3) * 0.07 }}
            className="glass glow-hover rounded-2xl p-6"
          >
            <h3 className="mono-label text-[10px] text-accent mb-4">
              Creative — Photo &amp; Video Editing
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {creativeTools.map((tool) => (
                <span
                  key={tool.name}
                  className="glow-hover flex items-center gap-2 text-sm text-ink-soft border border-line-strong rounded-full pl-2 pr-3.5 py-1.5 hover:text-ink transition-colors"
                >
                  <span className="w-[22px] h-[22px] rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-white/5">
                    <ToolIcon name={tool.icon} size={18} />
                  </span>
                  {tool.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
