import type { CSSProperties, ReactNode } from 'react';
import './Marquee.css';

export interface MarqueeProps {
  /** Items to scroll. They are duplicated internally for a seamless loop. */
  items: ReactNode[];
  /** Optional uppercase label shown above the track. */
  label?: ReactNode;
  /** One full loop duration in seconds. */
  speed?: number;
  className?: string;
}

/** Edge-masked, infinitely scrolling logo/word strip. */
export function Marquee({ items, label, speed = 26, className = '' }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`ds-marquee-wrap ${className}`.trim()}>
      {label && <div className="ds-marquee-label">{label}</div>}
      <div className="ds-marquee">
        <div
          className="ds-marquee-track"
          style={{ ['--ds-marquee-speed' as string]: `${speed}s` } as CSSProperties}
          aria-hidden="true"
        >
          {doubled.map((it, i) => (
            <span key={i}>{it}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
