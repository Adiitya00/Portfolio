// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, MapPin, Cpu } from 'lucide-react';

// export const About: React.FC = () => {
//   return (
//     <section id="about" style={{ position: 'relative', zIndex: 10 }}>
//       <div className="section-container">
//         <div
//           className="about-layout"
//           style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr',
//             gap: '48px',
//             alignItems: 'flex-start',
//           }}
//         >
//           {/* ── LEFT COLUMN: photo + meta ── */}
//           <motion.div
//             id="about-img"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: '-80px' }}
//             transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//             style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
//           >
//             {/* Photo */}
//             <div className="about-photo-frame hover-target">
//               <img src="/profile.png" alt="Aditya Kamble" />
//             </div>

//             {/* Role + Location meta */}
//             <div className="about-meta">
//               <div className="about-meta-item">
//                 <Cpu size={15} color="var(--accent-cyan)" />
//                 <span>Data & AI Trainee @ Fujitsu</span>
//               </div>
//               <div className="about-meta-item">
//                 <MapPin size={15} color="var(--accent-cyan)" />
//                 <span>Pune, India</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* ── RIGHT COLUMN: text ── */}
//           <motion.div
//             id="about-text"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: '-80px' }}
//             transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
//             style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
//           >
//             {/* "ABOUT ME" label */}
//             <p style={{
//               fontFamily: 'var(--font-tech)',
//               fontSize: '0.72rem',
//               fontWeight: 600,
//               letterSpacing: '0.2em',
//               textTransform: 'uppercase',
//               color: 'var(--accent-cyan)',
//             }}>
//               About Me
//             </p>

//             {/* Heading — "Kamble" highlighted */}
//             <h2 style={{
//               fontFamily: 'var(--font-tech)',
//               fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
//               fontWeight: 700,
//               lineHeight: 1.25,
//               color: '#ffffff',
//               margin: 0,
//             }}>
//               I'm Aditya{' '}
//               <span style={{ color: 'var(--accent-cyan)' }}>Kamble</span>
//             </h2>

//             {/* Body paragraphs */}
//             <p style={{
//               fontFamily: 'var(--font-tech)',
//               fontSize: '0.95rem',
//               lineHeight: 1.8,
//               color: 'var(--text-secondary)',
//               margin: 0,
//             }}>
//               I'm a Computer Science graduate from TKIET, currently working as a
//               Data &amp; AI Trainee at Fujitsu in Pune. I'm passionate about leveraging AI to solve
//               real-world problems, specializing in machine learning, agentic workflows, and reliable
//               data pipelines that actually ship to production.
//             </p>

//             <p style={{
//               fontFamily: 'var(--font-tech)',
//               fontSize: '0.95rem',
//               lineHeight: 1.8,
//               color: 'var(--text-secondary)',
//               margin: 0,
//             }}>
//               I have hands-on experience building intelligent systems using Python, PyTorch,
//               LangChain, FastAPI, and Pinecone. I've worked on RAG pipelines, deep learning models,
//               and agentic automation workflows using n8n. My experience bridges AI development and
//               scalable backend deployment, enabling end-to-end tech solutions.
//             </p>

//             <p style={{
//               fontFamily: 'var(--font-tech)',
//               fontSize: '0.95rem',
//               lineHeight: 1.8,
//               color: 'var(--text-secondary)',
//               margin: 0,
//             }}>
//               Outside of engineering, I enjoy exploring new AI tools, contributing to open-source,
//               and turning ideas into working prototypes. I aim to collaborate with dynamic teams on
//               groundbreaking AI projects that push the boundaries of innovation.
//             </p>

//             {/* Social icons */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
//               <a
//                 href="https://github.com/Adiitya00"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="about-social hover-target"
//                 aria-label="GitHub"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/adityakamble00/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="about-social hover-target"
//                 aria-label="LinkedIn"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
//               </a>
//               <a
//                 href="mailto:adityakamble2022@gmail.com"
//                 className="about-social hover-target"
//                 aria-label="Email"
//               >
//                 <Mail size={18} />
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         /* Photo frame */
//         .about-photo-frame {
//           width: min(100%, 280px);
//           aspect-ratio: 3 / 4;
//           border-radius: 16px;
//           overflow: hidden;
//           border: 1.5px solid rgba(0, 229, 255, 0.35);
//           box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55), 0 0 40px rgba(0, 229, 255, 0.15);
//           transition: transform 0.35s ease, box-shadow 0.35s ease;
//         }

//         .about-photo-frame:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 28px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(0, 229, 255, 0.22);
//         }

//         .about-photo-frame img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center 18%;
//           display: block;
//         }

//         /* Role / location meta */
//         .about-meta {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           width: 100%;
//           max-width: 280px;
//         }

//         .about-meta-item {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-family: var(--font-tech);
//           font-size: 0.88rem;
//           color: var(--text-secondary);
//         }

//         /* Social icons */
//         .about-social {
//           width: 42px;
//           height: 42px;
//           border-radius: 50%;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(255, 255, 255, 0.08);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           color: #ffffff;
//           transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
//         }

//         .about-social:hover {
//           transform: translateY(-3px);
//           background: rgba(0, 229, 255, 0.15);
//           border-color: var(--accent-cyan);
//           color: var(--accent-cyan);
//         }

//         /* Desktop two-column layout */
//         @media (min-width: 960px) {
//           .about-layout {
//             grid-template-columns: 260px 1fr !important;
//             gap: 64px !important;
//             align-items: flex-start !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };


import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="section-container">
        <div
          className="about-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'flex-start',
          }}
        >
          {/* =====================================================
              LEFT COLUMN — PHOTO + META
          ====================================================== */}

          <motion.div
            id="about-img"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {/* =================================================
                PHOTO FRAME
            ================================================== */}

            <div className="about-photo-frame hover-target">

              {/* Soft ambient light behind photo */}
              <div className="photo-ambient-glow" />

              {/* Decorative outer light ring */}
              <div className="photo-light-ring" />

              {/* Actual photo */}
              <img
                src="/profile.png"
                alt="Aditya Kamble"
              />

              {/* Subtle inner image lighting */}
              <div className="photo-inner-glow" />

            </div>

            {/* =================================================
                ROLE + LOCATION
            ================================================== */}

            <div className="about-meta">

              <div className="about-meta-item">
                <Cpu
                  size={15}
                  color="var(--accent-cyan)"
                />

                <span>
                  Data &amp; AI Trainee @ Fujitsu
                </span>
              </div>

              <div className="about-meta-item">
                <MapPin
                  size={15}
                  color="var(--accent-cyan)"
                />

                <span>
                  Pune, India
                </span>
              </div>

            </div>
          </motion.div>

          {/* =====================================================
              RIGHT COLUMN — ABOUT TEXT
          ====================================================== */}

          <motion.div
            id="about-text"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              duration: 0.55,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* =================================================
                ABOUT ME LABEL
            ================================================== */}

            <p
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-cyan)',
                margin: 0,
              }}
            >
              About Me
            </p>

            {/* =================================================
                HEADING
            ================================================== */}

            <h2
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize:
                  'clamp(1.7rem, 3.5vw, 2.4rem)',
                fontWeight: 700,
                lineHeight: 1.25,
                color: '#ffffff',
                margin: 0,
              }}
            >
              I'm Aditya{' '}

              <span
                style={{
                  color: 'var(--accent-cyan)',
                  textShadow:
                    '0 0 20px rgba(0, 229, 255, 0.18)',
                }}
              >
                Kamble
              </span>
            </h2>

            {/* =================================================
                PARAGRAPH 1
            ================================================== */}

            <p
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              I'm a Computer Science graduate from
              TKIET, currently working as a Data &amp; AI
              Trainee at Fujitsu in Pune. I'm passionate
              about leveraging AI to solve real-world
              problems, specializing in machine learning,
              agentic workflows, and reliable data
              pipelines that actually ship to production.
            </p>

            {/* =================================================
                PARAGRAPH 2
            ================================================== */}

            <p
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              I have hands-on experience building
              intelligent systems using Python, PyTorch,
              LangChain, FastAPI, and Pinecone. I've worked
              on RAG pipelines, deep learning models, and
              agentic automation workflows using n8n. My
              experience bridges AI development and
              scalable backend deployment, enabling
              end-to-end tech solutions.
            </p>

            {/* =================================================
                PARAGRAPH 3
            ================================================== */}

            <p
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              Outside of engineering, I enjoy exploring
              new AI tools, contributing to open-source,
              and turning ideas into working prototypes. I
              aim to collaborate with dynamic teams on
              groundbreaking AI projects that push the
              boundaries of innovation.
            </p>

            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '8px',
                flexWrap: 'wrap',
              }}
            >
              {/* GitHub */}

              <a
                href="https://github.com/Adiitya00"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social hover-target"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />

                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/adityakamble00/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social hover-target"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />

                  <rect
                    width="4"
                    height="12"
                    x="2"
                    y="9"
                  />

                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                  />
                </svg>
              </a>

              {/* Email */}

              <a
                href="mailto:adityakamble2022@gmail.com"
                className="about-social hover-target"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          STYLES
      ========================================================= */}

      <style>{`

        /* ======================================================
           PHOTO FRAME
        ====================================================== */

        .about-photo-frame {
          position: relative;

          width: min(100%, 280px);

          aspect-ratio: 3 / 4;

          border-radius: 18px;

          /*
           * Allows the glow to extend outside
           * the image.
           */
          overflow: visible;

          /*
           * No normal border.
           * The gradient border is created
           * using the background + padding.
           */
          border: none;

          /*
           * CYAN → BLUE → PURPLE BORDER
           */
          background:
            linear-gradient(
              135deg,
              #00e5ff 0%,
              rgba(0, 229, 255, 0.55) 25%,
              rgba(59, 130, 246, 0.45) 50%,
              rgba(139, 92, 246, 0.60) 75%,
              #8b5cf6 100%
            );

          /*
           * Border thickness.
           */
          padding: 2px;

          box-shadow:
            0 25px 55px
              rgba(0, 0, 0, 0.60),

            0 0 25px
              rgba(0, 229, 255, 0.18),

            0 0 55px
              rgba(139, 92, 246, 0.12);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;

          isolation: isolate;

          z-index: 1;

          box-sizing: border-box;
        }


        /* ======================================================
           MAIN AMBIENT LIGHT
        ====================================================== */

        .photo-ambient-glow {
          position: absolute;

          inset: -35px;

          border-radius: 30px;

          background:
            radial-gradient(
              ellipse at center,

              rgba(0, 229, 255, 0.24)
                0%,

              rgba(0, 180, 255, 0.14)
                25%,

              rgba(59, 130, 246, 0.10)
                42%,

              rgba(139, 92, 246, 0.12)
                55%,

              transparent
                76%
            );

          filter: blur(30px);

          opacity: 0.78;

          z-index: -3;

          pointer-events: none;

          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }


        /* ======================================================
           DECORATIVE OUTER RING
        ====================================================== */

        .photo-light-ring {
          position: absolute;

          inset: -10px;

          border-radius: 23px;

          border:
            1px solid
            rgba(0, 229, 255, 0.12);

          box-shadow:
            0 0 25px
              rgba(0, 229, 255, 0.08);

          z-index: -1;

          pointer-events: none;

          opacity: 0.8;
        }


        /* ======================================================
           ADDITIONAL PURPLE LIGHT
        ====================================================== */

        .about-photo-frame::before {
          content: '';

          position: absolute;

          width: 180px;

          height: 180px;

          right: -75px;

          bottom: -55px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,

              rgba(139, 92, 246, 0.22)
                0%,

              rgba(99, 102, 241, 0.12)
                35%,

              rgba(0, 229, 255, 0.07)
                48%,

              transparent
                72%
            );

          filter: blur(32px);

          opacity: 0.8;

          z-index: -2;

          pointer-events: none;
        }


        /* ======================================================
           ACTUAL IMAGE
        ====================================================== */

        .about-photo-frame img {
          position: relative;

          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: center 18%;

          display: block;

          /*
           * Inner radius leaves the 2px
           * gradient border visible.
           */
          border-radius: 16px;

          z-index: 2;

          background:
            #05080f;

          box-shadow:
            inset 0 0 35px
              rgba(0, 0, 0, 0.22);

          transition:
            transform 0.4s ease,
            filter 0.4s ease;

          box-sizing: border-box;
        }


        /* ======================================================
           INNER LIGHT OVERLAY
        ====================================================== */

        .photo-inner-glow {
          position: absolute;

          inset: 2px;

          border-radius: 16px;

          z-index: 3;

          pointer-events: none;

          background:
            linear-gradient(
              135deg,
              rgba(0, 229, 255, 0.055),
              transparent 32%,
              transparent 68%,
              rgba(139, 92, 246, 0.065)
            );

          box-shadow:
            inset 0 0 30px
              rgba(0, 0, 0, 0.15);
        }


        /* ======================================================
           PHOTO HOVER
        ====================================================== */

        .about-photo-frame:hover {
          transform:
            translateY(-7px);

          box-shadow:
            0 30px 70px
              rgba(0, 0, 0, 0.65),

            0 0 25px
              rgba(0, 229, 255, 0.30),

            0 0 55px
              rgba(0, 229, 255, 0.20),

            0 0 80px
              rgba(139, 92, 246, 0.18),

            0 0 110px
              rgba(139, 92, 246, 0.10);
        }


        .about-photo-frame:hover
        .photo-ambient-glow {
          opacity: 1;

          transform:
            scale(1.06);

          filter:
            blur(34px);
        }


        .about-photo-frame:hover
        img {
          transform:
            scale(1.015);
        }


        /* ======================================================
           META INFORMATION
        ====================================================== */

        .about-meta {
          display: flex;

          flex-direction: column;

          gap: 10px;

          width: 100%;

          max-width: 280px;
        }


        .about-meta-item {
          display: flex;

          align-items: center;

          gap: 8px;

          font-family:
            var(--font-tech);

          font-size: 0.88rem;

          color:
            var(--text-secondary);

          transition:
            color 0.25s ease;
        }


        .about-meta-item:hover {
          color: #ffffff;
        }


        /* ======================================================
           SOCIAL ICONS
        ====================================================== */

        .about-social {
          width: 42px;

          height: 42px;

          border-radius: 50%;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          background:
            rgba(255, 255, 255, 0.08);

          border:
            1px solid
            rgba(255, 255, 255, 0.12);

          color: #ffffff;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            color 0.25s ease;
        }


        .about-social:hover {
          transform:
            translateY(-3px);

          background:
            rgba(0, 229, 255, 0.15);

          border-color:
            var(--accent-cyan);

          color:
            var(--accent-cyan);

          box-shadow:
            0 0 18px
              rgba(0, 229, 255, 0.20);
        }


        /* ======================================================
           DESKTOP
        ====================================================== */

        @media (min-width: 960px) {

          .about-layout {
            grid-template-columns:
              280px 1fr !important;

            gap:
              64px !important;

            align-items:
              flex-start !important;
          }

        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 959px) {

          .about-layout {
            grid-template-columns:
              1fr !important;

            gap:
              48px !important;
          }

          #about-img {
            width: 100%;
          }

          #about-text {
            width: 100%;
          }

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {

          .about-photo-frame {
            width:
              min(100%, 260px);
          }

          .about-photo-frame::before {
            width: 140px;

            height: 140px;

            right: -50px;

            bottom: -40px;
          }

          .photo-ambient-glow {
            inset: -25px;
          }

          .about-social {
            width: 40px;

            height: 40px;
          }

        }

      `}</style>
    </section>
  );
};