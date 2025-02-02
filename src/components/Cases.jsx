import './Cases.css';
import { Wave } from './svg/Wave.jsx';
import { WaveCorner } from './svg/WaveCorner.jsx';
import { useCases } from '../hooks/useCases.js';

export const Cases = () => {
  const { data, error } = useCases();

  return (
    <section id="cases">
      <Wave index={1} />
      <Wave index={2} />
      <div className="content">
        <h1>Cases</h1>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          data.map((caseItem) => (
            <video
              key={caseItem.id}
              src={caseItem.video_uri}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          ))
        )}
      </div>
      <WaveCorner />
    </section>
  );
};
