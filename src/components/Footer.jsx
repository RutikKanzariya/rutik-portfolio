import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Briefcase,
  Mail,
  Heart,
  Code2,
  ArrowUp,
} from "lucide-react";

const social = [
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

const navLinks = [
  { label: "About", to: "#about" },
  { label: "Skills", to: "#skills" },
  { label: "Journey", to: "#timeline" },
  { label: "Projects", to: "#projects" },
  { label: "Certifications", to: "#certifications" },
  { label: "Contact", to: "#contact" },
];

const coreStack = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Streamlit",
  "Flutter",
  "PostgreSQL",
  "React",
];

function scrollToSection(id) {
  const el = document.querySelector(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 80,
    behavior: "smooth",
  });
}

const Footer = memo(function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 px-4 md:px-8 lg:px-16">
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #4f46e5, #22d3ee, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #4f46e5, #22d3ee)",
                }}
              >
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Rutik<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Aspiring AI & Data Science Engineer passionate about turning data
              into intelligent solutions.
            </p>
            <div className="flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass-card flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links — native anchors */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.to);
                  }}
                  className="text-slate-400 hover:text-white text-sm cursor-pointer transition-colors hover:translate-x-1 inline-block"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Core Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs border border-white/10 text-slate-400"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Made with{" "}
            <Heart
              size={13}
              className="text-red-400 fill-red-400 animate-pulse"
            />{" "}
            by{" "}
            <span className="text-slate-300 font-medium">Rutik Kanzariya</span>{" "}
            · {new Date().getFullYear()}
          </p>
          <p className="text-slate-600 text-xs"></p>
        </div>
      </div>

      {/* Back to top — native scroll */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 cursor-pointer"
      >
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg"
          style={{
            background: "linear-gradient(135deg, #4f46e5, #22d3ee)",
            boxShadow: "0 0 20px rgba(79,70,229,0.4)",
          }}
        >
          <ArrowUp size={18} />
        </motion.div>
      </button>
    </footer>
  );
});

export default Footer;
