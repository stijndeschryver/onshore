import './Header.css';
import { LogoHeader } from './LogoHeader.jsx';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            'Entry intersecting:',
            entry.target.id || entry.target.className,
            entry.isIntersecting
          );
          if (entry.isIntersecting) {
            const sectionId =
              entry.target.className === 'home-spacer'
                ? 'home'
                : entry.target.id;
            console.log('Setting current section to:', sectionId);
            setCurrentSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Log what elements we're observing
    const homeSpacerElement = document.querySelector('.home-spacer');
    const otherSections = document.querySelectorAll('section:not(#home)');

    console.log('Home spacer found:', !!homeSpacerElement);
    console.log('Number of other sections found:', otherSections.length);

    if (homeSpacerElement) {
      observer.observe(homeSpacerElement);
    }

    otherSections.forEach((section) => {
      console.log('Observing section:', section.id);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Log when currentSection changes
  useEffect(() => {
    console.log('Current section changed to:', currentSection);
  }, [currentSection]);

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
