import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7L22 6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.62 1.4 5.12L2 22l5.15-1.5a9.85 9.85 0 0 0 4.89 1.3h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.6 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.14-.96-.31-1.65-.6-2.9-1.25-4.78-4.17-4.93-4.37-.15-.2-1.18-1.56-1.18-2.98 0-1.42.75-2.11 1.02-2.4.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.05.18-.18.75-.87.95-1.17.2-.3.4-.24.66-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.13.07.75-.17 1.43z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/ars7hhh",
    href: profile.github,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.65.34-1.11.62-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saheed-arshad",
    href: profile.linkedin,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452z" />
      </svg>
    ),
  },
];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
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

export default function Contact() {
  return (
    <section
  id="contact"
  className="relative min-h-[100dvh] flex flex-col justify-center py-24 md:py-32 overflow-hidden pb-[env(safe-area-inset-bottom)]"
>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(47,129,255,0.4) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mono-label text-[11px] text-accent mb-6 flex items-center justify-center gap-2"
        >
        </motion.div>

        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-display font-semibold tracking-tight leading-[1.02] text-[13vw] sm:text-[9vw] md:text-[6.5vw] text-gradient"
        >
          {"Let's Connect".split(" ").map((w, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.22em] last:mr-0 pb-2 align-bottom">
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-ink-soft max-w-xl mx-auto"
        >
          Open to Data Science and Machine Learning roles and collaborations.
          Feel free to reach out through any of the channels below.
        </motion.p>

        <div className="mt-14 flex items-center justify-center gap-5">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={l.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass glow-hover w-14 h-14 rounded-full flex items-center justify-center text-ink-soft hover:text-accent transition-colors"
            >
              {l.icon}
            </motion.a>
          ))}
        </div>
        <ContactForm />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/Saheed_Arshad_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="glass glow-hover inline-block px-6 py-3 text-ink font-medium text-sm rounded-full"
          >
            Preview CV
          </a>
          <a
            href="/Saheed_Arshad_CV.pdf"
            download
            className="frame-corners inline-block px-6 py-3 bg-accent text-bg font-medium text-sm rounded-full hover:brightness-110 transition-all glow-accent"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
