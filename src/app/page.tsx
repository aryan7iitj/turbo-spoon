'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import BackgroundElements from '@/components/BackgroundElements'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(${135 + scrollY * 0.01}deg, #0f172a, #581c87, #0f172a)`,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.1s ease-out'
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