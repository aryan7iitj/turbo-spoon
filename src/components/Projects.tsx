'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  return (
    <>
      <section id="projects" style={{ padding: '6rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>My Work</h2>
            <div style={{
              width: '8rem',
              height: '0.5rem',
              background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Project 1 - NEURAL NETWORKS FOR MicroControllerUnit (MCUNet) */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s'
            }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                NEURAL NETWORKS FOR MicroControllerUnit (MCUNet)
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • Implemented neural network on the STM32F429ZI – Discovery board to detect electrical fault
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • It is a highly resource constrained device which provides only 32KB of memory declare variables or weights.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>C++</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Python</span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#c084fc',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Tensorflow</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://drive.google.com/file/d/16YvVqIUWNROOGI8jrvmbkrZixWI6ciA-/view?usp=sharing" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaExternalLinkAlt />
                  Report
                </a>
              </div>
            </div>

            {/* Project 2 - Trading Strategy Backtesting App */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s'
            }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Trading Strategy Backtesting App
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • Created a Streamlit app for backtesting various trading strategies such as SMA, EMA, Bollinger Bands, RSI etc.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Implemented backtesting logic for multiple trading strategies using Python and the backtesting library.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Python</span>
                <span style={{
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ade80',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Pandas</span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Matplotlib</span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#c084fc',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Streamlit</span>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Backtesting</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://trading-strategy-backtesting-app-k8md3xxdjwl6utipsqwhzl.streamlit.app/" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaExternalLinkAlt />
                  Live App
                </a>
                <a href="https://github.com/aryan7iitj/Trading-Strategy-Backtesting-App" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaGithub />
                  Github
                </a>
              </div>
            </div>

            {/* Project 3 - Top-K Cuisines Recommender System */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s'
            }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Top-K Cuisines Recommender System
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • Developed a recommendation system for top-K cuisines using Jaccard similarity and Manhattan distance.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Implemented weighted scoring to combine user attributes for personalized cuisine recommendations.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Python</span>
                <span style={{
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ade80',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Pandas</span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#c084fc',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>NumPy</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/aryan7iitj/Top_K_Cuisines_Recommender_System" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaGithub />
                  Github
                </a>
              </div>
            </div>

            {/* Project 4 - Brain Stroke Prediction Project */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s'
            }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Brain Stroke Prediction Project
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                  • Developed a stroke prediction ML pipeline with 100% accuracy using custom sampling and boosting.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                  • Enhanced classifier performance on imbalanced datasets using undersampling, oversampling, and SMOTE.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>HTML</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#60a5fa',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>CSS</span>
                <span style={{
                  background: 'rgba(251, 191, 36, 0.2)',
                  color: '#fbbf24',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Javascript</span>
                <span style={{
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ade80',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Python</span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#c084fc',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>Data Processing</span>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>XGBoost</span>
                <span style={{
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#4ade80',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>SMOTE</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://celebrated-fudge-f97e70.netlify.app/" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaExternalLinkAlt />
                  Live App
                </a>
                <a href="https://github.com/aryan7iitj/Brain_Stroke_Prediction" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}>
                  <FaGithub />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
