import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Layers, Cpu, Wrench } from 'lucide-react';

export default function Skills() {
  // Chai aur React pattern: useState for tab filter
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'webTech', label: 'Web Tech' },
    { id: 'libraries', label: 'Libraries & Frameworks' },
    { id: 'domains', label: 'Domains' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={15} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">
            My <span className="highlight-text">Skill Set</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I have worked with during my B.Tech studies and internships.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
                border: '1px solid var(--border-color)',
                backgroundColor: activeTab === tab.id ? 'var(--primary-accent)' : 'var(--bg-primary)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--text-secondary)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'languages') && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Code2 size={18} color="var(--primary-accent)" />
                <span>Programming Languages</span>
              </h3>
              <div className="grid-4">
                {skillsData.languages.map((item, idx) => (
                  <div key={idx} className="card" style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: '0.4rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Proficiency: {item.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Web Tech */}
          {(activeTab === 'all' || activeTab === 'webTech') && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Layers size={18} color="var(--secondary-accent)" />
                <span>Web Technologies</span>
              </h3>
              <div className="grid-3">
                {skillsData.webTech.map((item, idx) => (
                  <div key={idx} className="card" style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: '0.4rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Proficiency: {item.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Libraries & Frameworks */}
          {(activeTab === 'all' || activeTab === 'libraries') && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Cpu size={18} color="var(--primary-accent)" />
                <span>Libraries & AI Frameworks</span>
              </h3>
              <div className="grid-4">
                {skillsData.librariesAndFrameworks.map((item, idx) => (
                  <div key={idx} className="card" style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Domains */}
          {(activeTab === 'all' || activeTab === 'domains') && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Layers size={18} color="var(--secondary-accent)" />
                <span>Core Domains</span>
              </h3>
              <div className="grid-2">
                {skillsData.domains.map((item, idx) => (
                  <div key={idx} className="card" style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-accent)', marginBottom: '0.35rem' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Wrench size={18} color="var(--primary-accent)" />
                <span>Tools & Platforms</span>
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {skillsData.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    🔹 {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
