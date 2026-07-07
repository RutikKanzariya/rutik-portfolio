import React, { memo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, MapPin } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech — CSE | CGPA: 8.36",
  },
  { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, INDIA " },
  { icon: Target, label: "Focus", value: "AI, ML & Data Science" },
  { icon: Heart, label: "Passion", value: "Building AI-powered solutions" },
];

const exploring = [
  "LLMs",
  "RAG Pipelines",
  "Transformers",
  "LangChain",
  "MLOps",
];

const About = memo(function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            A little bit about who I am and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm{" "}
              <span className="text-indigo-400 font-semibold">
                Rutik Kanzariya
              </span>
              , an aspiring AI &amp; Data Science Engineer passionate about
              building intelligent solutions from data. My interests span{" "}
              <span className="text-cyan-400">
                Machine Learning, Deep Learning, NLP
              </span>
              , and modern AI technologies.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I enjoy developing end-to-end ML applications — from data
              preprocessing and model training to deployment using{" "}
              <span className="text-cyan-400">
                Python, Streamlit, Flask/FastAPI, Docker, and AWS
              </span>
              . I'm committed to continuous learning, exploring research, and
              building real-world projects that solve meaningful problems.
            </p>
          </motion.div>

          {/* Right — highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card p-5 space-y-3 hover:scale-[1.03] hover:-translate-y-1 transition-transform duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(79,70,229,0.3),rgba(34,211,238,0.2))",
                  }}
                >
                  <Icon size={20} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}

            {/* Full-width card */}
            <div className="col-span-2 glass-card p-5">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">
                Currently Exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {exploring.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30 text-cyan-400"
                    style={{ background: "rgba(34,211,238,0.08)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;
