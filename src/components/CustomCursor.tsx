import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track when hovering over clickable elements
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .hover-target');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial check for interactive elements and setup a mutation observer to add listeners to dynamic elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  // Inner loop to smooth out the trail cursor
  useEffect(() => {
    let animationFrameId: number;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease coefficient: 0.15 for smooth lag effect
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (hidden) return null;

  return (
    <>
      {/* Small dot exactly at cursor */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: '#00e5ff',
          borderRadius: '50%',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px #00e5ff',
          transition: 'transform 0.05s linear',
        }}
      />
      {/* Outer tracking ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovered ? '44px' : '26px',
          height: hovered ? '44px' : '26px',
          border: `1.5px solid ${hovered ? '#8b5cf6' : '#00e5ff'}`,
          backgroundColor: hovered ? 'rgba(139, 92, 246, 0.05)' : 'transparent',
          borderRadius: '50%',
          transform: `translate3d(${trail.x - (hovered ? 22 : 13)}px, ${trail.y - (hovered ? 22 : 13)}px, 0) scale(${clicked ? 0.85 : 1})`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.05s ease-out',
          boxShadow: hovered ? '0 0 15px rgba(139, 92, 246, 0.3)' : '0 0 10px rgba(0, 229, 255, 0.15)',
        }}
      />
    </>
  );
};
