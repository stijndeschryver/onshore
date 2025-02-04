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

      if (parentRect.top > viewportHeight) {
        element.style.transform = 'scaleY(1)';
        element.style.transformOrigin = 'bottom';
        return;
      }

      const parentProgress = (viewportHeight - parentRect.top) / viewportHeight;
      const progress = Math.max(0, Math.min(1, parentProgress));
      const scale = 1 + progress * 10;

      element.style.transformOrigin = 'bottom';
      element.style.transform = `scaleY(${scale})`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const waveId = `wave-${index}`;
  const patternId = `wavePattern-${index}`;

  return (
    <div ref={waveRef} className={`wave ${waveId}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2040 268.18">
        <pattern
          id={patternId}
          width="265.93"
          height="268.18"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="currentColor"
            d="M 0,24.04
               C 66.48,24.04 66.48,0 132.97,0
               C 199.45,0 199.45,24.04 265.93,24.04
               L 265.93,268.18
               L 0,268.18
               Z"
          />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

Wave.propTypes = {
  index: PropTypes.number.isRequired,
};
