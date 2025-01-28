import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export const ScrollManager = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const scrollToSection = async () => {
      const section = location.pathname.substring(1) || 'home';

      try {
        const response = await fetch(`${API_URL}${location.pathname}`);
        const data = await response.json();

        if (data.valid) {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({
              behavior: isFirstRender.current ? 'instant' : 'smooth',
            });
            isFirstRender.current = false;
          }
        }
      } catch (error) {
        console.error('Error validating section:', error);
      }
    };

    scrollToSection().catch((error) => {
      console.error('Error in scrollToSection:', error);
    });
  }, [location]);

  useEffect(() => {
    // Configuration for the Intersection Observer
    const options = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.5, // trigger when 50% of the section is visible
    };

    // Callback function for the Intersection Observer
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Update URL without triggering navigation
          window.history.replaceState(
            null,
            '',
            sectionId === 'home' ? '/' : `/${sectionId}`
          );
        }
      });
    };

    // Create and store the observer
    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Get all sections and observe them
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observerRef.current.observe(section);
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array since we only want to set this up once

  return null;
};
