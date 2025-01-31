import './Header.css';
import { LogoHeader } from './LogoHeader.jsx';
import { useCurrentSection } from '../hooks/useCurrentSection.js';
import { scrollToSection } from '../utils/scrollUtils.js';

export const Header = () => {
  const currentSection = useCurrentSection();

  return (
    <header className={`section-${currentSection}`}>
      <div className="content">
        <LogoHeader className="LogoHeader" />
        <nav className="nav">
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('cases')}>Cases</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
};
