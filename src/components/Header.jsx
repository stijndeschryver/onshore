import './Header.css';
import { LogoHeader } from './LogoHeader.jsx';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
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

      // Only observe the home-spacer and other sections (not home)
      const homeSpacerElement = document.querySelector('.home-spacer');
      const otherSections = document.querySelectorAll('section:not(#home)');

      if (homeSpacerElement) {
        observer.observe(homeSpacerElement);
      }

      otherSections.forEach((section) => {
        if (section.id !== 'home') {
          // Extra check to ensure we're not observing home
          observer.observe(section);
        }
      });

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(id)?.scrollIntoView();
    }
  };

  return (
    <header className={`section-${currentSection}`}>
      <div className="content">
        <LogoHeader className="LogoHeader" />
        <nav className="nav">
          <a onClick={() => scrollTo('home')}>Home</a>
          <a onClick={() => scrollTo('cases')}>Cases</a>
          <a onClick={() => scrollTo('about')}>About</a>
          <a onClick={() => scrollTo('contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
};
