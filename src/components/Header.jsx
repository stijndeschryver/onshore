import './Header.css';
import { OnShore } from './svg/OnShore.jsx';
import { useCurrentSection } from '../hooks/useCurrentSection.js';
import { scrollToSection } from '../utils/scrollUtils.js';
import { useState } from 'react';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  const currentSection = useCurrentSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`section-${currentSection} ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <OnShore className="LogoHeader" />
      <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a
          onClick={() => handleNavClick('home')}
          className={currentSection === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          onClick={() => handleNavClick('cases')}
          className={currentSection === 'cases' ? 'active' : ''}
        >
          Cases
        </a>
        <a
          onClick={() => handleNavClick('about')}
          className={currentSection === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a
          onClick={() => handleNavClick('contact')}
          className={currentSection === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
