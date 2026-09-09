import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Settings, Star } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

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

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filters = ['All', 'AI & ML', 'Web Dev', 'Automation'];

  const projects: Project[] = [
    {
      id: 1,
      name: 'RAG Chatbot with Vector Search',
      category: 'AI & ML',
      shortDesc: 'State-of-the-art Retrieval-Augmented Generation chatbot combining Pinecone similarity search with LLM reasoning.',
      problem: 'Relying purely on LLM parametric memory results in hallucinations and a lack of specific context when querying proprietary domain documents (e.g., custom PDFs).',
      solution: 'Developed a robust RAG orchestration workflow. Documents are processed, chunked, and mapped into high-dimensional vector embeddings in Pinecone. Queries execute similarity searches against this store, inserting context into prompts for contextually accurate LLM synthesis.',
      architecture: ['Document Upload', 'Chunking & Embedding', 'Pinecone Vector Store', 'LangChain Orchestrator', 'LLM reasoning', 'Response Feed'],
      features: [
        'Streamlit-powered interactive interface for uploading documents in real-time.',
        'High-performance Pinecone similarity matching to resolve exact user query intent.',
        'Optimized document splitting and retrieval logic to lower API latency and overhead.',
        'Seamless LangChain prompt engineering and orchestration wrappers.'
      ],
      techs: ['Python', 'LangChain', 'Pinecone (Vector DB)', 'Streamlit', 'LLM Integration', 'Embeddings'],
      github: 'https://github.com/Adiitya00',
      isFeatured: true,
    },
    {
      id: 2,
      name: 'Food Delivery Sentiment Analyzer',
      category: 'AI & ML',
      shortDesc: 'An Android food ordering app combined with a Python NLP sentiment classification engine for smart recommendations.',
      problem: 'Generic menus offer no personalization, leading to decision paralysis. Normal rating averages do not display specific text sentiment cues.',
      solution: 'Created an Android client integrating a Python ML backend. Customer text reviews undergo NLP processing to classify reviews (Positive, Negative, Neutral). Highly-rated dishes are recommended based on qualitative sentiment analysis.',
      architecture: ['Android Application', 'REST API Endpoint', 'Python NLP Classifier', 'Dish Recommendation Engine'],
      features: [
        'Model classifies feedback reviews to extract user food enjoyment metrics.',
        'Recommends dishes and food combinations dynamically based on sentiment feedback.',
        'Integrates location-based food insights and nutritional profiles.'
      ],
      techs: ['Android Development', 'Python', 'NLP', 'Sentiment Analysis', 'REST APIs', 'Machine Learning'],
      github: 'https://github.com/Adiitya00',
    },
    {
      id: 3,
      name: 'Full-Stack E-Commerce Platform',
      category: 'Web Dev',
      shortDesc: 'A scalable web shopping application built using Django, PostgreSQL, and REST APIs.',
      problem: 'A lack of clean modularity makes standard e-commerce builds difficult to scale, secure, and integrate with third-party payment gateways.',
      solution: 'Designed and implemented an MVC full-stack application using Django ORM and Django REST Framework, ensuring structured role management, checkout flows, and catalog filters.',
      architecture: ['Frontend Templates', 'REST API Layers', 'Django MVC Engine', 'PostgreSQL Database'],
      features: [
        'Implements secure user authentication, token sessions, and vendor role splits.',
        'Simulates checkout payment flows, shopping carts, and order history catalogs.',
        'Features database schemas mapping orders, reviews, products, and dynamic stock inventories.'
      ],
      techs: ['Django', 'Django REST Framework', 'PostgreSQL', 'Django ORM', 'REST APIs', 'SQL'],
      github: 'https://github.com/Adiitya00',
    },
    {
      id: 4,
      name: 'Automated AI Email Agent',
      category: 'Automation',
      shortDesc: 'An automated email reasoning worker designed in n8n leveraging LLMs to understand and reply to messages.',
      problem: 'Manual client communication pipelines require hours of human triage, slowing response rates and customer support speeds.',
      solution: 'Engineered an n8n visual flow that hooks incoming emails, runs them through an LLM reasoning node to decipher sentiment, constructs professional draft replies, and queues them.',
      architecture: ['Email Hook', 'n8n Workflow', 'LLM sentiment parsing', 'Automated Draft Reply'],
      features: [
        'Reads and categorizes email intents automatically.',
        'Leverages LLM system prompts to write contextually accurate responses.',
        'Reduces business lead turnaround times by operating in real time.'
      ],
      techs: ['n8n', 'LLM Integration', 'Automation Agents', 'API Workflows', 'Email Automations'],
      github: 'https://github.com/Adiitya00',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 10 }}>
      <div className="section-container">
        {/* Section Title */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '50px',
            gap: '20px',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}></span>
              <span className="gradient-text-cyan">Featured Deployments</span>
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-cyan)' }} />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }} className="filters-container">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: activeFilter === filter ? 'var(--accent-cyan)' : 'var(--border-color)',
                  background: activeFilter === filter ? 'rgba(0, 229, 255, 0.08)' : 'rgba(255,255,255,0.01)',
                  color: activeFilter === filter ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                }}
                className="hover-target"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Layout (Always visible if filter matches or if filter is All) */}
        {filteredProjects.some((p) => p.isFeatured) && (
          <div style={{ marginBottom: '40px' }}>
            {projects
              .filter((p) => p.isFeatured)
              .map((proj) => {
                // Check if featured project fits current filter
                if (activeFilter !== 'All' && proj.category !== activeFilter) return null;

                return (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    onClick={() => handleOpenModal(proj)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '30px',
                      cursor: 'pointer',
                    }}
                    className="premium-card featured-project-card"
                  >
                    {/* Left: Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: 'var(--accent-violet)',
                            fontFamily: 'var(--font-tech)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                          }}
                        >
                          <Star size={12} fill="var(--accent-violet)" />
                          Featured System
                        </span>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                        <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                          {proj.category}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{proj.name}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                        {proj.shortDesc}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                        {proj.techs.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          marginTop: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--accent-cyan)',
                          fontFamily: 'var(--font-tech)',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                        }}
                      >
                        <span>Explore Engineering Case Study</span>
                        <ArrowRight size={16} className="arrow-icon" style={{ transition: 'transform 0.3s' }} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        )}

        {/* Regular Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredProjects
            .filter((p) => !p.isFeatured)
            .map((proj, index) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleOpenModal(proj)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                className="premium-card hover-target"
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                      {proj.category}
                    </span>
                    {proj.category === 'Automation' ? (
                      <Settings size={16} style={{ color: 'var(--text-muted)' }} />
                    ) : (
                      <Code size={16} style={{ color: 'var(--text-muted)' }} />
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{proj.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {proj.shortDesc}
                  </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {proj.techs.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-badge" style={{ fontSize: '0.7rem', padding: '3px 8px' }}>
                        {tech}
                      </span>
                    ))}
                    {proj.techs.length > 4 && (
                      <span className="tech-badge" style={{ fontSize: '0.7rem', padding: '3px 8px', color: 'var(--text-muted)' }}>
                        +{proj.techs.length - 4} more
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} className="arrow-icon" style={{ transition: 'transform 0.3s' }} />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Styled JSX for hovers */}
      <style>{`
        @media (min-width: 992px) {
          .featured-project-card {
            grid-template-columns: 1fr !important;
            padding: 40px !important;
          }
        }
        .premium-card:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>

      {/* Project details popup modal */}
      <ProjectModal project={selectedProject} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
