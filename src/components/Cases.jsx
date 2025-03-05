import './Cases.css';
import { Wave } from './svg/Wave.jsx';
import { WaveCorner } from './svg/WaveCorner.jsx';
import { AnimatePresence, motion, LayoutGroup } from 'motion/react';
import { useState, useMemo } from 'react';
import { Card } from './Card.jsx';

export const Cases = () => {
  const [openId, setOpenId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const handleOpen = (id) => setOpenId(id);
  const handleClose = () => setOpenId(null);

  const handleHover = (id) => setHoveredId(id);
  const handleHoverEnd = () => setHoveredId(null);

  const cardsData = [
    {
      id: 1,
      title: 'Static to video',
      brand: 'BASE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
    },
    {
      id: 2,
      title: 'Static AI image generation',
      brand: 'TotalEnergies',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
    },
    {
      id: 3,
      title: 'Static to video',
      brand: 'Richa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
    },
    {
      id: 4,
      title: 'Avatar generation (Synthetic)',
      brand: 'BNP Paribas Fortis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
    },
    {
      id: 5,
      title: 'Video with added animation',
      brand: 'BNP Paribas Fortis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
    },
    {
      id: 6,
      title: 'Prompted video',
      brand: 'Telenet One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
    },
    {
      id: 7,
      title: 'Banners',
      brand: 'Doccle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
    },
  ];

  const getGridSpans = useMemo(() => {
    const defaultSpans = {
      1: { colSpan: 3, rowSpan: 4 },
      2: { colSpan: 3, rowSpan: 2 },
      3: { colSpan: 3, rowSpan: 2 },
      4: { colSpan: 3, rowSpan: 2 },
      5: { colSpan: 3, rowSpan: 4 },
      6: { colSpan: 3, rowSpan: 2 },
      7: { colSpan: 6, rowSpan: 2 },
    };

    // No hover, return defaults
    if (!hoveredId) return defaultSpans;

    // Copy defaults to start with
    const spans = { ...defaultSpans };

    switch (hoveredId) {
      case 1:
        spans[1] = { colSpan: 4, rowSpan: 4 };
        spans[2] = { colSpan: 2, rowSpan: 2 };
        spans[3] = { colSpan: 2, rowSpan: 2 };
        break;
      case 2:
        spans[2] = { colSpan: 3, rowSpan: 3 };
        spans[3] = { colSpan: 3, rowSpan: 1 };
        break;
      case 3:
        spans[3] = { colSpan: 3, rowSpan: 3 };
        spans[2] = { colSpan: 3, rowSpan: 1 };
        break;
      case 4:
        spans[4] = { colSpan: 3, rowSpan: 3 };
        spans[6] = { colSpan: 3, rowSpan: 1 };
        break;
      case 5:
        spans[5] = { colSpan: 4, rowSpan: 4 };
        spans[4] = { colSpan: 2, rowSpan: 2 };
        spans[6] = { colSpan: 2, rowSpan: 2 };
        break;
      case 6:
        spans[6] = { colSpan: 3, rowSpan: 3 };
        spans[4] = { colSpan: 3, rowSpan: 1 };
        break;
      case 7:
        spans[7] = { colSpan: 6, rowSpan: 3 };
        spans[6] = { colSpan: 3, rowSpan: 1 };
        spans[5] = { colSpan: 3, rowSpan: 3 };
        break;
      default:
        break;
    }

    return spans;
  }, [hoveredId]);

  // Add grid spans to each card
  const cards = useMemo(() => {
    return cardsData.map((card) => ({
      ...card,
      colSpan: getGridSpans[card.id].colSpan,
      rowSpan: getGridSpans[card.id].rowSpan,
    }));
  }, [cardsData, getGridSpans]);

  // Find the current card when one is open
  const currentCard = openId
    ? cardsData.find((item) => item.id === openId)
    : null;

  return (
    <section id="cases">
      <Wave index={1} />
      <Wave index={2} />
      <div className="content">
        {/* Card List using Card component */}
        <LayoutGroup>
          <ul className="masonry-grid">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleOpen={handleOpen}
                isHovered={hoveredId}
                onHover={handleHover}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </ul>
        </LayoutGroup>

        {/* Expanded Item View */}
        <AnimatePresence>
          {currentCard && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                style={{ pointerEvents: 'auto' }}
                className="overlay"
                onClick={handleClose}
              />
              <div className="card-content-container open">
                <motion.div
                  className="card-content"
                  layoutId={`card-container-${currentCard.id}`}
                  transition={{
                    duration: 0.8,
                    ease: 'linear',
                    type: 'tween',
                  }}
                >
                  <div className="card-image-container">
                    <motion.img
                      className="card-image"
                      src={currentCard.image}
                      alt={currentCard.title}
                      layoutId={`card-image-${currentCard.id}`}
                      transition={{
                        duration: 0.8,
                        ease: 'linear',
                        type: 'tween',
                      }}
                    />
                  </div>
                  <motion.div
                    className="title-container"
                    layoutId={`title-container-${currentCard.id}`}
                    layout="position"
                    transition={{
                      duration: 0.8,
                      ease: 'linear',
                      type: 'tween',
                    }}
                  >
                    <h1>{currentCard.brand}</h1>
                    <h2>{currentCard.title}</h2>
                  </motion.div>
                  <motion.div
                    className="content-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <p>{currentCard.description}</p>
                  </motion.div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        <div className="wave-extension-left"></div>
        <WaveCorner />
        <div className="wave-extension-right"></div>
      </div>
    </section>
  );
};
