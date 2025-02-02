import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Wave.css';

export const Wave = ({ index }) => {
  const waveRef = useRef(null);
  useEffect(() => {
    const element = waveRef.current;
    if (!element) return;

    const handleScroll = () => {
      const parentRect = element.parentElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only start scaling when the parent section comes into view
      if (parentRect.top > viewportHeight) {
        element.style.transform = 'scaleY(1)';
        element.style.transformOrigin = 'bottom';
        return;
      }

      // Calculate progress based on parent section's position
      const parentProgress = (viewportHeight - parentRect.top) / viewportHeight;
      const progress = Math.max(0, Math.min(1, parentProgress));

      // Scale from 1 to 3 instead of 1 to 10 for more subtle effect
      const scale = 1 + progress * 10;

      // Apply transform with explicit origin
      element.style.transformOrigin = 'bottom';
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
    <div
      ref={waveRef}
      className={`wave ${waveId}`}
      style={{ transformOrigin: 'bottom' }}
    >
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
