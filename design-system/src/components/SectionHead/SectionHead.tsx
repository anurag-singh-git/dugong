import type { ReactNode } from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import './SectionHead.css';

export interface SectionHeadProps {
  /** Eyebrow label text. Omit to render no eyebrow. */
  eyebrow?: ReactNode;
  /** Headline content. Wrap a phrase in <em> to render it in the faint accent colour. */
  headline: ReactNode;
  /** Supporting sub-text below the headline. */
  sub?: ReactNode;
  /** Centre-align (used for full-width sections). */
  center?: boolean;
  className?: string;
}

/** Standard section header: eyebrow + headline + sub, left- or centre-aligned. */
export function SectionHead({ eyebrow, headline, sub, center = false, className = '' }: SectionHeadProps) {
  return (
    <div className={`ds-sec-head ${center ? 'ds-sec-center' : ''} ${className}`.trim()}>
      {eyebrow !== undefined && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="ds-headline">{headline}</h2>
      {sub !== undefined && <p className="ds-sec-sub">{sub}</p>}
    </div>
  );
}
