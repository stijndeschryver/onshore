import './Contact.css';
import { Wave } from './svg/Wave.jsx';
import contact from '../assets/contact.svg';

export const Contact = () => {
  return (
    <section id="contact">
      <Wave index={3} />
      <div className="content">
        <h1>Contact</h1>
        <div className="contact-text">
          <strong>Ready to make something amazing?</strong>
          <br />
          Whether you’ve got a project in mind or just want to chat about what
          we can do, we’d love to hear from you.
        </div>
        <div className="personal">
          <div className="personal-photo"></div>
          <div className="personal-info">
            <p className="personal-name">Jurgen</p>
            <a href="tel:+3232489939170" className="personal-phone">
              +32 489 93 91 70
            </a>
            <a href="mailto:jurgen@onshore.be" className="personal-email">
              jurgen@onshore.com
            </a>
          </div>
        </div>
        <img className="Logo" src={contact} alt="Logo" />
        <p className="general-address">
          Gare Maritime,
          <br />
          Picard street 11, 1000 Bruxelles
        </p>
      </div>
    </section>
  );
};
