import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon } from './BrandIcons';
import { ArrowUp, Code } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '2.5rem 0 1.75rem 0',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '5px',
                backgroundColor: 'var(--primary-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Code size={16} />
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>{personalInfo.name}</span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Skills</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Experience</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Projects</a>
            <a href="#patent" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Patent</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem' }}>Contact</a>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', padding: '0.35rem' }}
              title="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-full)',
                padding: '0.45rem',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '0.5rem',
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div style={{ textAlign: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Parul Nakhate • Built with basic React JS (`useState`, `useEffect`).
        </div>
      </div>
    </footer>
  );
}
