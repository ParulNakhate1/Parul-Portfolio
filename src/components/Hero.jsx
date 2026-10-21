import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon } from './BrandIcons';
import { Mail, MapPin, ArrowRight, Sparkles, Phone, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.35rem 1rem',
              backgroundColor: 'var(--badge-bg)',
              color: 'var(--badge-text)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}
          >
            <Sparkles size={15} />
            <span>AI & ML Engineer • Salesforce Developer • B.Tech CSE (AIML) 2026</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              lineHeight: 1.2,
              marginBottom: '1.1rem',
              fontWeight: 700,
            }}
          >
            Hello, I'm <span className="highlight-text">{personalInfo.name}</span> 👋
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.02rem, 1.8vw, 1.18rem)',
              color: 'var(--text-secondary)',
              maxWidth: '760px',
              margin: '0 auto 1.75rem auto',
              lineHeight: 1.65,
            }}
          >
            B.Tech Computer Science & Engineering (AIML) student with hands-on expertise in <strong style={{ color: 'var(--text-primary)' }}>Salesforce Development</strong> (Apex, LWC, Flows, SFDX), <strong style={{ color: 'var(--text-primary)' }}>Computer Vision</strong>, <strong style={{ color: 'var(--text-primary)' }}>Speech Processing</strong>, and <strong style={{ color: 'var(--text-primary)' }}>NLP</strong>. Proven experience delivering enterprise CRM automation at Andolgy Infotech and state government autonomous AI platforms at MRSAC.
          </p>

          {/* Contact Details Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginBottom: '2rem',
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={16} color="var(--primary-accent)" />
              <span>{personalInfo.location}</span>
            </div>
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
            >
              <Phone size={16} color="var(--primary-accent)" />
              <span>{personalInfo.phone}</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
            >
              <Mail size={16} color="var(--primary-accent)" />
              <span>{personalInfo.email}</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>
            <a href="#experience" className="btn btn-secondary">
              <Cloud size={17} color="var(--primary-accent)" />
              <span>Experience & Roles</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              title="LinkedIn Profile"
            >
              <LinkedInIcon size={18} color="#0a66c2" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Key Stats Row */}
          <div className="grid-4">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="card" style={{ padding: '1.25rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-accent)', marginBottom: '0.2rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
