import { useState, useEffect } from 'react';

export const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId =
              entry.target.className === 'home-spacer'
                ? 'home'
                : entry.target.id;
            setCurrentSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Log what elements we're observing
    const homeSpacerElement = document.querySelector('.home-spacer');
    const otherSections = document.querySelectorAll('section:not(#home)');

    if (homeSpacerElement) {
      observer.observe(homeSpacerElement);
    }

    otherSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return currentSection;
};
