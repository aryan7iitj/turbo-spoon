'use client'

import { FaCode, FaBrain, FaDatabase, FaCogs, FaRocket, FaGitAlt, FaChartLine } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiDjango, SiTailwindcss, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn, SiFastapi, SiDocker, SiJenkins, SiCplusplus, SiC, SiNumpy } from 'react-icons/si'

export default function Skills() {
  return (
    <>
      <section id="skills" style={{ padding: '6rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>What I Know</h2>
            <div style={{
              width: '8rem',
              height: '0.5rem',
              background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Core Competencies */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaRocket style={{ fontSize: '2rem', color: '#a855f7' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Core Competencies</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaCode style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>DSA</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaBrain style={{ fontSize: '1.875rem', color: '#ec4899' }} />
                  <span style={{ fontWeight: 600 }}>AI/ML</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaDatabase style={{ fontSize: '1.875rem', color: '#10b981' }} />
                  <span style={{ fontWeight: 600 }}>DBMS</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaCode style={{ fontSize: '1.875rem', color: '#f59e0b' }} />
                  <span style={{ fontWeight: 600 }}>Web/App Dev.</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaCogs style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>CI/CD Pipelines</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaRocket style={{ fontSize: '1.875rem', color: '#8b5cf6' }} />
                  <span style={{ fontWeight: 600 }}>Automation</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaBrain style={{ fontSize: '1.875rem', color: '#ef4444' }} />
                  <span style={{ fontWeight: 600 }}>NLP</span>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaCode style={{ fontSize: '2rem', color: '#3b82f6' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Programming Languages</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiPython style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>Python</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiC style={{ fontSize: '1.875rem', color: '#059669' }} />
                  <span style={{ fontWeight: 600 }}>C</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiCplusplus style={{ fontSize: '1.875rem', color: '#dc2626' }} />
                  <span style={{ fontWeight: 600 }}>C++</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaDatabase style={{ fontSize: '1.875rem', color: '#f59e0b' }} />
                  <span style={{ fontWeight: 600 }}>SQL</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiJavascript style={{ fontSize: '1.875rem', color: '#fbbf24' }} />
                  <span style={{ fontWeight: 600 }}>Javascript</span>
                </div>
              </div>
            </div>

            {/* Libraries and Frameworks */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaCode style={{ fontSize: '2rem', color: '#ec4899' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Libraries and Frameworks</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiPandas style={{ fontSize: '1.875rem', color: '#059669' }} />
                  <span style={{ fontWeight: 600 }}>Pandas</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiNumpy style={{ fontSize: '1.875rem', color: '#3b82f6' }} />
                  <span style={{ fontWeight: 600 }}>NumPy</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaChartLine style={{ fontSize: '1.875rem', color: '#f59e0b' }} />
                  <span style={{ fontWeight: 600 }}>Matplotlib</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiScikitlearn style={{ fontSize: '1.875rem', color: '#f59e0b' }} />
                  <span style={{ fontWeight: 600 }}>Scikit-learn</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiTensorflow style={{ fontSize: '1.875rem', color: '#f97316' }} />
                  <span style={{ fontWeight: 600 }}>TensorFlow</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiPytorch style={{ fontSize: '1.875rem', color: '#dc2626' }} />
                  <span style={{ fontWeight: 600 }}>PyTorch</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiFastapi style={{ fontSize: '1.875rem', color: '#059669' }} />
                  <span style={{ fontWeight: 600 }}>FastAPI</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiDjango style={{ fontSize: '1.875rem', color: '#059669' }} />
                  <span style={{ fontWeight: 600 }}>Django</span>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(251, 191, 36, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaCode style={{ fontSize: '2rem', color: '#06b6d4' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>Web Development</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiReact style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>React</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiTailwindcss style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>Tailwind</span>
                </div>
              </div>
            </div>

            {/* DevOps and Version Control */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FaCogs style={{ fontSize: '2rem', color: '#8b5cf6' }} />
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>DevOps and Version Control</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiDocker style={{ fontSize: '1.875rem', color: '#06b6d4' }} />
                  <span style={{ fontWeight: 600 }}>Docker</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <SiJenkins style={{ fontSize: '1.875rem', color: '#dc2626' }} />
                  <span style={{ fontWeight: 600 }}>Jenkins</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}>
                  <FaGitAlt style={{ fontSize: '1.875rem', color: '#f97316' }} />
                  <span style={{ fontWeight: 600 }}>Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
