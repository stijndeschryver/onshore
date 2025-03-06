import './Cases.css';
import { Wave } from './svg/Wave.jsx';
import { WaveCorner } from './svg/WaveCorner.jsx';
import { useShowreel } from '../hooks/useShowreel.js';
import { VideoWithLoading } from './Video.jsx';

export const Cases = () => {
  const { data, error, loading } = useShowreel();
  const showreel = data[0];

  return (
    <section id="cases">
      <Wave index={1} />
      <Wave index={2} />
      <div className="content">
        {error ? (
          <div className="error-message">Error: {error}</div>
        ) : loading ? (
          <div className="loading-message">Loading showreel...</div>
        ) : showreel && showreel.video_status === 'success' ? (
          <VideoWithLoading src={showreel.video_uri} />
        ) : (
          <div className="error-message">No showreel available</div>
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
