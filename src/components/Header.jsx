import './Header.css';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(id)?.scrollIntoView();
    }
  };

  return (
    <header>
      <div className="content">
        <div className="logo">
          <RouterLink to="/">On Shore</RouterLink>
        </div>
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
