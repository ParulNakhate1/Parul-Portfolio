import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Brain, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Academic Background & <span className="highlight-text">Focus</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of my education, technical interest areas, and hands-on AI achievements.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          
          {/* Bio card */}
          <div className="card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
              Passionate AI & Machine Learning Graduate
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.98rem', lineHeight: 1.6 }}>
              {personalInfo.bio}
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Pursuing B.Tech in Computer Science and Engineering (AIML) at <strong>Shri Ramdeobaba College of Engineering and Management, Nagpur</strong> with a strong academic CGPA of <strong>8.34 / 10</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={17} color="var(--primary-accent)" />
                <span>Experience with OpenAI GPT models & NLP intent classification (91% accuracy)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={17} color="var(--primary-accent)" />
                <span>Computer vision damage detection & spatial mapping at MRSAC (Govt of MH)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={17} color="var(--primary-accent)" />
                <span>Co-inventor of registered Indian Design Patent (Design No: 441014-001)</span>
              </div>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div className="card" style={{ padding: '1.25rem' }}>
              <Brain size={22} color="var(--primary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Machine Learning</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Building predictive models using Python, PyTorch, Scikit-learn, and NumPy.
              </p>
            </div>

            <div className="card" style={{ padding: '1.25rem' }}>
              <ShieldCheck size={22} color="var(--secondary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Speech Biometrics</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                200-dimensional MFCC vectors & GMM-UBM models with 89% speaker verification.
              </p>
            </div>

            <div className="card" style={{ padding: '1.25rem' }}>
              <Award size={22} color="var(--primary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Hardware Patent</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Issued Design Patent for Vehicle Detection Device in restricted parking zones.
              </p>
            </div>

            <div className="card" style={{ padding: '1.25rem' }}>
              <GraduationCap size={22} color="var(--secondary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>B.Tech CSE AIML</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Consistent academic standing (8.34 CGPA) at Shri Ramdeobaba College (2022-2026).
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
