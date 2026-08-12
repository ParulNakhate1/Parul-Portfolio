import React from 'react';
import { patentData } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Patents() {
  return (
    <section id="patent" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Award size={15} />
            <span>Patents & Recognition</span>
          </div>
          <h2 className="section-title">
            Issued <span className="highlight-text">Patent</span>
          </h2>
          <p className="section-subtitle">
            Registered Design Patent co-invented during my engineering studies.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '2rem', borderColor: 'var(--primary-accent)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.8rem',
                  backgroundColor: 'var(--badge-bg)',
                  color: 'var(--badge-text)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                }}
              >
                <ShieldCheck size={15} />
                <span>Intellectual Property Office, Govt. of India</span>
              </span>

              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--secondary-accent)' }}>
                {patentData.issuedDate}
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {patentData.title}
            </h3>

            <div style={{ fontSize: '0.95rem', color: 'var(--primary-accent)', fontWeight: 600, marginBottom: '1.25rem' }}>
              🏛️ {patentData.authority}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Design Number</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{patentData.designNo}</div>
              </div>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Class Code</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{patentData.classCode}</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {patentData.bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>{bullet}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
