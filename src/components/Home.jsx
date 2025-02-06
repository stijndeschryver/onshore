import './Home.css';
import { SVGSequence } from './svg/svGSequence';

// Import all SVGs from the SVG_v4 folder
const svgFiles = import.meta.glob('/src/components/svg/logo_sequence/*.svg', {
  eager: true,
});
const svgSequence = Object.values(svgFiles).map((module) => module.default);

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
