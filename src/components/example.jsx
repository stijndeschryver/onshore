import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

function AppStore() {
  const [openId, setOpenId] = useState(null);

  const handleOpen = (id) => setOpenId(id);
  const handleClose = () => setOpenId(null);

  // Find the current item when one is open
  const currentItem = openId ? items.find((item) => item.id === openId) : null;

  return (
    <div id="app-store">
      {/* Card List */}
      <ul className="card-list">
        {items.map((card) => (
          <li
            key={card.id}
            className={`card ${card.theme}`}
            onClick={() => handleOpen(card.id)}
          >
            <motion.div
              className="card-content"
              layoutId={`card-container-${card.id}`}
            >
              <motion.div
                className="card-image-container"
                layoutId={`card-image-container-${card.id}`}
              >
                <motion.img
                  className="card-image"
                  src={`/photos/app-store/${card.id}.jpg`}
                  alt=""
                  style={{
                    top: card.top,
                    bottom: card.bottom,
                    width: card.width || '100%',
                    left: card.left,
                  }}
                  layoutId={`card-image-${card.id}`}
                />
              </motion.div>
              <motion.div
                className="title-container"
                layoutId={`title-container-${card.id}`}
                layout="position"
              >
                <span className="h6">{card.category}</span>
                <h2 className="h3">{card.title}</h2>
              </motion.div>
            </motion.div>
          </li>
        ))}
      </ul>

      {/* Expanded Item View */}
      <AnimatePresence>
        {currentItem && (
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
            <div className={`card-content-container open ${currentItem.theme}`}>
              <motion.div
                className="card-content"
                layoutId={`card-container-${currentItem.id}`}
              >
                <motion.div
                  className="card-image-container"
                  layoutId={`card-image-container-${currentItem.id}`}
                >
                  <motion.img
                    className="card-image"
                    src={`/photos/app-store/${currentItem.id}.jpg`}
                    alt=""
                    style={{
                      top: currentItem.top,
                      bottom: currentItem.bottom,
                      width: currentItem.width || '100%',
                      left: currentItem.left,
                    }}
                    layoutId={`card-image-${currentItem.id}`}
                  />
                </motion.div>
                <motion.div
                  className="title-container"
                  layoutId={`title-container-${currentItem.id}`}
                  layout="position"
                >
                  <span className="h6">{currentItem.category}</span>
                  <h2 className="h3">{currentItem.title}</h2>
                </motion.div>
                <motion.div className="content-container small" animate>
                  {currentItem.content}
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AppStore;
