import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const OnShoreAnimation = ({ className }) => {
  const canvasRef = useRef(null);
  const animContainerRef = useRef(null);
  const domOverlayRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const stage = stageRef.current;
      if (!canvas || !stage || !window.AdobeAn) return;

      const comp = window.AdobeAn.getComposition(
        'C1EC6ECE26BC4734860D6EA5E46C836E'
      );
      const lib = comp.getLibrary();

      const containerWidth = canvas.offsetWidth;
      const containerHeight = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;

      const originalWidth = lib.properties.width;
      const originalHeight = lib.properties.height;

      const scale = Math.min(
        (containerWidth * dpr) / originalWidth,
        (containerHeight * dpr) / originalHeight
      );

      stage.scaleX = scale;
      stage.scaleY = scale;
      stage.update();
    };

    const initAnimation = () => {
      const canvas = canvasRef.current;
      const comp = window.AdobeAn.getComposition(
        'C1EC6ECE26BC4734860D6EA5E46C836E'
      );
      const lib = comp.getLibrary();

      const exportRoot = new lib.OS_Logo_HTML();
      const stage = new lib.Stage(canvas);
      stageRef.current = stage;

      stage.addChild(exportRoot);
      window.createjs.Ticker.framerate = lib.properties.fps;
      window.createjs.Ticker.addEventListener('tick', stage);

      canvas.removeAttribute('width');
      canvas.removeAttribute('height');
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      handleResize();
    };

    const loadScriptsAndInit = () => {
      const script1 = document.createElement('script');
      script1.src =
        'https://s0.2mdn.net/ads/studio/cached_libs/createjs_2019.11.15_min.js';
      script1.async = true;
      document.body.appendChild(script1);

      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = '/OS_Logo_HTML.js';
        script2.async = true;
        document.body.appendChild(script2);
        script2.onload = initAnimation;
      };
    };

    if (!window.AdobeAn || !window.createjs) {
      loadScriptsAndInit();
    } else {
      initAnimation();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={animContainerRef} className={className}>
      <canvas ref={canvasRef} />
      <div ref={domOverlayRef} className="animation-overlay" />
    </div>
  );
};

OnShoreAnimation.propTypes = {
  className: PropTypes.string,
};
