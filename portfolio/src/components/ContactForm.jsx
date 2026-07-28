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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-6 md:p-8 max-w-xl mx-auto mt-10 text-left border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_40px_-12px_rgba(0,0,0,0.7)]"
    >
      <label className="mono-label text-[10px] text-ink-faint block mb-2"></label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-ink text-sm mb-5 outline-none focus:border-white/70 focus:bg-white/10 transition-colors"
      />

      <label className="mono-label text-[10px] text-ink-faint block mb-2"></label>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
        rows={4}
        required
        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-ink text-sm mb-6 outline-none focus:border-white/70 focus:bg-white/10 transition-colors resize-none"
      />

      <button
        type="submit"
        className="w-full text-white font-medium text-sm rounded-full py-3 transition-all border border-white/20 bg-white/[0.06] backdrop-blur-2xl hover:bg-white/[0.12] hover:border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_40px_-14px_rgba(255,255,255,0.4)]"
      >
        Send Message ➤
      </button>
    </motion.form>
  );
}