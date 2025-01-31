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
              <p className="personal-phone">+32 000 00 00 00</p>
              <p className="personal-email">jurgen@onshore.com</p>
            </div>
          </div>
          <div className="general">
            <p className="general-phone">+32 000 00 00 00</p>
            <p className="general-email">info@onshore.com</p>
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
