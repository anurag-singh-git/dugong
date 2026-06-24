import type { ReactNode } from 'react';
import './StepCard.css';

export interface StepCardProps {
  /** Step index label, e.g. "01". Rendered in mono lime. */
  num: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Numbered "how it works" card with a hover lift. */
export function StepCard({ num, title, children, className = '' }: StepCardProps) {
  return (
    <div className={`ds-step-card ${className}`.trim()}>
      <div className="ds-step-num">{num}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
