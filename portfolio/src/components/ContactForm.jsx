import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = profile.whatsapp.replace(/[^0-9]/g, "");

    const text = `Hey, I'm ${name}

${message}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden max-w-xl mx-auto mt-10 rounded-[32px] border border-white/10 bg-black/30 backdrop-blur-[32px] shadow-[0_20px_80px_rgba(0,0,0,.55)] p-8"
    >
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="relative z-10 w-full rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-5 py-4 text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-blue-400/60 focus:shadow-[0_0_30px_rgba(59,130,246,.25)] mb-5"
      />

      <textarea
        rows={5}
        required
        placeholder="Write your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="relative z-10 w-full rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-5 py-4 text-white placeholder:text-white/35 outline-none resize-none transition-all duration-300 focus:border-blue-400/60 focus:shadow-[0_0_30px_rgba(59,130,246,.25)] mb-6"
      />

      <button
        type="submit"
        className="group relative z-10 w-full rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl py-4 font-semibold text-white transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,.25)] hover:scale-[1.02]"
      >
        <span className="flex items-center justify-center gap-2">
          Send Message
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ➜
          </span>
        </span>
      </button>
    </motion.form>
  );
}