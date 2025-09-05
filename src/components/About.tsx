'use client'

import React, { useState } from 'react';
import { FaLightbulb, FaCode, FaRocket, FaGraduationCap, FaTrophy, FaUsers, FaBook, FaGlobe, FaBriefcase, FaAward, FaUniversity, FaLaptop, FaBrain } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: FaBook },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy },
    { id: 'leadership', label: 'Leadership', icon: FaUsers },
    { id: 'research', label: 'Research', icon: FaGlobe },
    { id: 'education', label: 'Education', icon: FaUniversity }
  ];

  const tabContent: Record<string, { title: string; content: React.ReactElement }> = {
    story: {
      title: "The Journey So Far",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              From a curious student in Gandhinagar to an IIT Jodhpur researcher, my journey has been driven by an insatiable curiosity about how technology can solve real-world problems.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              When I'm not coding or researching, you'll find me exploring sci-fi novels, experimenting with new recipes, or planning my next adventure. I believe the best solutions come from the intersection of creativity and logic.
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6
            }}>
              My passion lies in AI/ML, web development, and data science. I love building innovative solutions that can make a real impact in people's lives.
            </p>
          </div>
                                           <div style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
              borderRadius: '1rem',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shimmer 3s infinite',
                pointerEvents: 'none'
              }} />
              <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem', marginTop: '0rem'}}>Quick Facts</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaGraduationCap style={{ color: '#a855f7' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>B.Tech Electrical Engineering from IIT Jodhpur (2025)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaTrophy style={{ color: '#ec4899' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>Global Rank #41 in CodeChef's December Long Challenge 2022</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaBook style={{ color: '#3b82f6' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>4 IEEE Publications</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaBriefcase style={{ color: '#10b981' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>3+ Corporate and Research Internships</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: "Professional Experience",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FaBriefcase style={{ fontSize: '1.5rem', color: '#a855f7' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Software Development Intern</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Decimal Point Analytics • Mumbai, India • May 2024 - Jul 2024</p>
              </div>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
              <li>Extracted data from mutual fund prospectuses using pdfplumber, SpaCy NER, and regex</li>
              <li>Built a trading strategy backtesting app using Streamlit, containerized with Docker, and automated with Jenkins</li>
              <li>Developed chatbot frontend with React, managing state and styling with custom CSS</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FaBrain style={{ fontSize: '1.5rem', color: '#3b82f6' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Machine Learning Engineering Intern</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>NextGen Ventures • San Francisco, United States • Jun 2023 - Oct 2024</p>
              </div>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
              <li>Developed and productionized an ML model under the guidance of the CEO and CTO</li>
              <li>Built a Food Recommender System to reduce food ordering time, addressing cold start problems</li>
              <li>Created a Recommender System suggesting Top K Cuisines for users, using industry research and public datasets</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <FaGlobe style={{ fontSize: '1.5rem', color: '#22c55e' }} />
              <div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Summer Intern</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>Jio Platforms Limited • Hyderabad, India • Jun 2023 - Aug 2023</p>
              </div>
            </div>
            <ul style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.25rem', lineHeight: 1.5, fontSize: '0.9rem' }}>
              <li>Developed a Network Data Capturing App to capture download/upload speeds and location</li>
              <li>Worked on Crowd-Sourced Network Coverage Mapping and NL Interface for Enterprise Data</li>
              <li>Built a model to extract text from images using EasyOCR, PyTesseract, and Langchain</li>
            </ul>
          </div>
        </div>
      )
    },
    achievements: {
      title: "Milestones & Recognition",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaTrophy style={{ fontSize: '2rem', color: '#22c55e', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>LinkedIn Recognition</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Recognized by Head of AI/ML, Instagram Creators for developing a food recommender system
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaUsers style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Campus Innovation Challenge</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Won at IIT Jodhpur; awarded by Secretary, Ministry of Health & Family Welfare and IIT Jodhpur Director
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaGlobe style={{ fontSize: '2rem', color: '#a855f7', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>TVS Credit E.P.I.C 5.0</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Ranked among Top 160 out of 18,313 participants in Analytics Challenge
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(251, 191, 36, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(249, 115, 22, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaCode style={{ fontSize: '2rem', color: '#f97316', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>CodeChef December Long Challenge</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Achieved Global Rank 41 in competitive programming challenge
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(236, 72, 153, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaAward style={{ fontSize: '2rem', color: '#ec4899', marginBottom: '0.75rem' }} />
            <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Engineering Design Project</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Presented project to Former ISRO SAC Director, IIT Jodhpur Director, and BITS Pilani Vice Chancellor on IIT Jodhpur's Foundation Day
            </p>
          </div>
        </div>
      )
    },
         leadership: {
       title: "Leadership Roles",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                                                       <div style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(168, 85, 247, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  transform: 'rotate(45deg)',
                  animation: 'shimmer 3s infinite',
                  pointerEvents: 'none'
                }} />
                <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>General Secretary, Hostel Affairs</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                G1 Hostel, IIT Jodhpur • Managing hostel operations, student welfare, and coordinating with administration
              </p>
            </div>
                                                                                                       <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  transform: 'rotate(45deg)',
                  animation: 'shimmer 3s infinite',
                  pointerEvents: 'none'
                }} />
                <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>Administration Team Member</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                Office of International Relations, IIT Jodhpur • Supporting international collaborations and student exchange programs
              </p>
            </div>
                                                                                                       <div style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(34, 197, 94, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  transform: 'rotate(45deg)',
                  animation: 'shimmer 3s infinite',
                  pointerEvents: 'none'
                }} />
                <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>Department UG Committee Member</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                Department of Electrical Engineering, IIT Jodhpur • Representing student interests and contributing to academic decisions
              </p>
            </div>
                                                   <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  transform: 'rotate(45deg)',
                  animation: 'shimmer 3s infinite',
                  pointerEvents: 'none'
                }} />
                <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>Assistant Head, Finance Team</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                Varchas Annual Sports Fest, IIT Jodhpur • Managing financial operations for one of the largest sports festivals
              </p>
            </div>
          </div>
        </div>
      )
    },
    research: {
      title: "Research & Innovation",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                           <div style={{ 
                  padding: '1rem', 
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'rotate(45deg)',
                    animation: 'shimmer 3s infinite',
                    pointerEvents: 'none'
                  }} />
                  <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>Solar Energy & BMS Tracking</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '0.25rem' }}>
                  "A BMS Enabled Tracking Technique for Isolated Solar Based Charging Infrastructure"
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.7rem' }}>
                  IEEE 3rd International Conference on Smart Technologies for Power, Energy and Control (STPEC) 2023, Bhubaneswar, India
                </p>
              </div>
                                                           <div style={{ 
                  padding: '1rem', 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'rotate(45deg)',
                    animation: 'shimmer 3s infinite',
                    pointerEvents: 'none'
                  }} />
                  <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>Credit Card Fraud Detection</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '0.25rem' }}>
                  "Credit Card Fraud Detection Using XGBoost Driven Oversampling Based Machine Learning Technique: For Application Such as Electricity Bill Payments"
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.7rem' }}>
                  2nd IEEE Industrial Electronics Society Annual Online Conference (IES ONCON) 2023
                </p>
              </div>
                                                           <div style={{ 
                  padding: '1rem', 
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(34, 197, 94, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'rotate(45deg)',
                    animation: 'shimmer 3s infinite',
                    pointerEvents: 'none'
                  }} />
                  <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>Solar Power Generation Forecasting</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '0.25rem' }}>
                  "Dynamic Payback Period Estimation for Solar Power Plants Through ML Based Solar Generation Forecasts"
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.7rem' }}>
                  6th IEEE International Conference on Systems, Computation, Automation and Networking (ICSCAN) 2024, Puducherry, India
                </p>
              </div>
                                                           <div style={{ 
                  padding: '1rem', 
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))', 
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    transform: 'rotate(45deg)',
                    animation: 'shimmer 3s infinite',
                    pointerEvents: 'none'
                  }} />
                  <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>Optimized Solar Power Generation Forecasting</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '0.25rem' }}>
                  "A Novel ML Approach with Sequential Hyperparameter Tuning and Trend Adaptation"
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.7rem' }}>
                  Submitted in 2nd IEEE International Conference on Computational Intelligence, Communication Technology and Networking (CICTN) 2025, Ghaziabad, India
                </p>
              </div>
          </div>
        </div>
      )
    },
    education: {
      title: "Academic Journey",
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaGraduationCap style={{ fontSize: '2.5rem', color: '#a855f7', marginBottom: '0.75rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Senior Secondary</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '0.75rem' }}>GSHSEB, Gandhinagar</p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#a855f7', marginBottom: '0.25rem' }}>89.23%</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Percentage</div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>2021</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaUniversity style={{ fontSize: '2.5rem', color: '#3b82f6', marginBottom: '0.75rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>B.Tech Electrical Engineering</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '0.75rem' }}>Indian Institute of Technology Jodhpur</p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#3b82f6', marginBottom: '0.25rem' }}>7.95</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>CGPA</div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>2021 - 2025</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none'
            }} />
            <FaGraduationCap style={{ fontSize: '2.5rem', color: '#22c55e', marginBottom: '0.75rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.25rem' }}>Secondary</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '0.75rem' }}>GSHSEB, Gandhinagar</p>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '0.75rem'
            }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#22c55e', marginBottom: '0.25rem' }}>93.50%</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>Percentage</div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>2019</p>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <section id="about" style={{ padding: '3rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '2rem'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>About Me</h2>
            <div style={{
              width: '6rem',
              height: '0.4rem',
              background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                      : 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.75rem 1.5rem',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(168, 85, 247, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <TabIcon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.5rem',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.01)';
            e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
          }}
          >
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              {tabContent[activeTab].title}
            </h3>
            {tabContent[activeTab].content}
          </div>

          {/* Statistics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            {[
              { number: '3+', label: 'Years Learning', gradient: 'linear-gradient(to right, #a855f7, #ec4899)' },
              { number: '10+', label: 'Projects Built', gradient: 'linear-gradient(to right, #ec4899, #3b82f6)' },
              { number: '15+', label: 'Technologies Explored', gradient: 'linear-gradient(to right, #3b82f6, #a855f7)' },
              { number: '4', label: 'IEEE Publications', gradient: 'linear-gradient(to right, #10b981, #06b6d4)' }
            ].map((stat, index) => (
              <div key={index} style={{ 
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>{stat.number}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600, fontSize: '0.9rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
