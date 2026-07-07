import React, { memo } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "🥇 1st Place – Cipher Hunt @ CyberShadez 2026",
    description:
      "Secured 1st place in the Cipher Hunt cryptography competition at GLS University, solving timed decryption challenges with analytical thinking and teamwork.",
    detail: "CyberShadez 2026 · GLS University",
    date: "2026",
    icon: "🏆",
    badge: "Winner",
    color: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    link: null,
  },

  {
    title: "HackInovate 2025",
    description:
      "Participated in a 2-day hackathon with a team of 4, building an end-to-end solution under pressure — strengthening collaboration, critical thinking, and real-world problem-solving skills.",
    detail: "Adani Institute of Digital Technology Management",
    date: "Jan 2025",
    icon: "🚀",
    badge: "Hackathon",
    color: "from-violet-500/20 to-purple-500/10 border-violet-500/30",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    link: null,
  },
  {
    title: "Production-Ready ML Portfolio",
    description:
      "Developed and deployed 4 production-ready end-to-end Machine Learning projects with complete pipelines, responsive user interfaces, comprehensive documentation, and public GitHub repositories.",
    detail: "GitHub • Streamlit • Machine Learning • Python",
    date: "2026",
    icon: "💻",
    badge: "Portfolio",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    link: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Achievements = memo(function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Achievements</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Milestones that mark my growth — earned through effort and curiosity
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`glass-card bg-gradient-to-br ${item.color} p-6 flex flex-col gap-4 border relative overflow-hidden group hover:scale-[1.03] hover:-translate-y-1 transition-transform duration-200`}
            >
              {/* Watermark icon */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 text-7xl flex items-center justify-center pointer-events-none select-none">
                {item.icon}
              </div>

              {/* Top row: emoji + badge */}
              <div className="flex items-start justify-between">
                <span className="text-4xl">{item.icon}</span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-bold text-base leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="text-slate-500 text-xs font-medium">
                  {item.detail}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Trophy size={13} />
                  <span className="text-xs">{item.date}</span>
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium hover:bg-indigo-500/40 hover:text-white transition-all duration-200"
                  >
                    <ExternalLink size={12} />
                    View
                  </a>
                ) : (
                  <div className="flex items-center gap-1 text-yellow-400/70">
                    <Star size={12} />
                    <span className="text-xs font-medium text-slate-500">
                      Earned
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Achievements;
