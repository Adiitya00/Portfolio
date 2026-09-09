// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Network, Database, Cpu, Code } from 'lucide-react';

// interface TechNode {
//   id: string;
//   name: string;
//   category: 'ai' | 'framework' | 'infra';
//   x: number; // percentage width
//   y: number; // percentage height
//   description: string;
//   connections: string[]; // ids of connected nodes
// }

// export const TechStack: React.FC = () => {
//   const [activeNode, setActiveNode] = useState<string | null>(null);

//   const nodes: TechNode[] = [
//     // Top Level: AI/GenAI Orchestrators
//     { id: 'rag', name: 'RAG Systems', category: 'ai', x: 25, y: 15, description: 'Similarity search architectures with vector stores to expand LLM context windows.', connections: ['pinecone', 'langchain', 'python'] },
//     { id: 'agents', name: 'AI Agents', category: 'ai', x: 50, y: 15, description: 'Intelligent automation loops using tool calls and feedback iterations.', connections: ['n8n', 'langchain', 'python'] },
//     { id: 'llms', name: 'LLM Integration', category: 'ai', x: 75, y: 15, description: 'Cognitive reasoning interfaces mapping token contexts and model prompts.', connections: ['langchain', 'python'] },

//     // Middle Level: Frameworks / Core Logic
//     { id: 'langchain', name: 'LangChain', category: 'framework', x: 35, y: 50, description: 'Orchestration wrapper building prompt bindings, chains, and vector indexes.', connections: ['rag', 'agents', 'llms', 'pinecone', 'fastapi'] },
//     { id: 'python', name: 'Python Core', category: 'framework', x: 50, y: 50, description: 'Primary language powering ML algorithms, data pipelines, and training environments.', connections: ['rag', 'agents', 'llms', 'pytorch', 'sklearn', 'fastapi', 'django'] },
//     { id: 'pytorch', name: 'Deep Learning', category: 'framework', x: 65, y: 50, description: 'PyTorch & TensorFlow matrix tensors compiling neural layers and optimizations.', connections: ['python', 'llms'] },
//     { id: 'sklearn', name: 'scikit-learn', category: 'framework', x: 80, y: 50, description: 'Supervised predictive modelling, feature extractions, and datasets analysis.', connections: ['python'] },

//     // Bottom Level: Infra & Data Pipelines
//     { id: 'pinecone', name: 'Pinecone Vector DB', category: 'infra', x: 20, y: 85, description: 'High-performance cloud vector indexing matching cosine document weights.', connections: ['rag', 'langchain'] },
//     { id: 'fastapi', name: 'FastAPI / Django', category: 'infra', x: 45, y: 85, description: 'Async REST API communications, request controls, and backend integrations.', connections: ['langchain', 'python', 'postgresql'] },
//     { id: 'postgresql', name: 'PostgreSQL / MySQL', category: 'infra', x: 70, y: 85, description: 'Relational storage engines enforcing data transactions and indexing parameters.', connections: ['fastapi', 'python'] },
//     { id: 'n8n', name: 'n8n Workflow', category: 'infra', x: 85, y: 85, description: 'Visual automation logic executing agentic operations and webhooks.', connections: ['agents'] }
//   ];

//   // Core helper to find lines connecting nodes
//   const getConnections = () => {
//     const lines: Array<{ from: TechNode; to: TechNode; isActive: boolean }> = [];
//     nodes.forEach((fromNode) => {
//       fromNode.connections.forEach((toId) => {
//         const toNode = nodes.find((n) => n.id === toId);
//         if (toNode) {
//           const isActive = activeNode === fromNode.id || activeNode === toNode.id;
//           // Avoid duplicate lines for bidirectional connection declarations
//           if (!lines.some((l) => (l.from.id === toNode.id && l.to.id === fromNode.id))) {
//             lines.push({ from: fromNode, to: toNode, isActive });
//           }
//         }
//       });
//     });
//     return lines;
//   };

//   const activeNodeInfo = nodes.find((n) => n.id === activeNode);

//   return (
//     <section id="tech-stack-section" style={{ position: 'relative', zIndex: 10 }}>
//       <div className="section-container" style={{ paddingBottom: '50px' }}>
//         {/* Section Title */}
//         <div style={{ marginBottom: '50px', textAlign: 'left' }}>
//           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
//             <span style={{ color: 'rgba(255,255,255,0.4)' }}></span>
//             <span className="gradient-text-cyan">Technical Ecosystem</span>
//           </h2>
//           <div style={{ width: '60px', height: '3px', background: 'var(--accent-cyan)' }} />
//         </div>

//         {/* Outer Grid */}
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr',
//             gap: '40px',
//             alignItems: 'center',
//           }}
//           className="ecosystem-grid"
//         >
//           {/* Left: Connected Visual Map */}
//           <div
//             style={{
//               position: 'relative',
//               width: '100%',
//               height: '400px',
//               background: 'rgba(255,255,255,0.01)',
//               border: '1px solid var(--border-color)',
//               borderRadius: '12px',
//               padding: '10px',
//               overflow: 'hidden',
//             }}
//           >
//             {/* SVG Link lines between nodes */}
//             <svg
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 pointerEvents: 'none',
//               }}
//             >
//               {getConnections().map((line, i) => (
//                 <line
//                   key={i}
//                   x1={`${line.from.x}%`}
//                   y1={`${line.from.y}%`}
//                   x2={`${line.to.x}%`}
//                   y2={`${line.to.y}%`}
//                   stroke={
//                     line.isActive 
//                       ? 'var(--accent-cyan)' 
//                       : 'rgba(255, 255, 255, 0.04)'
//                   }
//                   strokeWidth={line.isActive ? 2 : 1}
//                   style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
//                 />
//               ))}
//             </svg>

//             {/* Render Nodes */}
//             {nodes.map((node) => {
//               const isNodeActive = activeNode === node.id;
//               const isNodeHighlighted = 
//                 activeNode === null || 
//                 isNodeActive || 
//                 node.connections.includes(activeNode) ||
//                 nodes.find(n => n.id === activeNode)?.connections.includes(node.id);

//               return (
//                 <div
//                   key={node.id}
//                   onMouseEnter={() => setActiveNode(node.id)}
//                   onMouseLeave={() => setActiveNode(null)}
//                   style={{
//                     position: 'absolute',
//                     left: `${node.x}%`,
//                     top: `${node.y}%`,
//                     transform: 'translate(-50%, -50%)',
//                     zIndex: isNodeActive ? 30 : 20,
//                     cursor: 'pointer',
//                     transition: 'opacity 0.3s',
//                     opacity: isNodeHighlighted ? 1 : 0.25,
//                   }}
//                   className="hover-target"
//                 >
//                   <motion.div
//                     animate={{
//                       y: isNodeActive ? -4 : 0,
//                       scale: isNodeActive ? 1.08 : 1,
//                     }}
//                     style={{
//                       padding: '8px 14px',
//                       borderRadius: '6px',
//                       border: `1.5px solid ${
//                         isNodeActive 
//                           ? 'var(--accent-cyan)' 
//                           : node.category === 'ai' 
//                             ? 'rgba(0, 229, 255, 0.15)' 
//                             : node.category === 'framework'
//                               ? 'rgba(139, 92, 246, 0.15)'
//                               : 'rgba(255, 255, 255, 0.1)'
//                       }`,
//                       background: isNodeActive
//                         ? 'rgba(0, 229, 255, 0.1)'
//                         : 'var(--bg-dark)',
//                       boxShadow: isNodeActive 
//                         ? 'var(--glow-cyan)' 
//                         : 'none',
//                       color: isNodeActive 
//                         ? '#ffffff' 
//                         : 'var(--text-secondary)',
//                       fontFamily: 'var(--font-tech)',
//                       fontSize: '0.85rem',
//                       fontWeight: 600,
//                       whiteSpace: 'nowrap',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '6px',
//                       transition: 'border-color 0.3s, background-color 0.3s',
//                     }}
//                   >
//                     {node.category === 'ai' && <Network size={12} style={{ color: 'var(--accent-cyan)' }} />}
//                     {node.category === 'framework' && <Cpu size={12} style={{ color: 'var(--accent-violet)' }} />}
//                     {node.category === 'infra' && <Database size={12} style={{ color: 'var(--text-muted)' }} />}
//                     <span>{node.name}</span>
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Right: Technical Details block */}
//           <div
//             style={{
//               padding: '24px',
//               borderRadius: '12px',
//               background: 'var(--bg-surface)',
//               border: '1px solid var(--border-color)',
//               minHeight: '160px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               textAlign: 'left',
//             }}
//           >
//             {activeNodeInfo ? (
//               <motion.div
//                 initial={{ opacity: 0, x: 10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.2 }}
//                 style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                   <span
//                     style={{
//                       fontFamily: 'var(--font-tech)',
//                       fontSize: '0.75rem',
//                       textTransform: 'uppercase',
//                       color: 
//                         activeNodeInfo.category === 'ai' 
//                           ? 'var(--accent-cyan)' 
//                           : activeNodeInfo.category === 'framework'
//                             ? 'var(--accent-violet)'
//                             : 'var(--text-secondary)',
//                     }}
//                   >
//                     {activeNodeInfo.category === 'ai' ? 'Core AI Strategy' : activeNodeInfo.category === 'framework' ? 'Logic Framework' : 'Infrastructure & DB'}
//                   </span>
//                 </div>
//                 <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700 }}>
//                   {activeNodeInfo.name}
//                 </h3>
//                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
//                   {activeNodeInfo.description}
//                 </p>
//               </motion.div>
//             ) : (
//               <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
//                 <Code size={24} style={{ margin: '0 auto 8px', opacity: 0.5 }} />
//                 <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-tech)' }}>
//                   Hover over the ecosystem nodes to analyze integration pathways.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (min-width: 992px) {
//           .ecosystem-grid {
//             grid-template-columns: 1.2fr 0.8fr !important;
//             gap: 40px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Cpu, Code } from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: 'ai' | 'framework' | 'infra';
  x: number;
  y: number;
  description: string;
  connections: string[];
}

export const TechStack: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: TechNode[] = [
    // =========================================================
    // TOP ROW
    // =========================================================

    {
      id: 'rag',
      name: 'RAG Systems',
      category: 'ai',
      x: 18,
      y: 15,
      description:
        'Similarity search architectures with vector stores to expand LLM context windows.',
      connections: ['pinecone', 'langchain', 'python'],
    },

    {
      id: 'agents',
      name: 'AI Agents',
      category: 'ai',
      x: 50,
      y: 15,
      description:
        'Intelligent automation loops using tool calls and feedback iterations.',
      connections: ['n8n', 'langchain', 'python'],
    },

    {
      id: 'llms',
      name: 'LLM Integration',
      category: 'ai',
      x: 82,
      y: 15,
      description:
        'Cognitive reasoning interfaces mapping token contexts and model prompts.',
      connections: ['langchain', 'python'],
    },

    // =========================================================
    // MIDDLE ROW
    // =========================================================

    {
      id: 'langchain',
      name: 'LangChain',
      category: 'framework',
      x: 14,
      y: 50,
      description:
        'Orchestration wrapper building prompt bindings, chains, and vector indexes.',
      connections: ['rag', 'agents', 'llms', 'pinecone', 'fastapi'],
    },

    {
      id: 'python',
      name: 'Python Core',
      category: 'framework',
      x: 39,
      y: 50,
      description:
        'Primary language powering ML algorithms, data pipelines, and training environments.',
      connections: [
        'rag',
        'agents',
        'llms',
        'pytorch',
        'sklearn',
        'fastapi',
      ],
    },

    {
      id: 'pytorch',
      name: 'Deep Learning',
      category: 'framework',
      x: 64,
      y: 50,
      description:
        'PyTorch & TensorFlow matrix tensors compiling neural layers and optimizations.',
      connections: ['python', 'llms'],
    },

    {
      id: 'sklearn',
      name: 'scikit-learn',
      category: 'framework',
      x: 88,
      y: 50,
      description:
        'Supervised predictive modelling, feature extractions, and datasets analysis.',
      connections: ['python'],
    },

    // =========================================================
    // BOTTOM ROW
    // =========================================================

    {
      id: 'pinecone',
      name: 'Pinecone Vector DB',
      category: 'infra',
      x: 14,
      y: 85,
      description:
        'High-performance cloud vector indexing matching cosine document weights.',
      connections: ['rag', 'langchain'],
    },

    {
      id: 'fastapi',
      name: 'FastAPI / Django',
      category: 'infra',
      x: 39,
      y: 85,
      description:
        'Async REST API communications, request controls, and backend integrations.',
      connections: ['langchain', 'python', 'postgresql'],
    },

    {
      id: 'postgresql',
      name: 'PostgreSQL / MySQL',
      category: 'infra',
      x: 64,
      y: 85,
      description:
        'Relational storage engines enforcing data transactions and indexing parameters.',
      connections: ['fastapi', 'python'],
    },

    {
      id: 'n8n',
      name: 'n8n Workflow',
      category: 'infra',
      x: 88,
      y: 85,
      description:
        'Visual automation logic executing agentic operations and webhooks.',
      connections: ['agents'],
    },
  ];

  // ===========================================================
  // BUILD CONNECTION LIST
  // ===========================================================

  const getConnections = () => {
    const lines: Array<{
      from: TechNode;
      to: TechNode;
      isActive: boolean;
    }> = [];

    nodes.forEach((fromNode) => {
      fromNode.connections.forEach((toId) => {
        const toNode = nodes.find((node) => node.id === toId);

        if (!toNode) return;

        const duplicate = lines.some(
          (line) =>
            line.from.id === toNode.id &&
            line.to.id === fromNode.id
        );

        if (duplicate) return;

        const isActive =
          activeNode === fromNode.id ||
          activeNode === toNode.id;

        lines.push({
          from: fromNode,
          to: toNode,
          isActive,
        });
      });
    });

    return lines;
  };

  const activeNodeInfo = nodes.find(
    (node) => node.id === activeNode
  );

  return (
    <section
      id="tech-stack-section"
      style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
      }}
    >
      <div
        className="section-container"
        style={{
          paddingBottom: '60px',
        }}
      >
        {/* =====================================================
            TITLE
        ====================================================== */}

        <div
          style={{
            marginBottom: '50px',
            textAlign: 'left',
          }}
        >
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              marginBottom: '10px',
              lineHeight: 1.1,
            }}
          >
            <span className="gradient-text-cyan">
              Technical Ecosystem
            </span>
          </h2>

          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--accent-cyan)',
              borderRadius: '3px',
            }}
          />
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="ecosystem-grid"
          style={{
            display: 'grid',
            gridTemplateColumns:
              'minmax(0, 1.35fr) minmax(280px, 0.65fr)',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* ===================================================
              ECOSYSTEM MAP
          ==================================================== */}

          <div
            className="ecosystem-map"
            style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              background: 'rgba(255,255,255,0.012)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxSizing: 'border-box',
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background:
                  'radial-gradient(circle at 50% 50%, rgba(0,229,255,0.04), transparent 65%)',
                zIndex: 0,
              }}
            />

            {/* =================================================
                CONNECTION LINES

                IMPORTANT:
                viewBox = 0 0 100 100

                Therefore x/y values such as
                18, 50, 82 are interpreted correctly.
            ================================================== */}

            <svg
              className="ecosystem-connections"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 2,
                overflow: 'visible',
              }}
            >
              <defs>
                {/* Glow for active lines */}
                <filter
                  id="techLineGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur
                    stdDeviation="1.2"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Line gradient */}
                <linearGradient
                  id="techLineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#00e5ff"
                    stopOpacity="0.35"
                  />

                  <stop
                    offset="50%"
                    stopColor="#8b5cf6"
                    stopOpacity="0.28"
                  />

                  <stop
                    offset="100%"
                    stopColor="#00e5ff"
                    stopOpacity="0.25"
                  />
                </linearGradient>
              </defs>

              {getConnections().map((line, index) => {
                const fromX = line.from.x;
                const fromY = line.from.y;

                const toX = line.to.x;
                const toY = line.to.y;

                /*
                 * For connections between rows, create
                 * a smooth curve.
                 *
                 * Because the SVG uses viewBox 0 0 100 100,
                 * these values correspond directly to our
                 * percentage coordinates.
                 */

                const middleY =
                  (fromY + toY) / 2;

                const path = `
                  M ${fromX} ${fromY}
                  C ${fromX} ${middleY},
                    ${toX} ${middleY},
                    ${toX} ${toY}
                `;

                return (
                  <path
                    key={`${line.from.id}-${line.to.id}-${index}`}
                    d={path}
                    fill="none"
                    stroke={
                      line.isActive
                        ? 'var(--accent-cyan)'
                        : 'url(#techLineGradient)'
                    }
                    strokeWidth={
                      line.isActive ? 0.7 : 0.35
                    }
                    strokeLinecap="round"
                    opacity={
                      line.isActive ? 1 : 0.7
                    }
                    filter={
                      line.isActive
                        ? 'url(#techLineGlow)'
                        : undefined
                    }
                    vectorEffect="non-scaling-stroke"
                    style={{
                      transition:
                        'stroke 0.3s ease, opacity 0.3s ease',
                    }}
                  />
                );
              })}
            </svg>

            {/* =================================================
                NODE LAYER
            ================================================== */}

            {nodes.map((node) => {
              const isNodeActive =
                activeNode === node.id;

              const activeNodeObject = nodes.find(
                (n) => n.id === activeNode
              );

              const isConnectedToActive =
                activeNodeObject
                  ? activeNodeObject.connections.includes(
                    node.id
                  ) ||
                  node.connections.includes(
                    activeNodeObject.id
                  )
                  : false;

              const isNodeHighlighted =
                activeNode === null ||
                isNodeActive ||
                isConnectedToActive;

              return (
                <div
                  key={node.id}
                  className="tech-node-wrapper"
                  onMouseEnter={() =>
                    setActiveNode(node.id)
                  }
                  onMouseLeave={() =>
                    setActiveNode(null)
                  }
                  style={{
                    position: 'absolute',
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform:
                      'translate(-50%, -50%)',
                    zIndex: isNodeActive ? 30 : 20,
                    cursor: 'pointer',
                    opacity: isNodeHighlighted
                      ? 1
                      : 0.2,
                    transition:
                      'opacity 0.3s ease',
                  }}
                >
                  <motion.div
                    animate={{
                      y: isNodeActive ? -5 : 0,
                      scale: isNodeActive
                        ? 1.06
                        : 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    style={{
                      /*
                       * Fixed card width.
                       * This prevents text from colliding.
                       */
                      minWidth: '150px',

                      padding:
                        '11px 16px',

                      borderRadius: '8px',

                      border: `1.5px solid ${isNodeActive
                          ? 'var(--accent-cyan)'
                          : node.category === 'ai'
                            ? 'rgba(0,229,255,0.25)'
                            : node.category ===
                              'framework'
                              ? 'rgba(139,92,246,0.25)'
                              : 'rgba(255,255,255,0.14)'
                        }`,

                      /*
                       * OPAQUE BACKGROUND
                       *
                       * This is what prevents the lines
                       * from showing through the words.
                       */
                      background:
                        isNodeActive
                          ? 'rgba(0,229,255,0.14)'
                          : 'rgba(5,8,15,0.98)',

                      boxShadow: isNodeActive
                        ? 'var(--glow-cyan)'
                        : '0 4px 20px rgba(0,0,0,0.3)',

                      color: isNodeActive
                        ? '#ffffff'
                        : 'var(--text-secondary)',

                      fontFamily:
                        'var(--font-tech)',

                      fontSize: '0.82rem',

                      fontWeight: 600,

                      whiteSpace: 'nowrap',

                      display: 'flex',

                      alignItems: 'center',

                      justifyContent: 'center',

                      gap: '7px',

                      boxSizing: 'border-box',

                      transition:
                        'border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    {/* AI */}
                    {node.category === 'ai' && (
                      <Network
                        size={13}
                        strokeWidth={2}
                        style={{
                          color:
                            'var(--accent-cyan)',
                          flexShrink: 0,
                        }}
                      />
                    )}

                    {/* FRAMEWORK */}
                    {node.category ===
                      'framework' && (
                        <Cpu
                          size={13}
                          strokeWidth={2}
                          style={{
                            color:
                              'var(--accent-violet)',
                            flexShrink: 0,
                          }}
                        />
                      )}

                    {/* INFRA */}
                    {node.category ===
                      'infra' && (
                        <Database
                          size={13}
                          strokeWidth={2}
                          style={{
                            color:
                              'var(--text-muted)',
                            flexShrink: 0,
                          }}
                        />
                      )}

                    <span
                      style={{
                        lineHeight: 1,
                      }}
                    >
                      {node.name}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* ===================================================
              TECHNICAL DETAILS
          ==================================================== */}

          <div
            className="technical-details"
            style={{
              padding: '28px',

              borderRadius: '16px',

              background:
                'var(--bg-surface)',

              border:
                '1px solid var(--border-color)',

              minHeight: '190px',

              display: 'flex',

              flexDirection: 'column',

              justifyContent: 'center',

              textAlign: 'left',

              boxSizing: 'border-box',

              position: 'relative',

              overflow: 'hidden',
            }}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: 'absolute',
                width: '130px',
                height: '130px',
                top: '-60px',
                right: '-40px',
                borderRadius: '50%',
                background:
                  'rgba(0,229,255,0.05)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />

            {activeNodeInfo ? (
              <motion.div
                key={activeNodeInfo.id}
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* CATEGORY */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background:
                        activeNodeInfo.category ===
                          'ai'
                          ? 'var(--accent-cyan)'
                          : activeNodeInfo.category ===
                            'framework'
                            ? 'var(--accent-violet)'
                            : 'var(--text-secondary)',
                    }}
                  />

                  <span
                    style={{
                      fontFamily:
                        'var(--font-tech)',

                      fontSize: '0.72rem',

                      textTransform:
                        'uppercase',

                      letterSpacing:
                        '0.08em',

                      color:
                        activeNodeInfo.category ===
                          'ai'
                          ? 'var(--accent-cyan)'
                          : activeNodeInfo.category ===
                            'framework'
                            ? 'var(--accent-violet)'
                            : 'var(--text-secondary)',
                    }}
                  >
                    {activeNodeInfo.category ===
                      'ai'
                      ? 'Core AI Strategy'
                      : activeNodeInfo.category ===
                        'framework'
                        ? 'Logic Framework'
                        : 'Infrastructure & DB'}
                  </span>
                </div>

                {/* NAME */}
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.45rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {activeNodeInfo.name}
                </h3>

                {/* DESCRIPTION */}
                <p
                  style={{
                    margin: 0,
                    color:
                      'var(--text-secondary)',
                    fontSize: '0.94rem',
                    lineHeight: 1.55,
                  }}
                >
                  {activeNodeInfo.description}
                </p>
              </motion.div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <Code
                  size={26}
                  style={{
                    margin:
                      '0 auto 10px',
                    opacity: 0.5,
                  }}
                />

                <p
                  style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    fontFamily:
                      'var(--font-tech)',
                  }}
                >
                  Hover over the ecosystem
                  nodes to analyze integration
                  pathways.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================
          RESPONSIVE
      ========================================================= */}

      <style>{`
        /* ================================================
           DESKTOP
        ================================================ */

        @media (min-width: 992px) {
          .ecosystem-grid {
            grid-template-columns:
              minmax(0, 1.35fr)
              minmax(280px, 0.65fr) !important;
          }
        }

        /* ================================================
           TABLET
        ================================================ */

        @media (max-width: 991px) {
          .ecosystem-grid {
            grid-template-columns: 1fr !important;
          }

          .ecosystem-map {
            height: 500px !important;
          }
        }

        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 650px) {
          .ecosystem-map {
            height: 620px !important;
          }

          .tech-node-wrapper {
            transform:
              translate(-50%, -50%)
              scale(0.86) !important;
          }

          .technical-details {
            min-height: 170px !important;
          }
        }

        /* ================================================
           SMALL MOBILE
        ================================================ */

        @media (max-width: 480px) {
          .ecosystem-map {
            height: 680px !important;
          }

          .tech-node-wrapper {
            transform:
              translate(-50%, -50%)
              scale(0.76) !important;
          }
        }
      `}</style>
    </section>
  );
};