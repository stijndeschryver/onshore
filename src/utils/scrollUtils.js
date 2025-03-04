export const scrollToSection = (id) => {
  if (id === 'home') {
    window.scrollTo(0, 0);
  } else {
    document.getElementById(id)?.scrollIntoView();
  }
};
