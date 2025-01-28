import './Wave.css';

export const Wave = () => {
  return (
    <div className="wave-container">
      <svg viewBox="0 0 2 1" preserveAspectRatio="none">
        <defs>
          <path
            id="wave"
            d="M0 1v-.5q.125.5.25 0t.25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0 .25 0v.5z"
          />
        </defs>
        <g>
          <use href="#wave" y=".2" className="wave-1" />
          <use href="#wave" y=".1" className="wave-2" />
        </g>
      </svg>
    </div>
  );
};
