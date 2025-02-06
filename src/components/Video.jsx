import { useState } from 'react';
import './Video.css';

export const VideoWithLoading = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="video-container">
      {isLoading && (
        <div className="loading-overlay">
          <p className="loading-text">Video loading...</p>
        </div>
      )}
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="video"
        onLoadedData={() => setIsLoading(false)}
      />
    </div>
  );
};
