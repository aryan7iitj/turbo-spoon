'use client';
import React, { useState, useEffect } from 'react';
import { FaRocket, FaBrain, FaCode, FaGraduationCap, FaTrophy, FaUsers, FaBook, FaLightbulb, FaGlobe, FaHeart, FaArrowRight, FaArrowLeft, FaPlay, FaPause } from 'react-icons/fa';
import { SiPython, SiTensorflow, SiPytorch, SiReact, SiDjango, SiDocker, SiJenkins } from 'react-icons/si';

const DigitalJourney = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const journeyPhases = [
    {
      id: 'origin',
      title: 'The Beginning',
      subtitle: 'Where it all started',
      icon: FaGraduationCap,
      color: '#10b981',
      content: {
        year: '2019',
        achievement: '93.50% in Secondary Education',
        description: 'The foundation was laid with academic excellence and curiosity about the world of technology.'
      }
    },
    {
      id: 'discovery',
      title: 'The Discovery',
      subtitle: 'Finding my passion',
      icon: FaLightbulb,
      color: '#f59e0b',
      content: {
        year: '2021',
        achievement: '89.23% in Senior Secondary + IIT Jodhpur Admission',
        description: 'Entered the prestigious IIT Jodhpur for Electrical Engineering, where the real adventure began.'
      }
    },
    {
      id: 'first-steps',
      title: 'First Steps in Tech',
      subtitle: 'Diving into the digital world',
      icon: FaCode,
      color: '#3b82f6',
      content: {
        year: '2022',
        achievement: 'Global Rank 41 in CodeChef December Long Challenge',
        description: 'Competitive programming opened my eyes to algorithmic thinking and problem-solving.'
      }
    },
    {
      id: 'ml-awakening',
      title: 'The ML Awakening',
      subtitle: 'When AI became my calling',
      icon: FaBrain,
      color: '#8b5cf6',
      content: {
        year: '2023',
        achievement: 'Brain Stroke Prediction Project with 100% Accuracy',
        description: 'Built my first serious ML pipeline, discovering the power of AI to solve real-world problems.'
      }
    },
    {
      id: 'research-breakthrough',
      title: 'Research Breakthrough',
      subtitle: 'Contributing to knowledge',
      icon: FaBook,
      color: '#ef4444',
      content: {
        year: '2023-2024',
        achievement: '4 IEEE Publications on Solar Energy & ML',
        description: 'Published research on solar power forecasting and credit card fraud detection, bridging theory and practice.'
      }
    },
    {
      id: 'industry-dive',
      title: 'Industry Immersion',
      subtitle: 'Real-world impact',
      icon: FaGlobe,
      color: '#06b6d4',
      content: {
        year: '2023-2024',
        achievement: 'Internships at Jio, NextGen Ventures, Decimal Point Analytics',
        description: 'Worked on cutting-edge projects from network mapping to food recommendation systems.'
      }
    },
    {
      id: 'leadership',
      title: 'Beyond Code',
      subtitle: 'Leading and inspiring',
      icon: FaUsers,
      color: '#f97316',
      content: {
        year: '2023-2024',
        achievement: 'General Secretary, Hostel Affairs + Multiple Leadership Roles',
        description: 'Balanced technical excellence with leadership, managing teams and organizing major events.'
      }
    },
    {
      id: 'recognition',
      title: 'Recognition & Impact',
      subtitle: 'Making waves',
      icon: FaTrophy,
      color: '#ec4899',
      content: {
        year: '2024',
        achievement: 'LinkedIn Recommendation from Instagram Creators + Campus Innovation Challenge Winner',
        description: 'Recognition from industry leaders and winning prestigious competitions at IIT Jodhpur.'
      }
    },
    {
      id: 'future',
      title: 'The Future Unfolds',
      subtitle: 'What\'s next?',
      icon: FaRocket,
      color: '#84cc16',
      content: {
        year: '2025+',
        achievement: 'Continuing the journey...',
        description: 'Ready to tackle bigger challenges, create more impact, and push the boundaries of what&apos;s possible.'
      }
    }
  ];

  const skills = [
    { name: 'Python', icon: SiPython, level: 95, color: '#3b82f6' },
    { name: 'TensorFlow', icon: SiTensorflow, level: 88, color: '#f97316' },
    { name: 'PyTorch', icon: SiPytorch, level: 85, color: '#ef4444' },
    { name: 'React', icon: SiReact, level: 82, color: '#06b6d4' },
    { name: 'Django', icon: SiDjango, level: 80, color: '#22c55e' },
    { name: 'Docker', icon: SiDocker, level: 78, color: '#3b82f6' },
    { name: 'Jenkins', icon: SiJenkins, level: 75, color: '#f59e0b' }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentPhase((prev) => (prev + 1) % journeyPhases.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, journeyPhases.length]);

  const currentPhaseData = journeyPhases[currentPhase];

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', position: 'relative' }}>
      {/* Floating particles background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: `hsl(${i * 18}, 70%, 60%)`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '4rem', 
        position: 'relative', 
        zIndex: 10 
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem'
        }}>
          Aryan&apos;s Digital Journey
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          A non-linear exploration of my evolution from a curious student to a tech enthusiast, researcher, and leader
        </p>
      </div>

      {/* Journey Timeline */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '2rem',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 10
      }}>
        <button
          onClick={() => setCurrentPhase((prev) => (prev - 1 + journeyPhases.length) % journeyPhases.length)}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s'
          }}
        >
          <FaArrowLeft />
        </button>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '2rem',
          padding: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{
            width: '5rem',
            height: '5rem',
            background: `linear-gradient(135deg, ${currentPhaseData.color}, ${currentPhaseData.color}80)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
            fontSize: '2rem',
            color: 'white'
          }}>
            <currentPhaseData.icon />
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: 'white',
            marginBottom: '0.5rem'
          }}>
            {currentPhaseData.title}
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: currentPhaseData.color,
            marginBottom: '2rem',
            fontWeight: 600
          }}>
            {currentPhaseData.subtitle}
          </p>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              color: currentPhaseData.color,
              marginBottom: '1rem'
            }}>
              {currentPhaseData.content.year}
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem'
            }}>
              {currentPhaseData.content.achievement}
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6
            }}>
              {currentPhaseData.content.description}
            </p>
          </div>
        </div>

        <button
          onClick={() => setCurrentPhase((prev) => (prev + 1) % journeyPhases.length)}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s'
          }}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Journey Navigation Dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 10
      }}>
        {journeyPhases.map((phase, index) => (
          <button
            key={phase.id}
            onClick={() => setCurrentPhase(index)}
            style={{
              width: '1rem',
              height: '1rem',
              borderRadius: '50%',
              border: 'none',
              background: index === currentPhase ? phase.color : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

      {/* Auto-play controls */}
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 10
      }}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
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
            margin: '0 auto',
            transition: 'all 0.3s'
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
          {isPlaying ? 'Pause Journey' : 'Auto-play Journey'}
        </button>
      </div>

      {/* Skills Radar */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderRadius: '2rem',
        padding: '3rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 10
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          color: 'white',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Skills Radar
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredNode(index)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <skill.icon style={{ fontSize: '2rem', color: skill.color }} />
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'white'
                }}>
                  {skill.name}
                </span>
              </div>
              
              <div style={{
                width: '100%',
                height: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                  borderRadius: '9999px',
                  transition: 'width 1s ease-in-out',
                  transform: hoveredNode === index ? 'scaleY(1.2)' : 'scaleY(1)'
                }} />
              </div>
              
              <div style={{
                textAlign: 'right',
                marginTop: '0.5rem',
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          color: 'white',
          marginBottom: '2rem'
        }}>
          Let&apos;s Connect & Create
        </h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="mailto:prajapati.5@iitj.ac.in"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s'
            }}
          >
            <FaHeart />
            Say Hello
          </a>
          
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s'
            }}
          >
            <FaCode />
            View Code
          </a>
        </div>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          marginTop: '2rem',
          fontSize: '1.125rem'
        }}>
          Ready to explore the next chapter of this digital journey together? ✨
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default DigitalJourney;
