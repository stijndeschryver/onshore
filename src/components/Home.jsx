import './Home.css';
import { SVGSequence } from './svg/svgSequence';

// Import all SVGs statically using relative path
const svgContext = import.meta.glob('./svg/logo_sequence/*.svg', {
  eager: true,
  import: 'default',
});

// Sort the SVGs by filename to ensure consistent order
const svgSequence = Object.entries(svgContext)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([_, svg]) => svg);

// Debug in production
console.log('Production SVG paths:', svgSequence);

export const Home = () => {
  if (svgSequence.length === 0) {
    console.warn('No SVG files found in the sequence');
  }

  return (
    <>
      <div className="home-spacer" />
      <section id="home">
        <div className="content">
          <SVGSequence className="Logo" svgFiles={svgSequence} />
          <p className="intro">
            Forget off-shore. Forget near-shore. This is&nbsp;
            <strong>OnShore</strong>, a fully independent digital production
            studio based in Belgium, powered by local talent with a passion for
            making amazing digital stuff. On a budget.
          </p>
        </div>
      </section>
    </>
  );
};
