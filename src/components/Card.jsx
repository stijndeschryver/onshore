import { motion } from 'motion/react';
import PropTypes from 'prop-types';

export const Card = ({ card, handleOpen }) => {
  return (
    <li
      className={`card ${card.className}`}
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
            src={card.image}
            alt={card.title}
            layoutId={`card-image-${card.id}`}
          />
        </motion.div>
        <motion.div
          className="title-container"
          layoutId={`title-container-${card.id}`}
          layout="position"
        >
          <h1>{card.brand}</h1>
          <h2>{card.title}</h2>
        </motion.div>
      </motion.div>
    </li>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }).isRequired,
  handleOpen: PropTypes.func.isRequired,
};
