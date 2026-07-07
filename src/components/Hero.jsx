import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Briefcase,
  Mail,
  Download,
  Eye,
  ChevronDown,
} from "lucide-react";

const roles = [
  "Data Science Engineer",
  "AI & ML Engineer",
  "Python Developer",
  "NLP Engineer",
];

const stats = [
  { label: "Projects Built", value: "20+" },
  { label: "Technical Skills", value: "20+" },
  { label: "Certifications", value: "8+" },
  { label: "GitHub Repos", value: "13+" },
];

const socials = [
  {
    icon: GitBranch,
    href: "https://github.com/RutikKanzariya",
    label: "GitHub",
  },
  {
    icon: Briefcase,
    href: "https://www.linkedin.com/in/rutik-kanzariya-81a7a82bb",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:rutikkanjariya@gmail.com", label: "Email" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// function scrollToSection(id) {
//   const el = document.querySelector(id);
//   if (!el) return;
//   window.scrollTo({
//     top: el.getBoundingClientRect().top + window.scrollY - 80,
//     behavior: "smooth",
//   });
// }
function scrollTo(id) {
  const el = document.querySelector(id);
  if (!el) return;

  const navbarHeight = 90; // Adjust if your navbar height changes

  window.scrollTo({
    top: el.offsetTop - navbarHeight,
    behavior: "smooth",
  });
}
const Hero = memo(function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          70,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16 xl:px-24 text-center"
      style={{ paddingTop: "calc(80px + 3rem)" }}
    >
      {/* Gradient orb — static, no JS animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #4f46e5 0%, #22d3ee 50%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-md opacity-60"
              style={{ background: "linear-gradient(135deg, #4f46e5, #22d3ee)" }}
            />
            {/* Photo */}
            <img
              src="/profile.jpg"
              alt="Rutik Kanzariya"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-white/10"
              style={{ boxShadow: "0 0 32px rgba(79,70,229,0.4)" }}
            />
            {/* Online badge */}
            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2 border-dark-900 animate-pulse" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-indigo-500/30 text-indigo-400 text-sm font-medium"
          style={{ background: "rgba(79,70,229,0.1)" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black mb-4 leading-tight"
        >
          Hi, I'm{" "}
          <span
            className="section-title inline-block"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Rutik Kanzariya
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-10"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="typing-cursor">{displayed}</span>
          <span className="text-cyan-400">/&gt;</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turning{" "}
          <span className="text-indigo-400 font-semibold">raw data</span> into{" "}
          <span className="text-cyan-400 font-semibold">
            intelligent solutions
          </span>
          . Passionate about AI, ML and building impactful software that solves
          real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-primary flex items-center gap-2"
          >
            <Eye size={18} /> View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-outline flex items-center gap-2"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-colors hover:-translate-y-1 duration-150"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="glass-card p-4 text-center hover:scale-105 transition-transform duration-200"
            >
              <div
                className="text-3xl font-black text-white mb-1"
                style={{
                  background: "linear-gradient(135deg, #818cf8, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 cursor-pointer text-slate-500 hover:text-slate-300 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
    </section>
  );
});

export default Hero;
