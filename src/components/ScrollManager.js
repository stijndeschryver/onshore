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
          if (section === 'home') {
            // Scroll to top for home section
            window.scrollTo({
              top: 0,
              behavior: isFirstRender.current ? 'instant' : 'smooth',
            });
          } else {
            const element = document.getElementById(section);
            if (element) {
              element.scrollIntoView({
                behavior: isFirstRender.current ? 'instant' : 'smooth',
              });
            }
          }
          isFirstRender.current = false;
        }
      } catch (error) {
        console.error('Error validating section:', error);
      }
    };

    scrollToSection();
  }, [location]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

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

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Get all sections except home since we're handling it differently
    const sections = document.querySelectorAll('section[id]:not(#home)');
    sections.forEach((section) => {
      observerRef.current.observe(section);
    });

    // Add special handling for home section
    const handleScroll = () => {
      if (window.scrollY === 0) {
        window.history.replaceState(null, '', '/');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};
