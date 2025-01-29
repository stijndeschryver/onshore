import './Wave.css';
import PropTypes from 'prop-types';

export const Wave = ({ index }) => {
  const waveId = `wave-${index}`;
  const patternId = `wavePattern-${index}`;
  const waveBottomId = `waveBottom-${index}`;

  return (
    <div className={`wave ${waveId}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2040 24">
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
