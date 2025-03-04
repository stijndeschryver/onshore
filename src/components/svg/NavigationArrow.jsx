import PropTypes from 'prop-types';

export const NavigationArrow = ({ direction = 'right', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className={className}
      style={{
        transform: direction === 'left' ? 'rotate(180deg)' : 'none',
      }}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

NavigationArrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};
