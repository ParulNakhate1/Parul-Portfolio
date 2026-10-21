import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon } from './BrandIcons';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={15} />
            <span>Connect</span>
          </div>
          <h2 className="section-title">
            Contact <span className="highlight-text">Information</span>
          </h2>
          <p className="section-subtitle">
            Feel free to reach out via phone, email, or connect on LinkedIn for Salesforce Developer and AI/ML engineering opportunities.
          </p>
        </div>

        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '2.25rem 2rem', textAlign: 'center' }}>
            
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.5rem' }}>Let's Connect</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
              
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '0.85rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  width: '100%',
                  maxWidth: '440px',
                  justifyContent: 'flex-start',
                  transition: 'var(--transition)',
                }}
              >
                <Mail size={22} color="var(--primary-accent)" style={{ flexShrink: 0 }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email</div>
                  <div style={{ fontWeight: 600, fontSize: '0.98rem' }}>{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '0.85rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  width: '100%',
                  maxWidth: '440px',
                  justifyContent: 'flex-start',
                  transition: 'var(--transition)',
                }}
              >
                <Phone size={22} color="var(--primary-accent)" style={{ flexShrink: 0 }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phone</div>
                  <div style={{ fontWeight: 600, fontSize: '0.98rem' }}>{personalInfo.phone}</div>
                </div>
              </a>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '0.85rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  width: '100%',
                  maxWidth: '440px',
                  justifyContent: 'flex-start',
                }}
              >
                <MapPin size={22} color="var(--secondary-accent)" style={{ flexShrink: 0 }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontWeight: 600, fontSize: '0.98rem' }}>{personalInfo.location}</div>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-flex', gap: '0.6rem', padding: '0.75rem 1.75rem' }}
              >
                <LinkedInIcon size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
