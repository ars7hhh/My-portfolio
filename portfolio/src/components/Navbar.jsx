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
        </ul>
{/* Desktop Right Side */}
<div className="hidden md:flex items-center gap-3">

  <span className="glass flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">

    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inset-0 rounded-full bg-accent blur-[4px] opacity-70"></span>
      <span className="relative h-2.5 w-2.5 rounded-full bg-accent"></span>
    </span>

    <span className="mono-label text-[10px] text-ink">
      Available for Opportunities
    </span>

  </span>

  <a
    href="/Saheed_Arshad_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="glass flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl mono-label text-[11px] text-ink transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_18px_rgba(47,129,255,.15)]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12c2.5-4.2 6-6.5 10-6.5S19.5 7.8 22 12c-2.5 4.2-6 6.5-10 6.5S4.5 16.2 2 12Z"/>
      <circle cx="12" cy="12" r="2.8"/>
    </svg>
     Resume
  </a>

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

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden glass mx-4 mt-2 rounded-2xl px-6 py-4 flex flex-col gap-4">
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

          <li>
          <span className="glass flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 w-fit">

  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inset-0 rounded-full bg-accent blur-[4px] opacity-70"></span>
    <span className="relative h-2.5 w-2.5 rounded-full bg-accent"></span>
  </span>


  <span className="mono-label text-[10px] text-ink">
    Available for Opportunities
  </span>
</span>
          </li>

          <li>
          <a
  href="/Saheed_Arshad_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setOpen(false)}
  className="glass flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl mono-label text-[11px] text-ink transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_18px_rgba(47,129,255,.15)]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>

  Resume
</a>
          </li>
        </ul>
      )}
    </motion.header>
  );
}