'use client'

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: '6rem 1rem', position: 'relative' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Let's Connect</h2>
            <div style={{
              width: '8rem',
              height: '0.5rem',
              background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
              margin: '0 auto',
              borderRadius: '9999px'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Email */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}>
              <FaEnvelope style={{ fontSize: '3rem', color: '#a855f7', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Email</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>Let's discuss opportunities</p>
              <a href="mailto:iitj.aryan@gmail.com" style={{
                color: '#a855f7',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                iitj.aryan@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}>
              <FaGithub style={{ fontSize: '3rem', color: '#ec4899', marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>GitHub</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>Check out my projects</p>
              <a href="https://github.com/aryan7iitj" target="_blank" rel="noopener noreferrer" style={{
                color: '#ec4899',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                @aryan7iitj
              </a>
            </div>

            {/* LinkedIn */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}>
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
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
