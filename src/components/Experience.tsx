import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Terminal, Briefcase } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
  techs: string[];
}

export const Experience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      company: 'Fujitsu',
      role: 'Data & AI Trainee',
      duration: 'March 2026 - Present',
      location: 'Pune, India',
      bullets: [
        'Currently undergoing practical training in Artificial Intelligence, Machine Learning, and Agentic AI, with hands-on Exposure to AI fundamentals, LLMs, prompt engineering, and AI-based workflows.',
        'Gaining practical experience with Langflow and learning to design and integrate AI/LLM-based workflows using multiple agents.',
        'Working on a PDF-to-Excel automation POC using a multi-agent approach, where PDF text, tables, images, and visual evidence is extracted, analyzed against an Excel checklist, intelligently mapped to predefined Excel fields, and used to generate the final Excel output.',
        'Currently enhancing the POC with semantic data analysis, intelligent mapping, validation, and agent retry mechanisms For reliable document automation.'
      ],
      techs: ['Python', 'Machine Learning', 'Deep Learning', 'Model Optimization', 'Predictive Analytics']
    },
    {
      id: 2,
      company: 'Kustodian.life',
      role: 'Software Developer Intern',
      duration: 'Feb 2025 – July 2025',
      location: 'Bengaluru, India',
      bullets: [
        'Contributed to both frontend and backend development for internal and client-facing applications, ensuring smooth feature delivery and scalable performance.',
        'Developed REST APIs using FastAPI to enable secure and efficient data communication between services.',
        'Integrated NoSQL databases to support scalable data management and improve backend data flow.',
        'Built responsive and dynamic UI components using React.js and Vite, enhancing user experience and interface usability.',
        'Designed and deployed an automated email agent using n8n, leveraging LLM integration to read, understand, and respond to emails intelligently and in real time.',
        'Collaborated with cross-functional teams to troubleshoot issues, improve code quality, and align technical solutions with project requirements.',
        'Gained hands-on experience in foundational system design and scalable architecture principles, improving application structure and maintainability.'
      ],
      techs: ['FastAPI', 'React.js', 'Vite', 'n8n', 'LLM Integration', 'NoSQL', 'REST APIs', 'System Design']
    },
    {
      id: 3,
      company: 'TCSiON',
      role: 'Intern',
      duration: 'Feb 2024 – May 2024',
      location: 'Pune, India',
      bullets: [
        'Developed an NLP-based sentiment analysis model, improving feedback classification accuracy by 92% across large text datasets.',
        'Built the model to classify reviews into Positive, Negative, and Neutral categories, supporting both small and large-scale input volumes.',
        'Enhanced model performance through hyperparameter tuning, feature engineering, and algorithm optimization, resulting in significantly higher accuracy and reduced execution time.',
        'Optimized code efficiency and improved data preprocessing, ensuring smoother pipeline execution and faster inference results.',
        'Strengthened understanding of NLP workflows, supervised learning, text vectorization, and model evaluation metrics.'
      ],
      techs: ['Python', 'NLP', 'Sentiment Analysis', 'Hyperparameter Tuning', 'Feature Engineering', 'Text Vectorization']
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 10 }}>
      <div className="section-container">
        {/* Section Title */}
        <div style={{ marginBottom: '60px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}></span>
            <span className="gradient-text-violet">Professional Journey</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--accent-violet)' }} />
        </div>

        <div style={{ position: 'relative', paddingLeft: '20px' }} className="timeline-container">
          {/* Vertical line of timeline */}
          <div
            style={{
              position: 'absolute',
              left: '6px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-violet))',
              opacity: 0.3,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ position: 'relative', paddingLeft: '24px' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline node dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-20px',
                    top: '8px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: hoveredIndex === index ? 'var(--accent-cyan)' : 'var(--bg-dark)',
                    border: `2px solid ${hoveredIndex === index ? '#ffffff' : 'var(--accent-violet)'}`,
                    boxShadow: hoveredIndex === index ? 'var(--glow-cyan)' : 'none',
                    zIndex: 20,
                    transition: 'var(--transition-smooth)',
                  }}
                />

                {/* Job Card */}
                <div
                  className="premium-card"
                  style={{
                    borderLeft: hoveredIndex === index
                      ? '3px solid var(--accent-cyan)'
                      : '1px solid var(--border-color)',
                    background: hoveredIndex === index
                      ? 'var(--bg-surface-hover)'
                      : 'var(--bg-surface)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                        {job.role}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--accent-cyan)',
                          fontFamily: 'var(--font-tech)',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          marginTop: '4px',
                        }}
                      >
                        <Briefcase size={14} />
                        <span>{job.company}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '6px',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                      }}
                      className="job-meta"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={12} />
                        <span>{job.duration}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <MapPin size={12} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points description */}
                  <ul
                    style={{
                      listStyleType: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      marginBottom: '20px',
                    }}
                  >
                    {job.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        style={{
                          position: 'relative',
                          paddingLeft: '16px',
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                          color: 'var(--text-secondary)',
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
                            backgroundColor: 'var(--accent-violet)',
                          }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags used */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '6px' }}>
                      <Terminal size={12} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)' }}>
                        Stack:
                      </span>
                    </div>
                    {job.techs.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .job-meta {
            align-items: flex-start !important;
            margin-top: 5px;
          }
        }
      `}</style>
    </section>
  );
};
