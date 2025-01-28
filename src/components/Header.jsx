import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to="/">On Shore</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cases">Cases</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};
