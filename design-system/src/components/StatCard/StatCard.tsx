import type { ReactNode } from 'react';
import './StatCard.css';

export interface StatCardProps {
  /** Large headline figure, e.g. "94%" or "3.2M". */
  value: ReactNode;
  /** Supporting caption below the figure. */
  label: ReactNode;
  className?: string;
}

/** Lime-gradient metric card for the stats band. */
export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`ds-stat ${className}`.trim()}>
      <div className="ds-stat-num">{value}</div>
      <div className="ds-stat-lbl">{label}</div>
    </div>
  );
}
