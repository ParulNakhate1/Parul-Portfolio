import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

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
            Internship <span className="highlight-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Practical AI software engineering internship in an autonomous Maharashtra Government body.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {experienceData.map((exp) => (
            <div key={exp.id} className="card" style={{ padding: '2rem' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.6rem',
                      backgroundColor: 'var(--badge-bg)',
                      color: 'var(--badge-text)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {exp.type}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--primary-accent)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {exp.department}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Calendar size={15} color="var(--primary-accent)" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem', justifyContent: 'flex-end' }}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginTop: '1.25rem' }}>
                {exp.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle2 size={17} color="var(--primary-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{bullet}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.25rem 0.65rem',
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
