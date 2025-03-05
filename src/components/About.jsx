import './About.css';
import { OnBrief } from './svg/OnBrief.jsx';
import { OnCulture } from './svg/OnCulture.jsx';
import { OnTime } from './svg/OnTime.jsx';
import { OnBudget } from './svg/OnBudget.jsx';
import { NavigationArrow } from './svg/NavigationArrow.jsx';
import { useRef, useState, useEffect } from 'react';

export const About = () => {
  const cardsRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(4);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const originalCards = [
    {
      id: 'OnBrief',
      svg: OnBrief,
      content:
        'A clear brief is half the battle. We ask the right questions, nail the details, and ensure smooth sailing from start to finish.',
    },
    {
      id: 'OnTime',
      svg: OnTime,
      content:
        'Fast, flexible, and always on schedule. Most projects are ready in a week. Need it faster? Just say the word.',
    },
    {
      id: 'OnBudget',
      svg: OnBudget,
      content:
        "No hidden fees, no surprises. Our fixed pricing means you know exactly what you're paying for—top-quality work at a fair price.",
    },
    {
      id: 'OnCulture',
      svg: OnCulture,
      content:
        'A Belgian team that gets you. No language barriers, no timezone headaches—just seamless production.',
    },
  ];

  const checkScrollable = () => {
    const container = cardsRef.current;
    if (!container) return;

    // Check if we can scroll left
    setCanScrollLeft(container.scrollLeft > 0);

    // Check if we can scroll right
    const maxScroll = container.scrollWidth - container.clientWidth;
    setCanScrollRight(container.scrollLeft < maxScroll - 1); // Subtract 1 to account for rounding
  };

  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      setVisibleCards(4);
    } else if (width > 992) {
      setVisibleCards(3);
    } else if (width > 768) {
      setVisibleCards(2);
    } else {
      setVisibleCards(1);
    }
  };

  useEffect(() => {
    // Initial setup
    updateVisibleCards();
    checkScrollable();

    // Add event listeners
    const container = cardsRef.current;
    if (container) {
      // Handle window resize
      const handleResize = () => {
        updateVisibleCards();
        checkScrollable();
      };

      // Handle scroll
      const handleScroll = () => {
        checkScrollable();
      };

      window.addEventListener('resize', handleResize);
      container.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [visibleCards]);

  const scroll = (direction) => {
    if (!cardsRef.current) return;

    const container = cardsRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 0;
    const gap = parseInt(getComputedStyle(container).gap) || 16;
    const scrollAmount = cardWidth + gap;

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
        <p className="intro">
          For years, we saw digital production work being outsourced offshore
          and nearshore. Sure, it was cheap. But the quality? Let's just say it
          left a lot to be desired. We knew there had to be a better way:
          OnShore.
        </p>
        <div className="on-cards-container">
          <button
            className="nav-button prev"
            onClick={() => scroll('prev')}
            disabled={!canScrollLeft}
            aria-label="Previous card"
          >
            <NavigationArrow direction="left" className="nav-arrow" />
          </button>
          <div className="on-cards" ref={cardsRef}>
            {originalCards.map((card) => {
              const SvgComponent = card.svg;
              return (
                <div key={card.id} className="on-card">
                  <SvgComponent className="logo" />
                  <p>{card.content}</p>
                </div>
              );
            })}
          </div>
          <button
            className="nav-button next"
            onClick={() => scroll('next')}
            disabled={!canScrollRight}
            aria-label="Next card"
          >
            <NavigationArrow className="nav-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};
