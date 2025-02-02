export const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className={`burger-menu ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className="burger-bar" />
      <span className="burger-bar" />
      <span className="burger-bar" />
    </button>
  );
};
