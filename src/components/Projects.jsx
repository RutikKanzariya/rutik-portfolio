import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, Star, GitMerge } from "lucide-react";

const filters = ["All", "AI/ML", "Deep Learning", "Web"];

const projects = [
  {
    id: 1,
    title: "MNIST Digit Classification",
    description:
      "Built an Artificial Neural Network (ANN) model to classify handwritten digits from the MNIST dataset. Developed an interactive Streamlit application for real-time digit prediction.",
    tags: ["AI/ML", "Deep Learning"],
    tech: ["Python", "TensorFlow", "Keras", "ANN", "Streamlit"],
    github: "https://github.com/RutikKanzariya/ANN-MNIST-Digit-Classification",
    color: "from-indigo-500/20 to-purple-500/10",
    badge: "🏆 Featured",
    accuracy: "95.2%",
  },
  {
    id: 2,
    title: "Heart Disease Prediction",
    description:
      "Machine Learning project that predicts the likelihood of heart disease using patient health data. Includes data preprocessing, feature engineering, model training, and evaluation.",
    tags: ["AI/ML", "Healthcare"],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/RutikKanzariya/heart-disease-predictor",
    demo: "https://heart-disease-predictorgit-7fv6giv3qtuv5uh48vew58.streamlit.app",
    color: "from-red-500/20 to-pink-500/10",
    badge: "❤️ Healthcare",
  },
  {
    id: 3,
    title: "Ford Car Price Prediction",
    description:
      "Regression-based machine learning model for predicting used Ford car prices using historical vehicle data with preprocessing and feature engineering.",
    tags: ["AI/ML", "Regression"],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/RutikKanzariya/ford-car-price-prediction",
    demo: "",
    color: "from-green-500/20 to-emerald-500/10",
    badge: "🚗 Regression",
  },
  {
    id: 4,
    title: "Student Performance Prediction",
    description:
      "Machine Learning model that predicts student academic performance using demographic and educational features with complete data analysis and visualization.",
    tags: ["AI/ML", "Education"],
    tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    github: "https://github.com/RutikKanzariya/Student-Performance",
    demo: "https://student-performance-ceswav6lfmucggd37qgkyi.streamlit.app/",
    color: "from-blue-500/20 to-cyan-500/10",
    badge: "🎓 Education",
  },

  {
    id: 6,
    title: "Weather Forecast Application",
    description:
      "Built a weather forecasting application using Python and Weather API to fetch real-time weather data. Developed an interactive Streamlit interface and deployed the application for online access.",
    tags: ["Python", "API"],
    tech: ["Python", "Streamlit", "Weather API", "Requests"],
    github: "https://github.com/RutikKanzariya/Weather_project",
    demo: "https://weatherproject-ewz6jmvujv7wspgmb7nsvz.streamlit.app/",
    color: "from-sky-500/20 to-blue-500/10",
    badge: "🌦️ Streamlit",
  },
  {
    id: 7,
    title: "Currency Converter",
    description:
      "Developed a real-time currency converter using Python and Exchange Rate API. Built an interactive Streamlit application that converts currencies using live exchange rates.",
    tags: ["Python", "API"],
    tech: ["Python", "Streamlit", "REST API", "Requests"],
    github: "https://github.com/RutikKanzariya/Currency_Converter",
    demo: "https://currencyconverter-ogbsjlatjt6pzjh7xq5hsd.streamlit.app/",
    color: "from-teal-500/20 to-cyan-500/10",
    badge: "💱 Streamlit",
  },
  {
    id: 8,
    title: "Energy Calculator",
    description:
      "Designed and deployed an interactive Energy Calculator using Python and Streamlit to estimate energy consumption and electricity usage through a simple web interface.",
    tags: ["Python", "Web App"],
    tech: ["Python", "Streamlit"],
    github: "https://github.com/RutikKanzariya/Energy-calculator",
    demo: "", // Add your Streamlit URL here
    color: "from-yellow-500/20 to-orange-500/10",
    badge: "⚡ Streamlit",
  },
  {
    id: 9,
    title: "Rock Paper Scissors Game",
    description:
      "Developed an interactive Rock Paper Scissors game using JavaScript with dynamic game logic, score tracking, and responsive user interface.",
    tags: ["Web"],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RutikKanzariya/StonePaperScissors",
    demo: "",
    color: "from-purple-500/20 to-pink-500/10",
    badge: "🎮 JavaScript",
  },
  {
    id: 10,
    title: "Tic Tac Toe Game",
    description:
      "Built a responsive Tic Tac Toe game using JavaScript featuring game state management, winner detection, draw handling, and restart functionality.",
    tags: ["Web"],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RutikKanzariya/Tic-Tac-Toe-Game",
    demo: "", // Add live URL if deployed
    color: "from-cyan-500/20 to-blue-500/10",
    badge: "❌ JavaScript",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const Projects = memo(function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Real-world solutions built with passion — from idea to deployment
          </p>
        </motion.div>

        {/* Filter buttons — plain buttons, only active state uses motion */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                activeFilter === f
                  ? "border-indigo-500 text-white bg-indigo-500/20"
                  : "border-white/10 text-slate-400 hover:text-white bg-white/5 hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid — removed layout prop (expensive), simpler fade transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className={`project-card glass-card bg-gradient-to-br ${project.color} border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5 transition-transform duration-200`}
              >
                {/* Glow hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(79,70,229,0.15) 0%, transparent 70%)",
                  }}
                />

                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 text-slate-400"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-3 text-slate-500 text-xs">
                      <span className="flex items-center gap-1">
                        <Star size={12} />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitMerge size={12} />
                        {project.forks || 0}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.accuracy && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-slate-500">Accuracy:</span>
                      <span className="text-sm font-bold text-green-400">
                        {project.accuracy}
                      </span>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs text-slate-400 border border-white/10"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.demo ? "flex-1" : "w-full"} flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-slate-300 border border-white/10 hover:text-white hover:border-white/20 transition-colors`}
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <GitBranch size={15} /> Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border border-indigo-500/40 text-indigo-400 hover:text-white hover:bg-indigo-500/20 transition-colors"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/rutikkanzariya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GitBranch size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Projects;
