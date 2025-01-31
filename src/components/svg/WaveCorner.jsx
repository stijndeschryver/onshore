import { useEffect, useRef } from 'react';
import './WaveCorner.css';

export const WaveCorner = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path1 =
      'M1379,644H0V0s77,94,150,93s162-63,176,102s112.3,100.95,177.15,39.97s192.02-3.68,213.44,99.68s86.91,183.87,203.66,95.11s150.03,9.66,196.89,91.95s261.86,122.29,261.86,122.29Z';
    const path2 =
      'M1379,644H0V0s142,22,150,93s49,153,176,102s178.3-101.05,177.15,39.97s123.02,196.32,213.44,99.68s189.91-47.13,203.66,95.11s71.03,180.66,196.89,91.95s261.86,122.29,261.86,122.29Z';

    function animate() {
      const now = Date.now();
      const duration = 8000;
      const progress = (now % duration) / duration;

      if (pathRef.current) {
        const t = Math.sin(progress * Math.PI * 2) * 0.5 + 0.5;
        pathRef.current.setAttribute('d', interpolatePath(path1, path2, t));
      }

      requestAnimationFrame(animate);
    }

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  function interpolatePath(pathA, pathB, progress) {
    const numbersA = pathA.match(/-?\d+\.?\d*/g).map(Number);
    const numbersB = pathB.match(/-?\d+\.?\d*/g).map(Number);

    const interpolated = numbersA.map((a, i) => {
      const b = numbersB[i];
      return a + (b - a) * progress;
    });

    let index = 0;
    return pathA.replace(/-?\d+\.?\d*/g, () => interpolated[index++]);
  }

  return (
    <div className="wave-corner">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1379 644">
        <path
          ref={pathRef}
          fill="currentColor"
          d="M1379,644H0V0s77,94,150,93s162-63,176,102s112.3,100.95,177.15,39.97s192.02-3.68,213.44,99.68s86.91,183.87,203.66,95.11s150.03,9.66,196.89,91.95s261.86,122.29,261.86,122.29Z"
        />
      </svg>
    </div>
  );
};
