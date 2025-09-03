'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import BackgroundElements from '@/components/BackgroundElements'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <BackgroundElements />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}