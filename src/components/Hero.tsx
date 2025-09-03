'use client';
import React, { useState, useEffect } from 'react';
import { FaStar, FaRocket, FaDownload, FaHeart, FaCode, FaBrain, FaUsers } from 'react-icons/fa';

const Hero = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [FaCode, FaBrain, FaUsers, FaHeart];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIcon];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 40; // Reduced from 80px to 40px for better centering
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
        overflow: 'hidden',
        perspective: '1000px'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Badge */}
          <div 
            className="hero-3d-badge"
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
              transition: 'all 0.3s ease'
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
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease'
            }}
          >
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Aryan Prajapati
            </span>
          </h1>

          {/* Icon Section */}
          <div 
            className="hero-3d-icon-section"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease'
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
                transition: 'all 0.3s ease'
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
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '48rem',
              margin: '0 auto 3rem',
              lineHeight: 1.6,
              transformStyle: 'preserve-3d',
              transition: 'all 0.3s ease'
            }}
          >
            I'm a curious mind exploring the intersection of technology and creativity. When I'm not diving into code, 
            you'll find me reading sci-fi novels, experimenting with new recipes, or planning my next adventure. 
            Let's build something amazing together! 🚀
          </p>
          
          {/* 3D Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}>
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
                transformStyle: 'preserve-3d'
              }}
            >
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
                transformStyle: 'preserve-3d'
              }}
            >
              <FaDownload />
              View My Work
            </button>
          </div>
        </div>

        <style jsx>{`
          /* 3D Interactive Effects */
          .hero-3d-badge:hover {
            transform: translateZ(20px) rotateX(5deg) rotateY(5deg) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
          }

          .hero-3d-title:hover {
            transform: translateZ(30px) rotateX(10deg) rotateY(10deg) scale(1.05) !important;
            text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
          }

          .hero-3d-icon-section:hover {
            transform: translateZ(25px) rotateX(8deg) rotateY(8deg) !important;
          }

          .hero-3d-icon:hover {
            transform: translateZ(40px) rotateX(15deg) rotateY(15deg) scale(1.2) !important;
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4) !important;
          }

          .hero-3d-description:hover {
            transform: translateZ(15px) rotateX(3deg) rotateY(3deg) !important;
            text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3) !important;
          }

          .hero-3d-button:hover {
            transform: translateZ(25px) rotateX(8deg) rotateY(8deg) scale(1.05) !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4) !important;
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
        `}</style>
      </section>
    </>
  );
};

export default Hero;