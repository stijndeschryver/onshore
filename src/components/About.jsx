import './About.css';
import { LogoHeader } from './svg/LogoHeader.jsx';

export const About = () => {
  return (
    <section id="about">
      <div className="content">
        <h1>who we are</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.
          Mauris cursus eu quam at condimentum. Vivamus metus metus, imperdiet
          ut molestie a, feugiat a nisl. Duis eu dolor viverra, maximus turpis
          nec, fermentum arcu. Nulla porta, nisi vehicula imperdiet accumsan,
          neque mi pellentesque ipsum, id suscipit ante felis ac diam.
          Pellentesque dapibus magna odio.
        </p>
        <div className="cards">
          <div className="card">
            <LogoHeader className="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.
            </p>
          </div>
          <div className="card">
            <LogoHeader className="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.
            </p>
          </div>
          <div className="card">
            <LogoHeader className="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
