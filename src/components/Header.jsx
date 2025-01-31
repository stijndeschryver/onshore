import './Header.css';
import { LogoHeader } from './svg/LogoHeader.jsx';
import { useCurrentSection } from '../hooks/useCurrentSection.js';
import { scrollToSection } from '../utils/scrollUtils.js';

export const Header = () => {
  const currentSection = useCurrentSection();
  console.log('Current section:', currentSection); // Add this

  return (
    <header className={`section-${currentSection}`}>
      <div className="content">
        <LogoHeader className="LogoHeader" />
        <nav className="nav">
          <a
            onClick={() => scrollToSection('home')}
            className={currentSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection('cases')}
            className={currentSection === 'cases' ? 'active' : ''}
          >
            Cases
          </a>
          <a
            onClick={() => scrollToSection('about')}
            className={currentSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            onClick={() => scrollToSection('contact')}
            className={currentSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
