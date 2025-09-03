'use client'

export default function Navbar() {
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
          <div style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #c084fc, #ec4899, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Aryan Prajapati
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <button 
              onClick={() => scrollToSection('about')}
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              What I Know
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
