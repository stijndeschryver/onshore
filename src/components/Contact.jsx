import './Contact.css';
import { Wave } from './svg/Wave.jsx';

export const Contact = () => {
  return (
    <section id="contact">
      <Wave index={3} />
      <div className="content">
        <div className="image"></div>
        <div className="info">
          <h1>Contact</h1>
          <div className="personal">
            <div className="personal-photo"></div>
            <div className="personal-info">
              <p className="personal-name">Jurgen</p>
              <a href="tel:+32000000000" className="personal-phone">
                +32 000 00 00 00
              </a>
              <a href="mailto:jurgen@onshore.com" className="personal-email">
                jurgen@onshore.com
              </a>
            </div>
          </div>
          <div className="general">
            <a href="tel:+32000000000" className="general-phone">
              +32 000 00 00 00
            </a>
            <a href="mailto:info@onshore.com" className="general-email">
              info@onshore.com
            </a>
            <p className="general-address">
              Gare Maritime
              <br />
              Rue Picard 11
              <br />
              1000 Bruxelles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
