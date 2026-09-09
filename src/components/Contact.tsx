// import React, { useState } from 'react';
// import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

// export const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate sending email via mailto fallback and trigger success animation after 1.5s
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSuccess(true);

//       const mailtoLink = `mailto:adityakamble2022@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Connection Request')}&body=${encodeURIComponent(`Hi Aditya,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`)}`;
//       window.location.href = mailtoLink;

//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setTimeout(() => setIsSuccess(false), 5000);
//     }, 1200);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <section id="contact" style={{ position: 'relative', zIndex: 10 }}>
//       <div className="section-container">
//         {/* Section Title */}
//         <div style={{ marginBottom: '50px', textAlign: 'left' }}>
//           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>
//             <span style={{ color: 'rgba(255,255,255,0.4)' }}></span>
//             <span className="gradient-text-cyan">Initiate Connection</span>
//           </h2>
//           <div style={{ width: '60px', height: '3px', background: 'var(--accent-cyan)' }} />
//         </div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr',
//             gap: '40px',
//             alignItems: 'start',
//           }}
//           className="contact-layout"
//         >
//           {/* Left Side: Text and Channels */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
//             <div>
//               <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>
//                 Let's Build Something Intelligent.
//               </h3>
//               <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
//                 Have an AI project, machine learning roadmap, trainee opening, or simply want to chat about agent automation? Let's align and start collaborating.
//               </p>
//             </div>

//             {/* Contact Channels */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//               <a
//                 href="mailto:adityakamble2022@gmail.com"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '16px',
//                   color: 'var(--text-secondary)',
//                   padding: '16px',
//                   borderRadius: '8px',
//                   background: 'rgba(255,255,255,0.01)',
//                   border: '1px solid var(--border-color)',
//                   transition: 'var(--transition-smooth)',
//                 }}
//                 className="hover-target"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = 'var(--accent-cyan)';
//                   e.currentTarget.style.background = 'rgba(0, 229, 255, 0.03)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = 'var(--border-color)';
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
//                 }}
//               >
//                 <div
//                   style={{
//                     width: '40px',
//                     height: '40px',
//                     borderRadius: '50%',
//                     background: 'rgba(0, 229, 255, 0.08)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'var(--accent-cyan)',
//                   }}
//                 >
//                   <Mail size={18} />
//                 </div>
//                 <div>
//                   <span style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)' }}>
//                     EMAIL ADDRESS
//                   </span>
//                   <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>adityakamble2022@gmail.com</span>
//                 </div>
//               </a>

//               <a
//                 href="tel:+919359783376"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '16px',
//                   color: 'var(--text-secondary)',
//                   padding: '16px',
//                   borderRadius: '8px',
//                   background: 'rgba(255, 255, 255, 0.01)',
//                   border: '1px solid var(--border-color)',
//                   transition: 'var(--transition-smooth)',
//                 }}
//                 className="hover-target"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = 'var(--accent-violet)';
//                   e.currentTarget.style.background = 'rgba(139, 92, 246, 0.03)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = 'var(--border-color)';
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
//                 }}
//               >
//                 <div
//                   style={{
//                     width: '40px',
//                     height: '40px',
//                     borderRadius: '50%',
//                     background: 'rgba(139, 92, 246, 0.08)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'var(--accent-violet)',
//                   }}
//                 >
//                   <Phone size={18} />
//                 </div>
//                 <div>
//                   <span style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)' }}>
//                     PHONE NUMBER
//                   </span>
//                   <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>+91 9359783376</span>
//                 </div>
//               </a>

//               {/* Grid of Social Portals */}
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
//                 <a
//                   href="https://www.linkedin.com/in/adityakamble00/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '12px',
//                     color: 'var(--text-secondary)',
//                     padding: '12px',
//                     borderRadius: '8px',
//                     border: '1px solid var(--border-color)',
//                     background: 'rgba(255,255,255,0.01)',
//                   }}
//                   className="hover-target"
//                   onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffffff')}
//                   onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-cyan)' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
//                   <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>LinkedIn</span>
//                 </a>

//                 <a
//                   href="https://github.com/Adiitya00"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '12px',
//                     color: 'var(--text-secondary)',
//                     padding: '12px',
//                     borderRadius: '8px',
//                     border: '1px solid var(--border-color)',
//                     background: 'rgba(255,255,255,0.01)',
//                   }}
//                   className="hover-target"
//                   onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ffffff')}
//                   onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-violet)' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
//                   <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>GitHub</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Form Card */}
//           <div className="premium-card" style={{ width: '100%' }}>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
//                 <div className="form-group" style={{ textAlign: 'left', marginBottom: 0 }}>
//                   <label className="form-label">YOUR NAME</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Aditya"
//                     className="form-input hover-target"
//                   />
//                 </div>
//                 <div className="form-group" style={{ textAlign: 'left', marginBottom: 0 }}>
//                   <label className="form-label">EMAIL ADDRESS</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="name@company.com"
//                     className="form-input hover-target"
//                   />
//                 </div>
//               </div>

//               <div className="form-group" style={{ textAlign: 'left', marginBottom: 0 }}>
//                 <label className="form-label">SUBJECT</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   placeholder="Opportunity or Project Collaboration"
//                   className="form-input hover-target"
//                 />
//               </div>

//               <div className="form-group" style={{ textAlign: 'left', marginBottom: 0 }}>
//                 <label className="form-label">YOUR MESSAGE</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   placeholder="Tell me about your product or idea..."
//                   className="form-textarea hover-target"
//                   style={{ resize: 'vertical' }}
//                 />
//               </div>

//               {/* Submit Trigger */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting || isSuccess}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   gap: '10px',
//                   padding: '14px',
//                   borderRadius: '8px',
//                   border: 'none',
//                   background: isSuccess 
//                     ? 'rgba(74, 222, 128, 0.15)' 
//                     : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
//                   color: isSuccess ? '#4ade80' : '#030305',
//                   fontFamily: 'var(--font-tech)',
//                   fontSize: '0.95rem',
//                   fontWeight: 700,
//                   cursor: (isSubmitting || isSuccess) ? 'not-allowed' : 'pointer',
//                   borderWidth: isSuccess ? '1px' : 'none',
//                   borderColor: isSuccess ? '#4ade80' : 'transparent',
//                   transition: 'var(--transition-smooth)',
//                 }}
//                 className="hover-target"
//                 onMouseEnter={(e) => {
//                   if (!isSubmitting && !isSuccess) {
//                     e.currentTarget.style.transform = 'translateY(-1px)';
//                     e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.3)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSubmitting && !isSuccess) {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = 'none';
//                   }
//                 }}
//               >
//                 {isSubmitting ? (
//                   <span>Encrypting Message...</span>
//                 ) : isSuccess ? (
//                   <>
//                     <CheckCircle2 size={16} />
//                     <span>System Synced // Redirecting...</span>
//                   </>
//                 ) : (
//                   <>
//                     <span>Let's Connect</span>
//                     <Send size={14} />
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (min-width: 992px) {
//           .contact-layout {
//             grid-template-columns: 0.9fr 1.1fr !important;
//             gap: 50px !important;
//           }
//         }
//         @media (max-width: 576px) {
//           .form-row {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };


import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
      }}
    >
      <div className="section-container">
        {/* =====================================================
            CONTACT CARD
        ====================================================== */}

        <motion.div
          className="contact-card"
          initial={{
            opacity: 0,
            y: 45,
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
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* =================================================
              BACKGROUND GLOW
          ================================================== */}

          <div className="contact-glow contact-glow-purple" />

          <div className="contact-glow contact-glow-cyan" />

          <div className="contact-glow contact-glow-blue" />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="contact-content">

            {/* CONTACT LABEL */}

            <motion.div
              className="contact-label"
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.4,
              }}
            >
              CONTACT
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <motion.h2
              className="contact-title"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
            >
              Let's build something{' '}
              <span>meaningful.</span>
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              className="contact-description"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.28,
                duration: 0.5,
              }}
            >
              I'm open to software engineering roles,
              AI/ML opportunities, and interesting projects.
              If you have an idea, opportunity, or simply want
              to connect, I'd love to hear from you.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              className="contact-actions"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
            >

              {/* =================================================
                  EMAIL BUTTON
              ================================================== */}

              <a
                href="mailto:adityakamble2022@gmail.com"
                className="contact-btn contact-btn-primary"
              >
                <Mail size={18} />

                <span>
                  Email Me
                </span>
              </a>

              {/* =================================================
                  LINKEDIN BUTTON
              ================================================== */}

              <a
                href="https://www.linkedin.com/in/adityakamble00/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn-secondary"
              >
                <span className="linkedin-icon">
                  in
                </span>

                <span>
                  LinkedIn
                </span>

                <ArrowUpRight
                  size={16}
                />
              </a>

              {/* =================================================
                  GITHUB BUTTON
                  SVG USED INSTEAD OF LUCIDE GITHUB
              ================================================== */}

              <a
                href="https://github.com/Adiitya00"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn-secondary"
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
                  aria-hidden="true"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5
                    c3 0 6-2 6-5.5
                    .08-1.25-.27-2.48-1-3.5
                    .28-1.15.28-2.35 0-3.5
                    0 0-1 0-3 1.5
                    -2.64-.5-5.36-.5-8 0
                    C6 2 5 2 5 2
                    c-.3 1.15-.3 2.35 0 3.5
                    A5.403 5.403 0 0 0 4 9
                    c0 3.5 3 5.5 6 5.5
                    -.39.49-.68 1.05-.85 1.65
                    -.17.6-.22 1.23-.15 1.85v4"
                  />

                  <path
                    d="M9 18c-4.51 2-5-2-7-2"
                  />
                </svg>

                <span>
                  GitHub
                </span>

                <ArrowUpRight
                  size={16}
                />
              </a>

            </motion.div>

            {/* =================================================
                EMAIL + LOCATION
            ================================================== */}

            <motion.div
              className="contact-meta"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
                duration: 0.5,
              }}
            >
              <span>
                adityakamble2022@gmail.com
              </span>

              <span className="contact-dot">
                •
              </span>

              <span className="contact-location">
                <MapPin size={14} />

                Pune, Maharashtra, India
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* ========================================================
          STYLES
      ========================================================= */}

      <style>{`

        /* ======================================================
           MAIN CONTACT CARD
        ====================================================== */

        .contact-card {
          position: relative;

          width: min(
            100%,
            1040px
          );

          min-height: 430px;

          margin: 0 auto;

          border-radius: 30px;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              rgba(20, 19, 34, 0.98),
              rgba(13, 14, 24, 0.98)
            );

          border:
            1px solid
            rgba(255, 255, 255, 0.12);

          box-shadow:
            0 30px 80px
              rgba(0, 0, 0, 0.45),

            0 0 50px
              rgba(99, 102, 241, 0.06);

          box-sizing: border-box;

          isolation: isolate;
        }


        /* ======================================================
           PURPLE GLOW — TOP LEFT
        ====================================================== */

        .contact-glow-purple {
          position: absolute;

          width: 430px;
          height: 330px;

          top: -150px;
          left: -170px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,

              rgba(124, 102, 255, 0.42)
                0%,

              rgba(108, 92, 231, 0.22)
                32%,

              rgba(91, 70, 190, 0.10)
                52%,

              transparent
                74%
            );

          filter: blur(30px);

          pointer-events: none;

          z-index: -1;
        }


        /* ======================================================
           CYAN GLOW — BOTTOM RIGHT
        ====================================================== */

        .contact-glow-cyan {
          position: absolute;

          width: 480px;
          height: 330px;

          right: -180px;
          bottom: -170px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,

              rgba(0, 229, 210, 0.28)
                0%,

              rgba(0, 205, 210, 0.17)
                30%,

              rgba(0, 180, 210, 0.08)
                52%,

              transparent
                74%
            );

          filter: blur(32px);

          pointer-events: none;

          z-index: -1;
        }


        /* ======================================================
           SOFT BLUE CENTER GLOW
        ====================================================== */

        .contact-glow-blue {
          position: absolute;

          width: 360px;
          height: 240px;

          top: 45%;
          left: 50%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,

              rgba(67, 120, 255, 0.045)
                0%,

              transparent
                70%
            );

          filter: blur(30px);

          pointer-events: none;

          z-index: -1;
        }


        /* ======================================================
           CONTENT
        ====================================================== */

        .contact-content {
          position: relative;

          z-index: 5;

          width: min(
            100%,
            820px
          );

          margin: 0 auto;

          padding:
            70px 40px
            68px;

          display: flex;

          flex-direction: column;

          align-items: center;

          text-align: center;

          box-sizing: border-box;
        }


        /* ======================================================
           CONTACT LABEL
        ====================================================== */

        .contact-label {
          margin-bottom: 20px;

          font-family:
            var(--font-tech);

          font-size:
            0.72rem;

          font-weight:
            700;

          letter-spacing:
            0.28em;

          color:
            #9b82ff;

          text-transform:
            uppercase;

          text-shadow:
            0 0 18px
            rgba(139, 92, 246, 0.25);
        }


        /* ======================================================
           TITLE
        ====================================================== */

        .contact-title {
          margin: 0;

          max-width:
            850px;

          font-family:
            var(--font-tech);

          font-size:
            clamp(
              2rem,
              4.2vw,
              3.05rem
            );

          font-weight:
            800;

          line-height:
            1.15;

          letter-spacing:
            -0.035em;

          color:
            #f5f5f7;
        }


        /* ======================================================
           GRADIENT WORD
        ====================================================== */

        .contact-title span {
          background:
            linear-gradient(
              100deg,
              #8b78ff 0%,
              #688cff 38%,
              #42d5db 78%,
              #35e1d3 100%
            );

          -webkit-background-clip:
            text;

          background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

          color:
            transparent;

          filter:
            drop-shadow(
              0 0 16px
              rgba(74, 211, 221, 0.10)
            );
        }


        /* ======================================================
           DESCRIPTION
        ====================================================== */

        .contact-description {
          max-width:
            720px;

          margin:
            24px auto 0;

          font-family:
            var(--font-tech);

          font-size:
            1rem;

          line-height:
            1.85;

          color:
            rgba(210, 211, 224, 0.68);

          text-align:
            center;
        }


        /* ======================================================
           ACTION BUTTONS
        ====================================================== */

        .contact-actions {
          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            14px;

          flex-wrap:
            wrap;

          margin-top:
            36px;
        }


        /* ======================================================
           BUTTON BASE
        ====================================================== */

        .contact-btn {
          min-height:
            50px;

          padding:
            0 22px;

          border-radius:
            28px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            10px;

          font-family:
            var(--font-tech);

          font-size:
            0.92rem;

          font-weight:
            650;

          text-decoration:
            none;

          white-space:
            nowrap;

          box-sizing:
            border-box;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            color 0.25s ease;
        }


        /* ======================================================
           PRIMARY EMAIL BUTTON
        ====================================================== */

        .contact-btn-primary {
          color:
            #101016;

          background:
            linear-gradient(
              135deg,
              #8975ff,
              #7c6af5
            );

          border:
            1px solid
            rgba(157, 142, 255, 0.8);

          box-shadow:
            0 8px 24px
            rgba(124, 106, 245, 0.20);
        }


        .contact-btn-primary:hover {
          transform:
            translateY(-3px);

          background:
            linear-gradient(
              135deg,
              #9583ff,
              #8272ff
            );

          box-shadow:
            0 12px 30px
            rgba(124, 106, 245, 0.32),

            0 0 25px
            rgba(139, 92, 246, 0.18);
        }


        /* ======================================================
           SECONDARY BUTTONS
        ====================================================== */

        .contact-btn-secondary {
          color:
            rgba(245, 245, 250, 0.88);

          background:
            rgba(255, 255, 255, 0.015);

          border:
            1px solid
            rgba(255, 255, 255, 0.12);
        }


        .contact-btn-secondary:hover {
          transform:
            translateY(-3px);

          color:
            #ffffff;

          background:
            rgba(255, 255, 255, 0.055);

          border-color:
            rgba(255, 255, 255, 0.25);

          box-shadow:
            0 10px 28px
            rgba(0, 0, 0, 0.25);
        }


        /* ======================================================
           LINKEDIN ICON
        ====================================================== */

        .linkedin-icon {
          width:
            18px;

          height:
            18px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          font-family:
            Arial, sans-serif;

          font-size:
            0.78rem;

          font-weight:
            800;

          color:
            currentColor;
        }


        /* ======================================================
           CONTACT META
        ====================================================== */

        .contact-meta {
          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            12px;

          margin-top:
            31px;

          font-family:
            var(--font-tech);

          font-size:
            0.78rem;

          color:
            rgba(180, 182, 198, 0.68);

          letter-spacing:
            0.02em;
        }


        .contact-dot {
          color:
            rgba(255, 255, 255, 0.25);
        }


        .contact-location {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            5px;
        }


        /* ======================================================
           CARD HOVER
        ====================================================== */

        .contact-card:hover {
          border-color:
            rgba(255, 255, 255, 0.16);

          box-shadow:
            0 35px 90px
              rgba(0, 0, 0, 0.48),

            0 0 60px
              rgba(99, 102, 241, 0.08);
        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 768px) {

          .contact-card {
            min-height:
              auto;

            border-radius:
              24px;
          }


          .contact-content {
            padding:
              58px 28px
              56px;
          }


          .contact-title {
            font-size:
              clamp(
                1.8rem,
                6vw,
                2.5rem
              );
          }


          .contact-description {
            font-size:
              0.94rem;

            line-height:
              1.75;
          }


          .contact-actions {
            margin-top:
              30px;
          }


          .contact-meta {
            flex-direction:
              column;

            gap:
              8px;
          }


          .contact-dot {
            display:
              none;
          }
        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 520px) {

          .contact-card {
            border-radius:
              20px;
          }


          .contact-content {
            padding:
              48px 20px
              46px;
          }


          .contact-label {
            margin-bottom:
              16px;

            font-size:
              0.66rem;
          }


          .contact-title {
            font-size:
              1.8rem;

            line-height:
              1.2;
          }


          .contact-description {
            margin-top:
              20px;

            font-size:
              0.88rem;

            line-height:
              1.7;
          }


          .contact-actions {
            width:
              100%;

            flex-direction:
              column;

            gap:
              10px;

            margin-top:
              28px;
          }


          .contact-btn {
            width:
              100%;

            max-width:
              260px;
          }


          .contact-meta {
            margin-top:
              26px;

            font-size:
              0.7rem;

            word-break:
              break-word;
          }


          .contact-glow-purple {
            width:
              280px;

            height:
              240px;

            top:
              -120px;

            left:
              -120px;
          }


          .contact-glow-cyan {
            width:
              300px;

            height:
              240px;

            right:
              -130px;

            bottom:
              -130px;
          }

        }

      `}</style>
    </section>
  );
};