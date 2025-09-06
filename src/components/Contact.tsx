'use client'

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: '6rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Let&apos;s Connect</h2>
            <div style={{
              width: '8rem',
              height: '0.5rem',
              background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* GitHub */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
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
              <FaGithub style={{ fontSize: '3rem', color: '#a855f7', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>GitHub</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>Check out my projects</p>
              <a href="https://github.com/aryan7iitj" target="_blank" rel="noopener noreferrer" style={{
                color: '#a855f7',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                @aryan7iitj
              </a>
            </div>

            {/* LinkedIn */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
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
              <FaLinkedin style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>LinkedIn</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>Connect professionally</p>
              <a href="https://www.linkedin.com/in/aryan-prajapati-57ba8b22a/" target="_blank" rel="noopener noreferrer" style={{
                color: '#3b82f6',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                Aryan Prajapati
              </a>
            </div>

            {/* Email */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
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
              <FaEnvelope style={{ fontSize: '3rem', color: '#22c55e', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Email</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>Let&apos;s discuss opportunities</p>
              <a href="mailto:iitj.aryan@gmail.com" style={{
                color: '#22c55e',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                iitj.aryan@gmail.com
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
