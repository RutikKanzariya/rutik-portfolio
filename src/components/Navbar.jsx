import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '#hero' },
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Journey', to: '#timeline' },
  { label: 'Projects', to: '#projects' },
  { label: 'Certs', to: '#certifications' },
  { label: 'Wins', to: '#achievements' },
  { label: 'Contact', to: '#contact' },
]

function scrollTo(id) {
  const el = document.querySelector(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Navbar = memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    let ticking = false
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [onScroll])

  const handleNavClick = (e, to) => {
    e.preventDefault()
    scrollTo(to)
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-card border-b border-white/10' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #22d3ee)' }}
          >
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg text-white group-hover:text-primary-400 transition-colors">
            Rutik<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg cursor-pointer transition-colors duration-150 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary ml-3 text-sm cursor-pointer"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden glass-card mx-4 mt-2 rounded-2xl border border-white/10"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className="px-4 py-3 text-slate-300 hover:text-white rounded-xl cursor-pointer transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
})

export default Navbar
