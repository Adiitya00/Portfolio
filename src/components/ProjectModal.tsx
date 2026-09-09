import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, HelpCircle, Layers, Star } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  category: string;
  shortDesc: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  techs: string[];
  github?: string;
  demo?: string;
  isFeatured?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(3, 3, 5, 0.85)',
              backdropFilter: 'blur(10px)',
            }}
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              background: 'var(--bg-surface)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              borderRadius: '16px',
              padding: '30px',
              overflowY: 'auto',
              boxShadow: 'var(--glow-cyan), 0 20px 40px -15px rgba(0,0,0,0.8)',
              zIndex: 10,
            }}
            className="custom-scrollbar modal-card"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
              className="hover-target"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.color = 'var(--accent-cyan)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: '24px', paddingRight: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-cyan)',
                    border: '1px solid var(--border-cyan)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(0, 229, 255, 0.05)',
                  }}
                >
                  {project.category}
                </span>
                {project.isFeatured && (
                  <span
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-violet)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Star size={12} fill="var(--accent-violet)" /> Featured Project
                  </span>
                )}
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{project.name}</h2>
            </div>

            {/* Body Blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Problem */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ marginTop: '3px' }}>
                  <HelpCircle size={18} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '6px' }}>
                    The Problem
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{project.problem}</p>
                </div>
              </div>

              {/* Solution */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ marginTop: '3px' }}>
                  <Cpu size={18} style={{ color: 'var(--accent-violet)' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '6px' }}>
                    The Solution
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{project.solution}</p>
                </div>
              </div>

              {/* Architecture Pipeline Flow */}
              {project.architecture && project.architecture.length > 0 && (
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ marginTop: '3px' }}>
                    <Layers size={18} style={{ color: 'var(--accent-cyan)' }} />
                  </div>
                  <div style={{ width: '100%' }}>
                    <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '10px' }}>
                      Pipeline Architecture
                    </h4>
                    <div
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        overflowX: 'auto',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '10px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {project.architecture.map((step, idx) => (
                          <React.Fragment key={idx}>
                            <span
                              style={{
                                border: '1px solid rgba(255,255,255,0.08)',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                background: idx === 0 || idx === project.architecture.length - 1 ? 'rgba(0, 229, 255, 0.05)' : 'rgba(255,255,255,0.02)',
                                color: idx === 0 || idx === project.architecture.length - 1 ? 'var(--accent-cyan)' : '#ffffff',
                              }}
                            >
                              {step}
                            </span>
                            {idx < project.architecture.length - 1 && (
                              <span style={{ color: 'var(--accent-violet)', fontWeight: 'bold' }}>➔</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Key Functionality & Impact
                </h4>
                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        position: 'relative',
                        paddingLeft: '16px',
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '8px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-cyan)',
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Technologies Integrated
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.techs.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '20px',
                  marginTop: '10px',
                }}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-color)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                    className="hover-target"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <span>View Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      background: 'var(--accent-cyan)',
                      color: '#030305',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                    }}
                    className="hover-target"
                  >
                    <span>Launch Application</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
