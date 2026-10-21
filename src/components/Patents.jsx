import React, { useState } from 'react';
import { patentData } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, FileText, X } from 'lucide-react';

export default function Patents() {
  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <section id="patent" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Award size={15} />
            <span>Patents & Recognition</span>
          </div>
          <h2 className="section-title">
            Issued <span className="highlight-text">Design Patent</span>
          </h2>
          <p className="section-subtitle">
            Official Design Patent co-invented and registered under the Intellectual Property Office, Government of India.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '2.25rem', borderColor: 'var(--primary-accent)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  backgroundColor: 'var(--badge-bg)',
                  color: 'var(--badge-text)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                }}
              >
                <ShieldCheck size={16} />
                <span>Intellectual Property Office, Govt. of India</span>
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--secondary-accent)' }}>
                  {patentData.issuedDate}
                </span>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="btn btn-secondary"
                  style={{ padding: '0.35rem 0.8rem', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <FileText size={14} color="var(--primary-accent)" />
                  <span>View Certificate</span>
                </button>
              </div>
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
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{patentData.designNo}</div>
              </div>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Class Code</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{patentData.classCode}</div>
              </div>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Status</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#16a34a' }}>Registered & Issued</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {patentData.bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <CheckCircle2 size={16} color="var(--primary-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.55 }}>{bullet}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Certificate Modal */}
      {showCertModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
          onClick={() => setShowCertModal(false)}
        >
          <div
            className="card"
            style={{
              maxWidth: '560px',
              width: '100%',
              position: 'relative',
              backgroundColor: 'var(--bg-card)',
              border: '2px solid var(--primary-accent)',
              textAlign: 'center',
              padding: '2rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCertModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              <X size={22} />
            </button>

            <ShieldCheck size={42} color="var(--primary-accent)" style={{ margin: '0 auto 1rem auto' }} />
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--badge-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Government of India • Intellectual Property India
            </div>
            <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0 1rem 0' }}>
              Certificate of Registration of Design
            </h3>
            
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', textAlign: 'left', marginBottom: '1.25rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Design Title: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>Vehicle Detection Device for No Parking Area</span>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Registration Number: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>Design No: 441014-001</span>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Classification: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>Class 10-06</span>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Issue Date: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>December 2024</span>
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Co-Inventor: </strong>
                <span style={{ color: 'var(--text-secondary)' }}>Parul Nakhate</span>
              </div>
            </div>

            <button
              onClick={() => setShowCertModal(false)}
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.75rem' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
