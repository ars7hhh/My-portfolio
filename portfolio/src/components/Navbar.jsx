import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-0"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "glass rounded-full mx-4 md:mx-auto md:max-w-5xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#intro"
          className="font-display font-semibold text-ink text-lg tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
{/* Desktop Navigation */}
<ul className="hidden md:flex items-center gap-8">
  {links.map((l) => (
    <li key={l.href}>
      <a
        href={l.href}
        className="mono-label text-[11px] text-ink-soft hover:text-ink transition-all hover:drop-shadow-[0_0_10px_rgba(47,129,255,0.8)]"
      >
        {l.label}
      </a>
    </li>
  ))}

  <li>
    <a
      href="/Saheed_Arshad_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mono-label text-[11px] text-ink-soft hover:text-ink transition-all hover:drop-shadow-[0_0_10px_rgba(47,129,255,0.8)]"
    >
      Resume
    </a>
  </li>
</ul>

{/* Desktop Right Side */}
<div className="hidden md:flex items-center">
  <span className="glass flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inset-0 rounded-full bg-accent blur-[4px] opacity-70"></span>
      <span className="relative h-2.5 w-2.5 rounded-full bg-accent"></span>
    </span>

    <span className="mono-label text-[10px] text-ink">
      Open to Work
    </span>
  </span>
</div>
        


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

{open && (
  <ul className="md:hidden relative z-50 bg-bg/98 backdrop-blur-2xl border border-line-strong mx-4 mt-2 rounded-2xl px-6 py-4 flex flex-col gap-4 shadow-2xl">
    {links.map((l) => (
      <li key={l.href}>
        <a
          href={l.href}
          onClick={() => setOpen(false)}
          className="mono-label text-xs text-ink-soft hover:text-ink transition-all hover:drop-shadow-[0_0_10px_rgba(47,129,255,0.8)]"
        >
          {l.label}
        </a>
      </li>
    ))}

    {/* Resume */}
    <li>
      <a
        href="/Saheed_Arshad_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(false)}
        className="mono-label text-xs text-ink-soft hover:text-ink transition-all hover:drop-shadow-[0_0_10px_rgba(47,129,255,0.8)]"
      >
        Resume
      </a>
    </li>

    {/* Availability Badge */}
    <li>
      <span className="glass flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 w-fit">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-accent blur-[4px] opacity-70"></span>
          <span className="relative h-2.5 w-2.5 rounded-full bg-accent"></span>
        </span>

        <span className="mono-label text-[10px] text-ink">
          Open to Work
        </span>
      </span>
    </li>
  </ul>
)}
      
    </motion.header>
  );
}