import './Cases.css';
import { Wave } from './svg/Wave.jsx';
import { WaveCorner } from './svg/WaveCorner.jsx';
import { useCases } from '../hooks/useCases.js';
import { VideoWithLoading } from './Video.jsx';

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
            <VideoWithLoading key={caseItem.id} src={caseItem.video_uri} />
          ))
        )}
        <p className="cases-description">
          We create the stuff that makes your digital campaigns pop out. Whether
          it’s display ads, social content, online video, animations, emails,
          mini-sites, or (D)OOH.
          <strong>
            You focus on the big ideas, we’ll take care of the rest
          </strong>
        </p>
        <div className="wave-extension-left"></div>
        <WaveCorner />
        <div className="wave-extension-right"></div>
      </div>
    </section>
  );
};
