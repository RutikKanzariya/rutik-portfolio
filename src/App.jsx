import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load below-the-fold sections
const About         = lazy(() => import('./components/About'))
const Skills        = lazy(() => import('./components/Skills'))
const Timeline      = lazy(() => import('./components/Timeline'))
const Projects      = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Achievements  = lazy(() => import('./components/Achievements'))
const Contact       = lazy(() => import('./components/Contact'))
const Footer        = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-100 overflow-x-hidden">
      {/* Static background — no animation cost on scroll */}
      <div className="stars-bg" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          {/* Hero is always above the fold — load eagerly */}
          <Hero />

          {/* Everything below the fold is lazy loaded */}
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App
