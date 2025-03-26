import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const OnShoreAnimation = ({ className }) => {
  const canvasRef = useRef(null);
  const animContainerRef = useRef(null);
  const domOverlayRef = useRef(null);
  const stageRef = useRef(null); // Add a ref to store the stage instance

  useEffect(() => {
    // Load the CreateJS library
    const script1 = document.createElement('script');
    script1.src =
      'https://s0.2mdn.net/ads/studio/cached_libs/createjs_2019.11.15_min.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Once CreateJS is loaded, load the animation code
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = '/OS_Logo_HTML.js'; // Make sure this path is correct
      script2.async = true;
      document.body.appendChild(script2);

      script2.onload = () => {
        // Initialize animation
        initAnimation();
      };
    };

    // Cleanup
    return () => {
      document.body.removeChild(script1);
      const script2 = document.querySelector('script[src="/OS_Logo_HTML.js"]');
      if (script2) document.body.removeChild(script2);
    };
  }, []);

  const initAnimation = () => {
    const canvas = canvasRef.current;
    const anim_container = animContainerRef.current;
    const dom_overlay_container = domOverlayRef.current;

    const comp = window.AdobeAn.getComposition(
      'C1EC6ECE26BC4734860D6EA5E46C836E'
    );

    // Handle the animation initialization
    const handleComplete = () => {
      const lib = comp.getLibrary();
      const exportRoot = new lib.OS_Logo_HTML();
      const stage = new lib.Stage(canvas);
      stageRef.current = stage; // Store the stage in the ref

      // Make stage accessible globally (this is key to fixing the error)
      window.stage = stage;

      // Start animation
      stage.addChild(exportRoot);
      window.createjs.Ticker.framerate = lib.properties.fps;
      window.createjs.Ticker.addEventListener('tick', stage);

      // Make responsive - keep the container and canvas proportions
      window.AdobeAn.makeResponsive(true, 'width', true, 1, [
        canvas,
        anim_container,
        dom_overlay_container,
      ]);
    };

    handleComplete();
  };

  return (
    <div ref={animContainerRef} className={className}>
      <canvas ref={canvasRef} width="600" height="500" />
      <div ref={domOverlayRef} className="animation-overlay" />
    </div>
  );
};

OnShoreAnimation.propTypes = {
  className: PropTypes.string,
};
