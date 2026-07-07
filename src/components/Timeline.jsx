import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Brain,
  Cpu,
  Layers,
  Smartphone,
  DatabaseZap,
  Trophy,
} from "lucide-react";
const events = [
  {
    year: "2023",
    icon: BookOpen,
    title: "Started Computer Science & Engineering(B.Tech - (CS&E))",
    description:
      "Built a strong foundation in computer science by learning C programming, Data Structures & Algorithms, Database Management Systems (DBMS), and Computer Networks.",
    tags: ["C", "DSA", "DBMS", "Computer Networks"],
    side: "left",
  },

  {
    year: "2024",
    icon: Code,
    title: "Programming & Core Computer Science",
    description:
      "Expanded my programming skills with C++, Java, Object-Oriented Programming, Operating Systems, Python, SQL, and PostgreSQL while strengthening problem-solving abilities.",
    tags: [
      "Python",
      "Java",
      "C++",
      "OOP",
      "Operating Systems",
      "SQL",
      "PostgreSQL",
    ],
    side: "right",
  },

  {
    year: "2025",
    icon: Brain,
    title: "Machine Learning Journey",
    description:
      "Explored supervised and unsupervised learning, performed exploratory data analysis, and built regression, classification, and clustering models using Scikit-learn.",
    tags: [
      "Machine Learning",
      "Scikit-learn",
      "EDA",
      "Regression",
      "Classification",
      "Clustering",
    ],
    side: "left",
  },

  {
    year: "2026",
    icon: Cpu,
    title: "Deep Learning, AI Projects & Deployment",
    description:
      "Learned Deep Learning with TensorFlow, Keras, and PyTorch. Built AI applications, developed REST APIs using FastAPI, and deployed projects using Streamlit and Vercel.",
    tags: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "CNN",
      "RNN",
      "Transformers",
      "FastAPI",
      "REST API",
      "Streamlit",
      "Vercel",
    ],
    side: "right",
  },

  {
    year: "Now",
    icon: Trophy,
    title: "LLMs & MLOps Exploration",
    description:
      "Currently learning Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), LangChain, MLflow, Docker, and MLOps to build production-ready AI systems.",
    tags: ["LLMs", "LangChain", "RAG", "MLflow", "Docker", "MLOps"],
    side: "left",
    highlight: true,
  },
];

const Timeline = memo(function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Academic Journey</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            My learning story — from first lines of code to building full AI
            systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(180deg, #4f46e5, #22d3ee)" }}
          />

          <div className="space-y-12">
            {events.map((event, i) => {
              const Icon = event.icon;
              const isLeft = event.side === "left";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                >
                  {/* Card — CSS hover only (no whileHover rotate!) */}
                  <div className="md:w-5/12 w-full">
                    <div
                      className={`glass-card p-6 hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-200 ${event.highlight ? "border-indigo-500/40" : ""}`}
                      style={
                        event.highlight
                          ? { boxShadow: "0 0 30px rgba(79,70,229,0.2)" }
                          : {}
                      }
                    >
                      {event.highlight && (
                        <span
                          className="inline-flex items-center gap-1 text-xs font-medium text-green-400 border border-green-500/30 rounded-full px-3 py-1 mb-3"
                          style={{ background: "rgba(74,222,128,0.1)" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current Focus
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/10 text-slate-400"
                            style={{ background: "rgba(255,255,255,0.04)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center icon — removed whileHover rotate 360 (very expensive!) */}
                  <div className="md:w-2/12 flex justify-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center z-10 border border-indigo-500/40 hover:scale-110 transition-transform duration-200"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(79,70,229,0.3), rgba(34,211,238,0.2))",
                      }}
                    >
                      <Icon size={20} className="text-indigo-400" />
                      <span className="text-[10px] text-cyan-400 font-bold mt-0.5">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="md:w-5/12 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Timeline;
