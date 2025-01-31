import './Cases.css';
import { Wave } from './animations/Wave.jsx';
import { WaveCorner } from './animations/WaveCorner.jsx';
import { useCases } from '../hooks/useCases.js';

export const Cases = () => {
  const { data, error } = useCases();

  return (
    <section id="cases">
      <Wave index={1} />
      <Wave index={2} />
      <div className="content">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          data.map((caseItem) => (
            <video controls key={caseItem.id} src={caseItem.video_uri} />
          ))
        )}
      </div>
      <WaveCorner />
    </section>
  );
};
