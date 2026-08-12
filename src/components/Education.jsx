import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} />
            <span>Education</span>
          </div>
          <h2 className="section-title">
            Degree & <span className="highlight-text">College</span>
          </h2>
          <p className="section-subtitle">
            B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning).
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '2rem' }}>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{educationData.institution}</h3>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--primary-accent)' }}>
                  {educationData.degree}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <Calendar size={15} color="var(--primary-accent)" />
                  <span>Expected Graduation: {educationData.gradYear}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem', justifyContent: 'flex-end' }}>
                  <MapPin size={14} />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--badge-bg)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.25rem',
              }}
            >
              <Award size={18} color="var(--primary-accent)" />
              <span style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Academic CGPA: <span className="highlight-text">{educationData.cgpa}</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {educationData.details}
            </p>

            <div className="grid-2" style={{ gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--primary-accent)' }}>Key Coursework</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  Java (DSA), Machine Learning, Deep Learning, OpenCV, Speech Processing, SQL, NLP, Software Engineering.
                </p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--secondary-accent)' }}>Domain Focus</h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  Artificial Intelligence & Machine Learning (AIML), Computer Vision, Voice Biometrics & Smart Infrastructure.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
