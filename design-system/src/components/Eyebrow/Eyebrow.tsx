import type { ReactNode } from 'react';
import './Eyebrow.css';

export interface EyebrowProps {
  /** Hide the leading dot. */
  noDot?: boolean;
  className?: string;
  children: ReactNode;
}

/** Small uppercase pill label that sits above a section headline. */
export function Eyebrow({ noDot = false, className = '', children }: EyebrowProps) {
  return (
    <span className={`ds-eyebrow ${noDot ? 'ds-eyebrow-no-dot' : ''} ${className}`.trim()}>
      {children}
    </span>
  );
}
