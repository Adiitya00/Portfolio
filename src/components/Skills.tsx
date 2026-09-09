import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  icon: string;
  invert?: boolean;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const groups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: icon('python') },
      { name: 'C', icon: icon('c') },
      { name: 'C++', icon: icon('cplusplus') },
      { name: 'JavaScript', icon: icon('javascript') },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'PyTorch', icon: icon('pytorch') },
      { name: 'TensorFlow', icon: icon('tensorflow') },
      { name: 'scikit-learn', icon: icon('scikitlearn') },
      { name: 'LangChain', icon: icon('langchain') },
      { name: 'NumPy', icon: icon('numpy') },
      { name: 'Pandas', icon: icon('pandas') },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'FastAPI', icon: icon('fastapi') },
      { name: 'Django', icon: icon('django') },
      { name: 'Flask', icon: icon('flask/ffffff') },
      { name: 'React', icon: icon('react') },
      { name: 'n8n', icon: icon('n8n') },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: icon('mysql') },
      { name: 'PostgreSQL', icon: icon('postgresql') },
      { name: 'Firebase', icon: icon('firebase') },
      { name: 'Pinecone', icon: 'https://avatars.githubusercontent.com/u/54333248?v=4', invert: false },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Docker', icon: icon('docker') },
      { name: 'Git', icon: icon('git') },
      { name: 'GitHub', icon: icon('github/ffffff') },
      { name: 'Linux', icon: icon('linux/ffffff') },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 10 }}>
      <div className="section-container">
        <div style={{ marginBottom: '42px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}></span>
            <span className="gradient-text-cyan">Skills</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--accent-cyan)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '42px' }}>
          {groups.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: gIdx * 0.05 }}
            >
              <h3 className="skills-category">{group.category}</h3>
              <div className="skills-grid">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-item hover-target">
                    <img src={item.icon} alt="" width={34} height={34} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-category {
          font-family: var(--font-tech);
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          margin-bottom: 18px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px 28px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 500;
        }

        .skill-item img {
          width: 34px;
          height: 34px;
          object-fit: contain;
          flex-shrink: 0;
        }

        @media (min-width: 700px) {
          .skills-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 22px 40px;
          }
        }
      `}</style>
    </section>
  );
};
