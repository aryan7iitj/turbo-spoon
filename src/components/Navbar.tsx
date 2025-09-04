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
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontSize: '1rem',
                position: 'relative',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.filter = 'none';
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
                  left: '-100%',
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
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontSize: '1rem',
                position: 'relative',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.filter = 'none';
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
                  left: '-100%',
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
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontSize: '1rem',
                position: 'relative',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.filter = 'none';
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
                  left: '-100%',
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
              style={{ 
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: 500, 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontSize: '1rem',
                position: 'relative',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))';
                const underline = e.currentTarget.querySelector('.button-underline') as HTMLElement;
                if (underline) underline.style.left = '0%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.filter = 'none';
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
                  left: '-100%',
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
