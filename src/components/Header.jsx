import './Header.css';
import { LogoHeader } from './LogoHeader.jsx';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
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
