import './Home.css';

export const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <h1>Home</h1>
      </div>
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 24">
          <pattern
            id="wavePattern"
            width="255"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              fill="currentColor"
              d="M129.91,0v.05c-1.58-.03-3.2-.05-4.86-.05C61.31,0,58.65,22.16,0,24h255C196.31,22.16,193.66,0,129.91,0Z"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>
      </div>
      <div className="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 24">
          <pattern
            id="wavePattern2"
            width="255"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              fill="currentColor"
              d="M129.91,0v.05c-1.58-.03-3.2-.05-4.86-.05C61.31,0,58.65,22.16,0,24h255C196.31,22.16,193.66,0,129.91,0Z"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wavePattern2)" />
        </svg>
      </div>
    </section>
  );
};
