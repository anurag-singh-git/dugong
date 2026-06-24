import type { ReactNode } from 'react';
import './Chip.css';

export interface ChipProps {
  /** `more` is the lime-tinted "+ N more" terminator chip. */
  variant?: 'default' | 'more';
  className?: string;
  children: ReactNode;
}

/** Pill used for the integration cloud — one app name per chip. */
export function Chip({ variant = 'default', className = '', children }: ChipProps) {
  return (
    <span className={`ds-chip ${variant === 'more' ? 'ds-chip-more' : ''} ${className}`.trim()}>
      {children}
    </span>
  );
}
