import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Cloud, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={15} />
            <span>Work Experience</span>
          </div>
          <h2 className="section-title">
            Industry & Research <span className="highlight-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software engineering internships across enterprise Salesforce CRM architecture and Maharashtra Government autonomous AI/ML platforms.
          </p>
        </div>

        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((exp) => (
            <div key={exp.id} className="card" style={{ padding: '2.25rem' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'var(--badge-bg)',
                        color: 'var(--badge-text)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    >
                      {exp.id.includes('salesforce') ? <Cloud size={13} /> : <Sparkles size={13} />}
                      <span>{exp.type}</span>
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.45rem', marginBottom: '0.35rem' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-accent)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Building2 size={18} />
                    <span>{exp.company}</span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {exp.department}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.92rem', fontWeight: 600, backgroundColor: 'var(--bg-primary)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <Calendar size={15} color="var(--primary-accent)" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem', justifyContent: 'flex-end' }}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
                {exp.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={17} color="var(--primary-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.55 }}>{bullet}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.25rem 0.7rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      color: 'var(--badge-text)',
                      fontWeight: 600,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
