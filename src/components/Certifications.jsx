import React, { memo } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    color: "from-orange-500/20 to-yellow-500/10 border-orange-500/30",
    icon: "☁️",
    link: "https://www.credly.com/badges/b26b2539-a659-4362-a411-42491fb1a834",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2026",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    icon: "📊",
    link: "https://www.linkedin.com/posts/rutik-kanzariya-81a7a82bb_data-analytics-activity-7404763446157795328-u_Bl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzTaJYBNPoAhCCMfCHIsCUuAGbNe0jitMY",
  },
  {
    title: "Foundation Course on Green Skills & AI",
    issuer: "Edunet Foundation · Shell India · AICTE",
    year: "2025",
    color: "from-green-500/20 to-lime-500/10 border-green-500/30",
    icon: "🌿",
    link: "https://www.linkedin.com/posts/rutik-kanzariya-81a7a82bb_skills4future-skills4future-greenskills-activity-7351648980570652675-oAqa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzTaJYBNPoAhCCMfCHIsCUuAGbNe0jitMY",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Certifications = memo(function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Continuous learning — validated by globally recognized platforms
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
          {certs.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className={`glass-card bg-gradient-to-br ${cert.color} p-6 flex flex-col gap-4 border relative overflow-hidden group hover:scale-[1.03] hover:-translate-y-1 transition-transform duration-200`}
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 text-7xl flex items-center justify-center pointer-events-none">
                {cert.icon}
              </div>

              <div className="text-4xl">{cert.icon}</div>

              <div>
                <h3 className="text-white font-bold text-base leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Award size={14} />
                  <span className="text-sm">{cert.year}</span>
                </div>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium hover:bg-indigo-500/40 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <ExternalLink size={13} />
                    View
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-slate-500 border border-white/10 text-xs font-medium cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Certifications;
