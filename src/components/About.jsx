import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import { GraduationCap, Brain, Award, CheckCircle2, ShieldCheck, Cloud } from 'lucide-react';

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
            A snapshot of my dual specialization in AI/ML engineering, enterprise Salesforce CRM development, and research achievements.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          
          {/* Bio card */}
          <div className="card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
              AI Engineer & Salesforce Developer
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.98rem', lineHeight: 1.6 }}>
              {personalInfo.bio}
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Pursuing B.Tech in Computer Science and Engineering (AIML) at <strong>{educationData.institution}</strong> with an outstanding academic CGPA of <strong>{educationData.cgpa}</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={17} color="var(--primary-accent)" style={{ flexShrink: 0 }} />
                <span>Salesforce Developer Intern at Andolgy Infotech (Apex, LWC, Flows, SFDX, REST APIs)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={17} color="var(--primary-accent)" style={{ flexShrink: 0 }} />
                <span>AI & ML Intern at MRSAC, Govt of Maharashtra (Smart Roadwatch computer vision)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={17} color="var(--primary-accent)" style={{ flexShrink: 0 }} />
                <span>Co-inventor of registered Indian Design Patent (Design No: 441014-001, Class 10-06)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={17} color="var(--primary-accent)" style={{ flexShrink: 0 }} />
                <span>Voice Biometrics & OpenAI GPT telebanking systems (89% - 91% accuracy)</span>
              </div>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="grid-2" style={{ gap: '1rem' }}>
            <div className="card" style={{ padding: '1.25rem' }}>
              <Cloud size={22} color="var(--primary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Salesforce CRM</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Apex Triggers, SOQL/SOSL, Flow Builder, LWC & Aura component development, SFDX CI/CD.
              </p>
            </div>

            <div className="card" style={{ padding: '1.25rem' }}>
              <Brain size={22} color="var(--secondary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>AI & Computer Vision</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                YOLO object detection, spatial mapping, OpenCV, real-time traffic density optimization.
              </p>
            </div>

            <div className="card" style={{ padding: '1.25rem' }}>
              <ShieldCheck size={22} color="var(--primary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Speech & NLP</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                200-dimensional MFCC vectors, GMM-UBM models, and OpenAI GPT conversational pipelines.
              </p>
            </div>

            <div className="card" style={{ padding: '1.25rem' }}>
              <Award size={22} color="var(--secondary-accent)" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>Patent & Academic</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Issued Design Patent (441014-001) with {educationData.cgpa} CGPA at Shri Ramdeobaba College.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
