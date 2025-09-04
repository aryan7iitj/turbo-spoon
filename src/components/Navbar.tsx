'use client'

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust these values to control when a section is considered "active"
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only set active section if we're not at the very top (Hero section)
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > 100) { // Threshold to avoid Hero section
            setActiveSection(entry.target.id);
          } else {
            setActiveSection(''); // Clear active section when at top
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['about', 'skills', 'projects', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener to handle Hero section case
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop <= 100) {
        setActiveSection(''); // Clear active section when scrolling back to top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      let navbarHeight = 30; // Base navbar height
      
      // Adjust offset for specific sections to ensure proper centering
      if (sectionId === 'skills') {
        navbarHeight = -30; // Increase offset for Skills section to account for title margin
      } else if (sectionId === 'about') {
        navbarHeight = 30; // Keep original offset for About section
      }
      else if (sectionId === 'projects') {
        navbarHeight = -40; // Increase offset for Projects section to account for title margin
      }
      
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const getButtonStyle = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return {
      background: isActive ? 'rgba(168, 85, 247, 0.2)' : 'none',
      border: isActive ? '1px solid rgba(168, 85, 247, 0.5)' : 'none',
      color: isActive ? 'white' : 'rgba(255, 255, 255, 0.8)',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontSize: '1rem',
      position: 'relative' as const,
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: isActive ? '0 0 20px rgba(168, 85, 247, 0.3)' : 'none'
    };
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(24px)',
      zIndex: 50,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5rem' }}>
          <div 
            className="name-glow"
            style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 0.9)',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease',
              animation: 'shimmer 2.5s ease-in-out infinite'
            }}
          >
            Aryan Prajapati
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-button"
              style={getButtonStyle('about')}
              onMouseEnter={(e) => {
                if (activeSection !== 'about') {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'about') {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.filter = 'none';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '-100%';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>About Me</span>
              <div 
                className="button-underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: activeSection === 'about' ? '0%' : '-100%',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #c084fc, #ec4899)',
                  transition: 'left 0.3s ease',
                  borderRadius: '1px'
                }}
              />
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="nav-button"
              style={getButtonStyle('skills')}
              onMouseEnter={(e) => {
                if (activeSection !== 'skills') {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'skills') {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.filter = 'none';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '-100%';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>What I Know</span>
              <div 
                className="button-underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: activeSection === 'skills' ? '0%' : '-100%',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #c084fc, #ec4899)',
                  transition: 'left 0.3s ease',
                  borderRadius: '1px'
                }}
              />
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-button"
              style={getButtonStyle('projects')}
              onMouseEnter={(e) => {
                if (activeSection !== 'projects') {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'projects') {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.filter = 'none';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '-100%';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>My Work</span>
              <div 
                className="button-underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: activeSection === 'projects' ? '0%' : '-100%',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #c084fc, #ec4899)',
                  transition: 'left 0.3s ease',
                  borderRadius: '1px'
                }}
              />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-button"
              style={getButtonStyle('contact')}
              onMouseEnter={(e) => {
                if (activeSection !== 'contact') {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== 'contact') {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.filter = 'none';
                }
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '-100%';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Connect</span>
              <div 
                className="button-underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: activeSection === 'contact' ? '0%' : '-100%',
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, #c084fc, #ec4899)',
                  transition: 'left 0.3s ease',
                  borderRadius: '1px'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
