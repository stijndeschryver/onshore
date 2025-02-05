import './Home.css';
{
  /*import { Logo } from './svg/Logo';*/
}
import logo from '../assets/logo_with_baseline.svg';

export const Home = () => {
  return (
    <>
      <div className="home-spacer" />
      <section id="home">
        <div className="content">
          {/*<Logo className="Logo" />*/}
          <img className="Logo" src={logo} alt="Logo" />
          <p className="intro">
            Forget off-shore. Forget near-shore. This is&nbsp;
            <strong>OnShore</strong>, a fully independent digital production
            company based in Belgium, powered by local talent with a passion for
            making amazing digital stuff. At affordable rates.
          </p>
        </div>
      </section>
    </>
  );
};
