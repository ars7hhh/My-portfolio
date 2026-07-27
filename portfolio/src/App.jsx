import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import IntroName from "./components/IntroName";
import IntroTagline from "./components/IntroTagline";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientBackground from "./components/AmbientBackground";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <div className="min-h-screen text-ink relative">
      <AmbientBackground />
      <CursorGlow />
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-violet to-cyan origin-left z-[60] opacity-80"
      />
      <Navbar />
      <main>
        <IntroName />
        <IntroTagline />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
