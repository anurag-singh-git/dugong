import type { CSSProperties } from 'react';
import './Logo.css';

export interface LogoProps {
  /** Wordmark shown next to the icon. */
  label?: string;
  /** Icon mark size in pixels. */
  size?: number;
  className?: string;
}

/** Dugong brand lockup: the rounded-square icon mark plus the wordmark. */
export function Logo({ label = 'dugong', size = 26, className = '' }: LogoProps) {
  return (
    <span
      className={`ds-logo ${className}`.trim()}
      style={{ ['--ds-logo-size' as string]: `${size}px` } as CSSProperties}
    >
      <span className="ds-logo-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9" />
          <path d="M12 3c2 3 3 6 3 9s-1 6-3 9" />
          <path d="M3 12h18" />
        </svg>
      </span>
      {label}
    </span>
  );
}
