import { motion } from "framer-motion";

export default function SectionHeading({ tag, title, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10 md:mb-14"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="mono-label text-[11px] text-accent glass px-2.5 py-1 rounded-full">
          {tag}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 id={id} className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
    </motion.div>
  );
}
