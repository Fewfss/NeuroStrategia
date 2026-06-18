import '../styles/Wavedivider.css';

/**
 * WaveDivider
 * -----------
 * direction  : 'down' | 'up'
 * fill       : cor CSS de preenchimento da onda
 */
export default function WaveDivider({ direction = 'down', fill = 'white' }) {
  const path =
    direction === 'down'
      ? 'M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z'
      : 'M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z';

  return (
    <div className={`wave-divider wave-${direction}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={fill} d={path} />
      </svg>
    </div>
  );
}