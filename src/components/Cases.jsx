import './Cases.css';
import { Wave } from './svg/Wave.jsx';
import { WaveCorner } from './svg/WaveCorner.jsx';

export const Cases = () => {
  const cards = [
    {
      id: 1,
      title: 'Static to video',
      subtitle: 'BASE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      className: 'card-large bg-card-1',
    },
    {
      id: 2,
      title: 'Static AI image generation',
      subtitle: 'TotalEnergies',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      className: 'card-wide bg-card-2',
    },
    {
      id: 3,
      title: 'Static to video',
      subtitle: 'Richa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      className: 'card-wide bg-card-3',
    },
    {
      id: 4,
      title: 'Avatar generation (Synthetic)',
      subtitle: 'BNP Paribas Fortis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      className: 'card-wide bg-card-4',
    },
    {
      id: 5,
      title: 'Video with added animation',
      subtitle: 'BNP Paribas Fortis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      className: 'card-large bg-card-5',
    },
    {
      id: 6,
      title: 'Prompted video',
      subtitle: 'Telenet One',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      className: 'card-wide bg-card-6',
    },
    {
      id: 7,
      title: 'Banners',
      subtitle: 'Doccle',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        ' Vivamus pretium lacus a massa dapibus molestie. Donec accumsan auctor tristique. Integer pellentesque, sem ut pulvinar euismod, arcu augue pulvinar felis, et feugiat augue tellus quis ipsum. Quisque dapibus massa consequat lorem mattis placerat. Praesent porta, justo vitae molestie rhoncus, turpis ex consequat massa, sed semper elit dolor sit amet diam. Cras tristique mi at ex dictum malesuada. Aliquam sed justo sem. Sed rutrum, ligula ac maximus eleifend, ante elit elementum justo, a dictum diam libero non justo.',
      className: 'card-full-width bg-card-7',
    },
  ];
  return (
    <section id="cases">
      <Wave index={1} />
      <Wave index={2} />
      <div className="content">
        <div className="masonry-grid">
          {cards.map((card) => (
            <div key={card.id} className={`card ${card.className}`}>
              <div className="card-content">
                <div className="card-title">{card.title}</div>
                <div className="card-subtitle">{card.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="wave-extension-left"></div>
        <WaveCorner />
        <div className="wave-extension-right"></div>
      </div>
    </section>
  );
};
