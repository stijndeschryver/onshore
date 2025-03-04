import { useState, useEffect } from 'react';

export const SVGSequence = ({ className, svgFiles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (svgFiles.length === 0 || hasPlayed) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        // If we're about to reach the last frame
        if (prev === svgFiles.length - 2) {
          clearInterval(intervalId);
          setHasPlayed(true);
        }
        return (prev + 1) % svgFiles.length;
      });
    }, 30);

    return () => clearInterval(intervalId);
  }, [svgFiles, hasPlayed]);

  if (svgFiles.length === 0) {
    return null;
  }

  return (
    <img
      className={`${className} svg-sequence`}
      src={svgFiles[currentIndex]}
      alt={`Logo sequence ${currentIndex + 1}`}
    />
  );
};
