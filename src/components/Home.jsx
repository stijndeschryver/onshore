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
        </div>
      </section>
    </>
  );
};
