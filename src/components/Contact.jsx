import React, { useState, useEffect } from "react";

// EmailJS credentials (public/client-side — safe to commit)
const EMAILJS_SERVICE_ID  = "service_jfxoid7";
const EMAILJS_TEMPLATE_ID = "template_xzxcb56";
const EMAILJS_PUBLIC_KEY  = "AfJAvXRBFlNizz1Dr";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Briefcase,
  GitBranch,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rutikkanjariya@gmail.com",
    href: "mailto:rutikkanjariya@gmail.com",
    color: "text-indigo-400",
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "linkedin.com/in/rutik-kanzariya",
    href: "https://www.linkedin.com/in/rutik-kanzariya-81a7a82bb",
    color: "text-blue-400",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/rutik-kanzariya",
    href: "https://github.com/RutikKanzariya",
    color: "text-slate-300",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, Gujarat, India 🇮🇳",
    href: null,
    color: "text-green-400",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        }
      );
      setStatus("success");
      setTimeout(() => {
        setForm({ name: "", email: "", subject: "", message: "" });
        setStatus("idle");
      }, 3500);
    } catch (err) {
      // Show exact error on screen so we can debug without DevTools
      const msg =
        err?.text || err?.message || JSON.stringify(err) || "Unknown error";
      console.error("EmailJS error:", err);
      setErrorMsg(msg);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's Build Something Together
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm always open to discussing new projects, internship
                opportunities, research collaborations, or just chatting about
                AI and Data Science. My inbox is always open!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-white text-sm transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="glass-card p-5 border border-green-500/20"
              style={{ background: "rgba(74,222,128,0.04)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-slate-400 text-xs">
                Open to internships, freelance AI/ML projects, and full-time
                roles. Response time: &lt;24h
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 border border-white/10 bg-white/5 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 border border-white/10 bg-white/5 focus:outline-none focus:border-indigo-500/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project idea / opportunity"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 border border-white/10 bg-white/5 focus:outline-none focus:border-indigo-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or just say hi!"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 border border-white/10 bg-white/5 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle size={18} /> Try Again
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>

              {/* Debug: show actual error on screen */}
              {status === "error" && errorMsg && (
                <p className="text-red-400 text-xs mt-2 text-center break-all">
                  Error: {errorMsg}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
