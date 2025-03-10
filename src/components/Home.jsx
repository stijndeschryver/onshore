import './Home.css';
import { OnShoreAnimation } from './OnShoreAnimation';

export const Home = () => {
  return (
    <>
      <div className="home-spacer" />
      <section id="home">
        <div className="content">
          <OnShoreAnimation className="Logo" />
          <p className="intro">
            Forget off-shore. Forget near-shore. This is&nbsp;
            <strong>OnShore</strong>, a fully independent digital production
            studio based in Belgium, powered by local talent with a passion for
            making amazing digital stuff. On a budget.
          </p>
        </div>
      </section>
    </>
  );
};
