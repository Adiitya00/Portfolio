import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NameIntroProps {
  onComplete: () => void;
}

const LETTERS = ['A', 'D', 'I', 'T', 'Y', 'A'];

export const NameIntro: React.FC<NameIntroProps> = ({
  onComplete,
}) => {
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(false);

  // Each letter has its own ON/OFF state.
  const [letterLights, setLetterLights] = useState<boolean[]>(
    LETTERS.map(() => false)
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timers: number[] = [];

    // ============================================================
    // FAST ANIMATION SETTINGS
    // ============================================================

    // Delay before first A starts
    const startDelay = 80;

    // Delay between starting each letter
    // A → D → I → T → Y → A
    const letterStagger = 70;

    // VERY FAST ON/OFF
    const blinkInterval = 30;

    // Number of ON/OFF flashes per letter
    const blinkCount = 6;

    // ============================================================
    // SHOW NAME
    // ============================================================

    timers.push(
      window.setTimeout(() => {
        setShown(true);
      }, 30)
    );

    // ============================================================
    // EACH LETTER HAS ITS OWN BLINK SEQUENCE
    // ============================================================

    LETTERS.forEach((_, index) => {
      const letterStart =
        startDelay + index * letterStagger;

      // --------------------------------------------
      // FIRST ON
      // --------------------------------------------

      timers.push(
        window.setTimeout(() => {
          setLetterLights((previous) => {
            const next = [...previous];
            next[index] = true;
            return next;
          });
        }, letterStart)
      );

      // --------------------------------------------
      // CONTINUE BLINKING
      // --------------------------------------------

      for (let blink = 1; blink <= blinkCount; blink++) {
        const blinkTime =
          letterStart +
          blink * blinkInterval;

        const isOn = blink % 2 === 1;

        timers.push(
          window.setTimeout(() => {
            setLetterLights((previous) => {
              const next = [...previous];
              next[index] = isOn;
              return next;
            });
          }, blinkTime)
        );
      }
    });

    // ============================================================
    // FINAL ALL-LETTER FLASH
    // ============================================================

    const lastLetterStart =
      startDelay +
      (LETTERS.length - 1) * letterStagger;

    const letterSequenceDuration =
      blinkCount * blinkInterval;

    const finalStart =
      lastLetterStart +
      letterSequenceDuration +
      100;

    // ALL ON
    timers.push(
      window.setTimeout(() => {
        setLetterLights(
          LETTERS.map(() => true)
        );
      }, finalStart)
    );

    // ALL OFF
    timers.push(
      window.setTimeout(() => {
        setLetterLights(
          LETTERS.map(() => false)
        );
      }, finalStart + 80)
    );

    // ALL ON
    timers.push(
      window.setTimeout(() => {
        setLetterLights(
          LETTERS.map(() => true)
        );
      }, finalStart + 150)
    );

    // ALL OFF
    timers.push(
      window.setTimeout(() => {
        setLetterLights(
          LETTERS.map(() => false)
        );
      }, finalStart + 230)
    );

    // ============================================================
    // FADE OUT
    // ============================================================

    const fadeTime =
      finalStart + 300;

    timers.push(
      window.setTimeout(() => {
        setVisible(false);
      }, fadeTime)
    );

    // ============================================================
    // COMPLETE
    // ============================================================

    timers.push(
      window.setTimeout(() => {
        document.body.style.overflow =
          previousOverflow;

        onComplete();
      }, fadeTime + 500)
    );

    // ============================================================
    // CLEANUP
    // ============================================================

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow =
        previousOverflow;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,

            background: '#000000',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            overflow: 'hidden',
          }}
        >
          {/* ======================================================
              NAME CONTAINER
          ====================================================== */}

          <div
            style={{
              display: 'flex',
              gap: 'clamp(6px, 1.6vw, 18px)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {LETTERS.map((letter, index) => {
              const isLit = letterLights[index];

              return (
                <div
                  key={`${letter}-${index}`}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    overflow: 'visible',
                  }}
                >
                  {/* =================================================
                      MAIN LETTER
                  ================================================= */}

                  <motion.span
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: shown ? 1 : 0,

                      // KEEP YOUR CYAN COLOR
                      color: isLit
                        ? 'var(--accent-cyan)'
                        : 'rgba(255,255,255,0.12)',

                      // FAST GLOW
                      textShadow: isLit
                        ? [
                            '0 0 3px rgba(0,229,255,0.5)',
                            '0 0 10px rgba(0,229,255,1)',
                            '0 0 22px rgba(0,229,255,0.8)',
                            '0 0 8px rgba(0,229,255,0.9)',
                          ]
                        : 'none',

                      filter: isLit
                        ? 'brightness(1.8)'
                        : 'brightness(1)',
                    }}
                    transition={{
                      opacity: {
                        duration: 0.15,
                      },

                      // VERY FAST COLOR CHANGE
                      color: {
                        duration: 0.02,
                        ease: 'linear',
                      },

                      // VERY FAST GLOW
                      textShadow: {
                        duration: 0.03,
                        ease: 'linear',
                      },

                      filter: {
                        duration: 0.03,
                        ease: 'linear',
                      },
                    }}
                    style={{
                      position: 'relative',
                      zIndex: 2,

                      fontFamily:
                        'var(--font-display)',

                      fontSize:
                        'clamp(3.2rem, 12vw, 7.5rem)',

                      fontWeight: 400,

                      letterSpacing:
                        '0.08em',

                      lineHeight: 1,

                      display: 'inline-block',

                      userSelect: 'none',
                    }}
                  >
                    {letter}
                  </motion.span>

                  {/* =================================================
                      BRIGHT CYAN COPY
                      
                      This is a second copy of the letter.
                      
                      It creates the sharp bright flash.
                      
                      NO SLASH
                      NO WHITE BAR
                      NO MOVING BEAM
                  ================================================= */}

                  <AnimatePresence>
                    {isLit && (
                      <motion.span
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: [
                            0,
                            1,
                            0.75,
                            0,
                          ],
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.05,
                          times: [
                            0,
                            0.2,
                            0.5,
                            1,
                          ],
                          ease: 'linear',
                        }}
                        style={{
                          position: 'absolute',

                          inset: 0,

                          zIndex: 3,

                          pointerEvents: 'none',

                          fontFamily:
                            'var(--font-display)',

                          fontSize:
                            'clamp(3.2rem, 12vw, 7.5rem)',

                          fontWeight: 400,

                          letterSpacing:
                            '0.08em',

                          lineHeight: 1,

                          display:
                            'inline-block',

                          color:
                            'var(--accent-cyan)',

                          textShadow:
                            `
                            0 0 4px rgba(0,229,255,1),
                            0 0 10px rgba(0,229,255,0.95),
                            0 0 20px rgba(0,229,255,0.75),
                            0 0 35px rgba(0,229,255,0.45)
                            `,

                          userSelect: 'none',
                        }}
                      >
                        {letter}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* =================================================
                      SOFT CYAN HALO
                  ================================================= */}

                  <motion.span
                    animate={{
                      opacity: isLit
                        ? 0.4
                        : 0,

                      scale: isLit
                        ? 1.05
                        : 0.98,
                    }}
                    transition={{
                      duration: 0.03,
                      ease: 'linear',
                    }}
                    style={{
                      position: 'absolute',

                      inset: '-25%',

                      zIndex: 1,

                      pointerEvents: 'none',

                      background:
                        `
                        radial-gradient(
                          circle,
                          rgba(0,229,255,0.38) 0%,
                          rgba(0,229,255,0.12) 40%,
                          transparent 70%
                        )
                        `,

                      filter: 'blur(10px)',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};