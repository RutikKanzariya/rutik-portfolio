import React, { useState, memo } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    emoji: "💻",
    color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30",
    textColor: "text-indigo-400",
    skills: [
      { name: "Python", level: 92 },

      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "C", level: 80 },
      { name: "C++", level: 70 },
      { name: "JAVA", level: 70 },
    ],
  },
  {
    title: "AI & Machine Learning",
    emoji: "🤖",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    textColor: "text-cyan-400",
    skills: [
      { name: "Artificial Intelligence", level: 85 },
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 82 },
      { name: "NLP", level: 83 },
      { name: "Transformers", level: 78 },
    ],
  },
  {
    title: "Data & Databases",
    emoji: "📊",
    color: "from-green-500/20 to-emerald-500/10 border-green-500/30",
    textColor: "text-green-400",
    skills: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 92 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 84 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools & Frameworks",
    emoji: "🛠️",
    color: "from-orange-500/20 to-yellow-500/10 border-orange-500/30",
    textColor: "text-orange-400",
    skills: [
      { name: "TensorFlow", level: 82 },
      { name: "Git & GitHub", level: 88 },
      { name: "Keras", level: 82 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "PyTorch", level: 78 },
      { name: "Streamlit", level: 85 },
      { name: "Scikit-learn", level: 88 },
      { name: "Google Colab", level: 85 },
    ],
  },
  {
    title: "Computer Science",
    emoji: "💡",
    color: "...",
    textColor: "...",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Object-Oriented Programming", level: 88 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 75 },
      { name: "Computer Network", level: 75 },
    ],
  },
];

const techBadges = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Keras",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "PostgreSQL",
  "MongoDB",
  "SQL",

  "JavaScript",
  "React",
  "HTML/CSS",

  "Streamlit",
  "Git",
  "GitHub",
  "Jupyter",
  "VS Code",
  "Google Colab",
];

// Memoized skill bar — no Framer Motion, pure CSS transition
const SkillBar = memo(function SkillBar({ name, level, color }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className={`${color} font-semibold`}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #4f46e5, #22d3ee)" }}
        />
      </div>
    </div>
  );
});

const Skills = memo(function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            A snapshot of my technical toolkit built through projects and
            continuous learning
          </p>
        </motion.div>

        {/* Category tabs — plain buttons, no motion */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? "border-indigo-500 text-white bg-indigo-500/20"
                  : "border-white/10 text-slate-400 hover:text-white hover:border-white/20 bg-white/5"
              }`}
            >
              {cat.emoji} {cat.title}
            </button>
          ))}
        </div>

        {/* Active category skill bars */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`glass-card p-8 mb-16 border bg-gradient-to-br ${categories[active].color}`}
        >
          <h3
            className={`text-xl font-bold mb-6 ${categories[active].textColor}`}
          >
            {categories[active].emoji} {categories[active].title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {categories[active].skills.map((skill) => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={categories[active].textColor}
              />
            ))}
          </div>
        </motion.div>

        {/* Tech badge cloud — single container animation, CSS hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-slate-300 mb-6">
            Full Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="skill-badge border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:scale-105 hover:-translate-y-0.5 transition-transform duration-150"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Skills;
