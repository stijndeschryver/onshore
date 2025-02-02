import './Home.css';
import { Logo } from './svg/Logo';

export const Home = () => {
  return (
    <>
      <div className="home-spacer" />
      <section id="home">
        <div className="content">
          <Logo className="Logo" />
          <h2>Baseline</h2>
        </div>
      </section>
    </>
  );
};
