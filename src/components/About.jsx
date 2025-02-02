import './About.css';
import { LogoHeader } from './svg/LogoHeader.jsx';
import { NavigationArrow } from './svg/NavigationArrow.jsx';
import { useRef, useState, useEffect } from 'react';

export const About = () => {
  const cardsRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

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

  const checkScrollPosition = () => {
    if (!cardsRef.current) return;

    const container = cardsRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 0;
    const gap = 32; // 2rem gap
    const totalCardWidth = cardWidth + gap;

    // Calculate what percentage of the next/previous card is visible
    const scrollPosition = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Calculate which card we're currently on (0-based index)
    const currentCardIndex = Math.round(scrollPosition / totalCardWidth);

    // Calculate the expected scroll position for this card
    const expectedScrollPosition = currentCardIndex * totalCardWidth;

    // Check if we're more than 50% towards the next or previous position
    const scrollDifference = Math.abs(scrollPosition - expectedScrollPosition);
    const isMovingToNext = scrollPosition > expectedScrollPosition;

    // Disable previous button if we're at the start or moving towards the first card
    setIsAtStart(
      currentCardIndex === 0 &&
        (!isMovingToNext || scrollDifference < totalCardWidth * 0.5)
    );

    // Disable next button if we're at the end or moving towards the last card
    setIsAtEnd(
      currentCardIndex === originalCards.length - 1 ||
        Math.abs(maxScroll - scrollPosition) < totalCardWidth * 0.5
    );
  };

  useEffect(() => {
    const container = cardsRef.current;
    if (container) {
      // Check initial position
      checkScrollPosition();
      // Add scroll event listener
      container.addEventListener('scroll', checkScrollPosition);
      // Add resize listener to handle window size changes
      window.addEventListener('resize', checkScrollPosition);

      // Set up intersection observer for smoother updates
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(() => checkScrollPosition());
        },
        { threshold: 0.5 }
      );

      container.childNodes.forEach((card) => {
        observer.observe(card);
      });

      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
        observer.disconnect();
      };
    }
  }, []);

  const scroll = (direction) => {
    if (!cardsRef.current) return;

    const container = cardsRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 0;
    const scrollAmount = cardWidth + 32; // card width + gap (2rem = 32px)

    if (direction === 'next') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

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
            disabled={isAtStart}
            aria-label="Previous card"
          >
            <NavigationArrow direction="left" className="nav-arrow" />
          </button>
          <div className="cards" ref={cardsRef}>
            {originalCards.map((card) => (
              <div
                key={card.id}
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
            disabled={isAtEnd}
            aria-label="Next card"
          >
            <NavigationArrow className="nav-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};
