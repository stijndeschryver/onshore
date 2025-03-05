import './Card.css';
import { motion } from 'motion/react';
import PropTypes from 'prop-types';

export const Card = ({ card, handleOpen, onHover, onHoverEnd }) => {
  return (
    <motion.li
      className="card"
      layout
      layoutId={`unique-card-${card.id}`}
      style={{
        gridColumn: `span ${card.colSpan}`,
        gridRow: `span ${card.rowSpan}`,
      }}
      transition={{ layout: { duration: 0.2, ease: 'linear', type: 'tween' } }}
      onHoverStart={() => onHover && onHover(card.id)}
      onHoverEnd={onHoverEnd}
      onClick={() => handleOpen(card.id)}
    >
      <div className="card-content">
        {' '}
        {/* Regular div, not motion.div */}
        <div className="card-image-container">
          {' '}
          {/* Regular div */}
          <motion.img
            className="card-image"
            src={card.image}
            alt={card.title}
            layoutId={`card-image-${card.id}`}
            transition={{
              layout: { duration: 0.2, ease: 'linear', type: 'tween' },
            }}
          />
        </div>
        <motion.div
          className="title-container"
          layoutId={`title-container-${card.id}`}
          layout="position"
          transition={{
            layout: { duration: 0.2, ease: 'linear', type: 'tween' },
          }}
        >
          <h1>{card.brand}</h1>
          <h2>{card.title}</h2>
        </motion.div>
      </div>
    </motion.li>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    colSpan: PropTypes.number.isRequired,
    rowSpan: PropTypes.number.isRequired,
  }).isRequired,
  handleOpen: PropTypes.func.isRequired,
  onHover: PropTypes.func,
  onHoverEnd: PropTypes.func,
};

Card.defaultProps = {
  isHovered: null,
  onHover: null,
  onHoverEnd: null,
};
