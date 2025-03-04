import './Cases.css';
import { Wave } from './svg/Wave.jsx';
import { WaveCorner } from './svg/WaveCorner.jsx';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Card } from './Card.jsx';

export const Cases = () => {
  const [openId, setOpenId] = useState(null);

  const handleOpen = (id) => setOpenId(id);
  const handleClose = () => setOpenId(null);

  const cards = [
    {
      id: 1,
      title: 'Static to video',
      brand: 'BASE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
      className: 'card-large bg-card-1',
    },
    {
      id: 2,
      title: 'Static AI image generation',
      brand: 'TotalEnergies',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
      className: 'card-wide bg-card-2',
    },
    {
      id: 3,
      title: 'Static to video',
      brand: 'Richa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
      className: 'card-wide bg-card-3',
    },
    {
      id: 4,
      title: 'Avatar generation (Synthetic)',
      brand: 'BNP Paribas Fortis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
      className: 'card-wide bg-card-4',
    },
    {
      id: 5,
      title: 'Video with added animation',
      brand: 'BNP Paribas Fortis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
      className: 'card-large bg-card-5',
    },
    {
      id: 6,
      title: 'Prompted video',
      brand: 'Telenet One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
      className: 'card-wide bg-card-6',
    },
    {
      id: 7,
      title: 'Banners',
      brand: 'Doccle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      image: '/image.jpg',
      className: 'card-full-width bg-card-7',
    },
  ];

  // Find the current card when one is open
  const currentCard = openId ? cards.find((item) => item.id === openId) : null;

  return (
    <section id="cases">
      <Wave index={1} />
      <Wave index={2} />
      <div className="content">
        {/* Card List */}
        <ul className="masonry-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} handleOpen={handleOpen} />
          ))}
        </ul>

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
                >
                  <motion.div
                    className="card-image-container"
                    layoutId={`card-image-container-${currentCard.id}`}
                  >
                    <motion.img
                      className="card-image"
                      src={currentCard.image}
                      alt={currentCard.title}
                      layoutId={`card-image-${currentCard.id}`}
                    />
                  </motion.div>
                  <motion.div
                    className="title-container"
                    layoutId={`title-container-${currentCard.id}`}
                    layout="position"
                  >
                    <span className="h6">{currentCard.brand}</span>
                    <h2 className="h3">{currentCard.title}</h2>
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
