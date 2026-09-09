import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  ready?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ ready = true }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* =========================================================
          SIDE EMAIL
      ========================================================= */}

      <a
        href="mailto:adityakamble2022@gmail.com"
        className="hero-side-email hover-target"
      >
        {/* adityakamble2022@gmail.com */}
      </a>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 28,
        }}
        animate={
          ready
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 28,
              }
        }
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: '100%',
          maxWidth: '1100px',
          textAlign: 'center',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          /* Space between title, description and button */
          gap: '18px',
        }}
      >
        {/* =======================================================
            ONE SINGLE TITLE LINE

            Hi, I'm | ADITYA
        ======================================================= */}

        <div className="hero-title-row">
          <span className="hero-hi">
            Hi, I'm
          </span>

          {/* <span className="hero-divider" /> */}

          <h1
            className="hero-name hover-target"
            aria-label="Aditya Kamble"
          >
            <span className="hero-name-stroke">
              ADITYA
            </span>

            <span
              className="hero-name-fill"
              aria-hidden
            >
              ADITYA
            </span>
          </h1>
        </div>

        {/* =======================================================
            DESCRIPTION
        ======================================================= */}

        <p className="hero-one-liner">
          A Data &amp; AI Engineer passionate about
          building intelligent, production-ready systems.
        </p>

        {/* =======================================================
            EXPLORE MORE
        ======================================================= */}

        <button
          onClick={() => handleScrollTo('about')}
          className="hover-target hero-cta"
        >
          Explore More
        </button>
      </motion.div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`

        /* ========================================================
           SIDE EMAIL
        ======================================================== */

        .hero-side-email {
          position: fixed;

          left: 18px;
          top: 50%;

          writing-mode: vertical-rl;

          transform:
            translateY(-50%)
            rotate(180deg);

          font-family: var(--font-tech);

          font-size: 0.82rem;

          letter-spacing: 0.18em;

          color: var(--accent-cyan);

          z-index: 20;
        }


        /* ========================================================
           TITLE ROW

           Hi, I'm | ADITYA

           IMPORTANT:
           Everything stays on ONE horizontal line.
        ======================================================== */

        .hero-title-row {
          display: flex;

          flex-direction: row;

          align-items: center;

          justify-content: center;

          gap: clamp(14px, 2vw, 24px);

          flex-wrap: nowrap;

          width: 100%;

          /*
           * Keeps the entire title visually
           * aligned as one line.
           */
          line-height: 1;

          margin: 0;

          padding: 0;
        }


        /* ========================================================
           HI, I'M
        ======================================================== */

        .hero-hi {
          font-family: var(--font-heading);

          /*
           * Slightly bigger than original.
           */
          font-size:
            clamp(1.9rem, 3.4vw, 2.7rem);

          font-weight: 600;

          color: #ffffff;

          white-space: nowrap;

          line-height: 1;

          margin: 0;

          padding: 0;

          /*
           * Prevent vertical movement.
           */
          display: inline-flex;

          align-items: center;
        }


        /* ========================================================
           CYAN DIVIDER
        ======================================================== */

        .hero-divider {
          width: 2px;

          height:
            clamp(2.5rem, 5vw, 3.6rem);

          flex-shrink: 0;

          background:
            var(--accent-cyan);

          box-shadow:
            0 0 12px
            rgba(0, 229, 255, 0.75),

            0 0 25px
            rgba(0, 229, 255, 0.35);
        }


        /* ========================================================
           ADITYA

           This is the LARGE text.
        ======================================================== */

        .hero-name {
          position: relative;

          display: inline-block;

          font-family:
            var(--font-display);

          /*
           * LARGE NAME
           */
          font-size:
            clamp(3.6rem, 9.5vw, 6.5rem);

          font-weight: 400;

          letter-spacing:
            0.12em;

          /*
           * Same vertical center as Hi, I'm.
           */
          line-height: 1;

          text-transform:
            uppercase;

          cursor: pointer;

          margin: 0;

          padding: 0;

          white-space: nowrap;

          /*
           * Important for keeping ADITYA
           * vertically aligned with Hi, I'm.
           */
          vertical-align: middle;
        }


        /* ========================================================
           ADITYA OUTLINE
        ======================================================== */

        .hero-name-stroke {
          color: transparent;

          -webkit-text-stroke:
            1.5px
            rgba(255, 255, 255, 0.7);

          text-stroke:
            1.5px
            rgba(255, 255, 255, 0.7);

          display: inline-block;

          line-height: 1;
        }


        /* ========================================================
           ADITYA CYAN FILL
        ======================================================== */

        .hero-name-fill {
          position: absolute;

          inset: 0;

          width: 0%;

          overflow: hidden;

          color:
            var(--accent-cyan);

          -webkit-text-stroke:
            1.5px
            var(--accent-cyan);

          border-right:
            4px solid
            var(--accent-cyan);

          transition:
            width 0.55s ease;

          white-space: nowrap;

          display: inline-block;

          line-height: 1;
        }


        /* ========================================================
           ADITYA HOVER
        ======================================================== */

        .hero-name:hover
        .hero-name-fill {
          width: 100%;

          filter:
            drop-shadow(
              0 0 18px
              rgba(0, 229, 255, 0.55)
            );
        }


        /* ========================================================
           DESCRIPTION

           This stays BELOW the title.
        ======================================================== */

        .hero-one-liner {
          max-width: 900px;

          margin: 4px 0 0;

          padding: 0;

          color: #ffffff;

          font-size:
            clamp(1.1rem, 2vw, 1.35rem);

          line-height: 1.6;

          text-align: center;

          white-space: nowrap;
        }


        /* ========================================================
           EXPLORE MORE
        ======================================================== */

        .hero-cta {
          margin-top: 2px;

          padding:
            12px 26px;

          border: none;

          border-radius: 8px;

          background:
            rgb(0, 140, 255);

          color: #ffffff;

          font-family:
            var(--font-tech);

          font-size:
            0.88rem;

          font-weight: 700;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;

          box-shadow:
            0 0 22px
            rgb(0, 140, 255);

          transition:
            box-shadow 0.4s ease,
            transform 0.3s ease;

          cursor: pointer;
        }


        /* ========================================================
           BUTTON HOVER
        ======================================================== */

        .hero-cta:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 0 8px
            rgb(0, 140, 255),

            0 0 24px
            rgb(0, 140, 255),

            0 0 48px
            rgb(0, 140, 255);
        }


        /* ========================================================
           TABLET
        ======================================================== */

        @media (max-width: 900px) {

          .hero-title-row {
            gap: 14px;
          }

          .hero-hi {
            font-size:
              clamp(1.5rem, 4vw, 2rem);
          }

          .hero-name {
            font-size:
              clamp(3rem, 10vw, 5.5rem);
          }

          .hero-one-liner {
            white-space: normal;

            padding:
              0 8px;
          }

          .hero-side-email {
            display: none;
          }
        }


        /* ========================================================
           MOBILE
        ======================================================== */

        @media (max-width: 600px) {

          .hero-title-row {
            gap: 9px;
          }

          .hero-hi {
            font-size:
              1.3rem;
          }

          .hero-name {
            font-size:
              2.8rem;

            letter-spacing:
              0.08em;
          }

          .hero-divider {
            height:
              2rem;
          }

          .hero-one-liner {
            font-size:
              1rem;

            line-height:
              1.5;
          }

          .hero-cta {
            padding:
              11px 22px;
          }
        }

      `}</style>
    </section>
  );
};