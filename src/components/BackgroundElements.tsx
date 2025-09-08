'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackgroundElements() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Scroll event listener for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle system with scroll-based movement
  useEffect(() => {
    if (!particlesRef.current) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      const initialTop = Math.random() * 100;
      const initialLeft = Math.random() * 100;
      const speed = Math.random() * 0.5 + 0.2; // Parallax speed factor
      
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        opacity: ${Math.random() * 0.6 + 0.2};
        left: ${initialLeft}%;
        top: ${initialTop}%;
        animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        pointer-events: none;
        z-index: 1;
        transform: translateY(${scrollY * speed}px);
        transition: transform 0.1s ease-out;
      `;
      
      particlesRef.current?.appendChild(particle);
      
      // Update particle position on scroll
      const updateParticlePosition = () => {
        particle.style.transform = `translateY(${scrollY * speed}px)`;
      };
      
      const scrollListener = () => updateParticlePosition();
      window.addEventListener('scroll', scrollListener, { passive: true });
      
      setTimeout(() => {
        window.removeEventListener('scroll', scrollListener);
        particle.remove();
      }, 15000);
    };

    const particleInterval = setInterval(createParticle, 300);
    return () => clearInterval(particleInterval);
  }, [scrollY]);

  return (
    <>
      {/* Global Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {/* Interactive Particles */}
        <div ref={particlesRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
        
        {/* Floating Geometric Shapes */}
        <div 
          ref={shapesRef}
          className="floating-shapes"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <div 
            className="shape shape-1" 
            style={{
              transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.1}px)`
            }}
          />
          <div 
            className="shape shape-2" 
            style={{
              transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.2}px)`
            }}
          />
          <div 
            className="shape shape-3" 
            style={{
              transform: `translate(${scrollY * 0.12}px, ${scrollY * 0.15}px)`
            }}
          />
          <div 
            className="shape shape-4" 
            style={{
              transform: `translate(${scrollY * -0.06}px, ${scrollY * 0.25}px)`
            }}
          />
          <div 
            className="shape shape-5" 
            style={{
              transform: `translate(${scrollY * 0.09}px, ${scrollY * 0.18}px)`
            }}
          />
          <div 
            className="shape shape-6" 
            style={{
              transform: `translate(${scrollY * -0.04}px, ${scrollY * 0.12}px)`
            }}
          />
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '3rem',
          height: '3rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          borderRadius: '50%',
          color: 'white',
          fontSize: '1.25rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.3s',
          zIndex: 1000,
          opacity: 0.8
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.8';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
        }}
      >
        <FaArrowUp />
      </button>

      <style jsx>{`
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
          transition: transform 0.1s ease-out;
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

        .shape-5 {
          width: 35px;
          height: 35px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          top: 80%;
          left: 60%;
          animation-delay: 8s;
        }

        .shape-6 {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #764ba2, #667eea);
          border-radius: 6px;
          top: 10%;
          left: 70%;
          animation-delay: 12s;
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

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-shapes {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
