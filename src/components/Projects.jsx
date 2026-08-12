import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { FolderGit2, CheckCircle2, X, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={15} />
            <span>Academic Projects</span>
          </div>
          <h2 className="section-title">
            Featured <span className="highlight-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Hands-on AI systems created during my B.Tech studies with deep learning, NLP, and computer vision.
          </p>
        </div>

        <div className="grid-2">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--badge-bg)',
                      color: 'var(--badge-text)',
                    }}
                  >
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{project.period}</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{project.title}</h3>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                  {project.shortDesc}
                </p>

                {/* Key Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {project.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        padding: '0.5rem 0.3rem',
                        borderRadius: 'var(--radius-sm)',
                        textAlign: 'center',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary-accent)' }}>
                        {h.metric}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
                        {h.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        padding: '0.15rem 0.5rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.55rem 0.9rem', fontSize: '0.88rem' }}
                >
                  <span>Project Overview</span>
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      {selectedProject && (
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
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="card"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              backgroundColor: 'var(--bg-card)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
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

            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--badge-bg)',
                color: 'var(--badge-text)',
              }}
            >
              {selectedProject.category} • {selectedProject.period}
            </span>

            <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
              {selectedProject.title}
            </h2>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-accent)', marginBottom: '0.5rem' }}>
                Key Technical Details
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedProject.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-accent)', marginBottom: '0.5rem' }}>
                Tech Stack
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.3rem 0.7rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 500,
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
