'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaStar, FaRocket, FaDownload, FaHeart, FaCode, FaBrain, FaUsers } from 'react-icons/fa';

const Hero = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  const icons = [FaCode, FaBrain, FaUsers, FaHeart];
  
  const fullText = "I'm a curious mind exploring the intersection of technology and creativity. When I'm not diving into code, you'll find me reading sci-fi novels, experimenting with new recipes, or planning my next adventure. Let's build something amazing together! 🚀";

  // Typing effect
  useEffect(() => {
    if (isVisible && currentTextIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentTextIndex + 1));
        setCurrentTextIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, isVisible, fullText]);

  // Start typing effect immediately when component mounts
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Icon rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons.length]);

  // Visibility detection
  useEffect(() => {
    // Set visible immediately for hero section
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-10px' }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Particle system
  useEffect(() => {
    if (!particlesRef.current) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        opacity: ${Math.random() * 0.6 + 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        pointer-events: none;
        z-index: 1;
      `;
      
      particlesRef.current?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 15000);
    };

    const particleInterval = setInterval(createParticle, 300);
    return () => clearInterval(particleInterval);
  }, []);

  const CurrentIcon = icons[currentIcon];

  // Mouse movement tracking for 3D effects
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Apply 3D transformations based on mouse position
    const elements = heroRef.current.querySelectorAll('[data-3d]');
    elements.forEach((element) => {
      const el = element as HTMLElement;
      const depth = parseFloat(el.dataset.depth || '20');
      const rotateX = y * depth;
      const rotateY = -x * depth;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${depth}px)`;
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 40;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1rem',
          overflow: 'hidden',
          perspective: '1000px'
        }}
      >
        {/* Interactive Particles */}
        <div ref={particlesRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
          <div className="shape shape-4" />
        </div>

        <div style={{ textAlign: 'center', maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Badge */}
          <div 
            className="hero-3d-badge"
            data-3d="true"
            data-depth="15"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              marginBottom: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none'
            }}
          >
            <FaStar style={{ color: '#fbbf24', fontSize: '0.875rem' }} />
            <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', fontWeight: 500 }}>
              Available for opportunities
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="hero-3d-title"
            data-3d="true"
            data-depth="25"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'
            }}
          >
            Hi, I&apos;m{' '}
            <span 
              className="gradient-text-animated"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%'
              }}
            >
              Aryan Prajapati
            </span>
          </h1>

          {/* Icon Section */}
          <div 
            className="hero-3d-icon-section"
            data-3d="true"
            data-depth="20"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none'
            }}
          >
            <div 
              className="hero-3d-icon"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '4rem',
                height: '4rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease',
                animation: 'pulseGlow 2s ease-in-out infinite'
              }}
            >
              <CurrentIcon style={{ fontSize: '1.5rem', color: '#667eea' }} />
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.25rem', fontWeight: 600 }}>
              I build amazing things
            </span>
          </div>

          {/* Description */}
          <p 
            className="hero-3d-description"
            data-3d="true"
            data-depth="10"
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '48rem',
              margin: '0 auto 3rem',
              lineHeight: 1.6,
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.6s both' : 'none',
              minHeight: '3rem'
            }}
          >
            {typedText}
            <span className="typing-cursor" style={{ animation: 'blink 1s infinite' }}>|</span>
          </p>
          
          {/* 3D Buttons */}
          <div 
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              marginTop: '3rem',
              flexWrap: 'wrap',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              animation: isVisible ? 'fadeInUp 0.8s ease-out 0.8s both' : 'none'
            }}
          >
            <button
              className="hero-3d-button"
              onClick={() => scrollToSection('about')}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '9999px',
                padding: '1rem 2rem',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s',
                boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span className="button-shine" />
              <FaRocket />
              Get To Know Me
            </button>
            <button
              className="hero-3d-button"
              onClick={() => scrollToSection('projects')}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '9999px',
                padding: '1rem 2rem',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span className="button-shine" />
              <FaDownload />
              View My Work
            </button>
          </div>
        </div>

        <style jsx>{`
          /* Enhanced 3D Interactive Effects */
          .hero-3d-badge:hover {
            transform: translateZ(20px) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
          }

          .hero-3d-title:hover {
            transform: translateZ(30px) scale(1.05) !important;
            text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
          }

          .hero-3d-icon-section:hover {
            transform: translateZ(25px) !important;
          }

          .hero-3d-icon:hover {
            transform: translateZ(40px) scale(1.2) !important;
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4) !important;
          }

          .hero-3d-description:hover {
            transform: translateZ(15px) !important;
            text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3) !important;
          }

          .hero-3d-button:hover {
            transform: translateZ(25px) scale(1.05) !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4) !important;
          }

          /* Floating Geometric Shapes */
          .floating-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }

          .shape {
            position: absolute;
            opacity: 0.1;
            animation: floatShape 20s ease-in-out infinite;
          }

          .shape-1 {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            top: 20%;
            left: 10%;
            animation-delay: 0s;
          }

          .shape-2 {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #764ba2, #667eea);
            border-radius: 8px;
            top: 60%;
            right: 15%;
            animation-delay: 5s;
          }

          .shape-3 {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            bottom: 20%;
            left: 20%;
            animation-delay: 10s;
          }

          .shape-4 {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #764ba2, #667eea);
            border-radius: 12px;
            top: 30%;
            right: 30%;
            animation-delay: 15s;
          }

          @keyframes floatShape {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-20px) rotate(90deg);
            }
            50% {
              transform: translateY(-40px) rotate(180deg);
            }
            75% {
              transform: translateY(-20px) rotate(270deg);
            }
          }

          /* Particle Animations */
          @keyframes floatParticle {
            0% {
              transform: translateY(100vh) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) scale(1);
              opacity: 0;
            }
          }

          /* Enhanced Animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
            }
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          /* Gradient Text Animation */
          .gradient-text-animated {
            animation: gradientFlow 3s ease infinite;
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Button Shine Effect */
          .button-shine {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }

          .hero-3d-button:hover .button-shine {
            left: 100%;
          }

          /* Mouse movement tracking for dynamic 3D effect */
          .hero-3d-badge,
          .hero-3d-title,
          .hero-3d-icon-section,
          .hero-3d-description,
          .hero-3d-button {
            transition: all 0.3s ease;
          }

          /* Subtle floating animation for non-hover state */
          .hero-3d-title {
            animation: heroTitleFloat 6s ease-in-out infinite;
          }

          .hero-3d-icon-section {
            animation: heroIconFloat 8s ease-in-out infinite;
          }

          @keyframes heroTitleFloat {
            0%, 100% {
              transform: translateZ(0px) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: translateZ(10px) rotateX(2deg) rotateY(2deg);
            }
          }

          @keyframes heroIconFloat {
            0%, 100% {
              transform: translateZ(0px) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: translateZ(15px) rotateX(3deg) rotateY(3deg);
            }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .floating-shapes {
              display: none;
            }
            
            .hero-3d-button {
              padding: 0.875rem 1.5rem;
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;