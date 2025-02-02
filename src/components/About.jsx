import './About.css';
import { LogoHeader } from './svg/LogoHeader.jsx';
import { NavigationArrow } from './svg/NavigationArrow.jsx';
import { useRef } from 'react';

export const About = () => {
  const cardsRef = useRef(null);

  const originalCards = [
    {
      id: 1,
      content:
        '1 ipsum dolor sit amet, consectetur adipiscing elit. Quisque' +
        ' eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.',
    },
    {
      id: 2,
      content:
        '2 ipsum dolor sit amet, consectetur adipiscing elit. Quisque' +
        ' eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.',
    },
    {
      id: 3,
      content:
        '3 ipsum dolor sit amet, consectetur adipiscing elit. Quisque' +
        ' eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.',
    },
  ];

  return (
    <section id="about">
      <div className="content">
        <h1>Who we are</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          eleifend felis ut mauris vulputate, ac sollicitudin dui accumsan.
          Mauris cursus eu quam at condimentum. Vivamus metus metus, imperdiet
          ut molestie a, feugiat a nisl. Duis eu dolor viverra, maximus turpis
          nec, fermentum arcu. Nulla porta, nisi vehicula imperdiet accumsan,
          neque mi pellentesque ipsum, id suscipit ante felis ac diam.
          Pellentesque dapibus magna odio.
        </p>
        <div className="cards-container">
          <button
            className="nav-button prev"
            onClick={() => scroll('prev')}
            aria-label="Previous card"
          >
            <NavigationArrow direction="left" className="nav-arrow" />
          </button>
          <div className="cards" ref={cardsRef}>
            {originalCards.map((card) => (
              <div
                key={card.key}
                className="card"
                style={{ scrollSnapAlign: 'start' }}
              >
                <LogoHeader className="logo" />
                <p>{card.content}</p>
              </div>
            ))}
          </div>
          <button
            className="nav-button next"
            onClick={() => scroll('next')}
            aria-label="Next card"
          >
            <NavigationArrow className="nav-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};
