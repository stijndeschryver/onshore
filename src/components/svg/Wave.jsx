import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const Wave = ({ index }) => {
  const waveRef = useRef(null);
  useEffect(() => {
    const element = waveRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far the element is through the viewport
      const distanceFromTop = rect.top;
      // Calculate the progress (0 to 1) based on element position
      let progress = 1 - distanceFromTop / viewportHeight;
      progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

      // Calculate scale based on progress (1 to 10)
      const scale = 1 + progress * 9; // Will scale from 1 to 10

      element.style.transform = `scaleY(${scale})`;
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const waveId = `wave-${index}`;
  const patternId = `wavePattern-${index}`;

  return (
    <div ref={waveRef} className={`wave ${waveId}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2040 24"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <pattern
          id={patternId}
          width="255"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="currentColor"
            d="M129.91,0v.05c-1.58-.03-3.2-.05-4.86-.05C61.31,0,58.65,22.16,0,24h255C196.31,22.16,193.66,0,129.91,0Z"
          />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="bottom"></div>
    </div>
  );
};

Wave.propTypes = {
  index: PropTypes.number.isRequired,
};
