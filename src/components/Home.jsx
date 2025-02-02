// Home.jsx
import { useEffect, useRef } from 'react';
import './Home.css';
import { Logo } from './svg/Logo';

export const Home = () => {
  const spacerRef = useRef(null);

  useEffect(() => {
    if (spacerRef.current) {
      // Get the initial height when the component mounts
      const initialHeight = spacerRef.current.offsetHeight;
      // Set the fixed height
      spacerRef.current.style.height = `${initialHeight}px`;
    }
  }, []);

  return (
    <>
      <div className="home-spacer" ref={spacerRef} />
      <section id="home">
        <div className="content">
          <Logo className="Logo" />
          <h2>Baseline</h2>
        </div>
      </section>
    </>
  );
};
