import './Home.css';
import { Logo } from './Logo';

export const Home = () => {
  return (
    <div className="snap-container">
      <section id="home">
        <div className="content">
          <Logo className="Logo" />
        </div>
      </section>
    </div>
  );
};
