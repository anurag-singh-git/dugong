import type { ReactNode } from 'react';
import './FeatureCard.css';

export interface FeatureCardProps {
  /** Icon node — typically an emoji or small SVG, shown in the lime tile. */
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Feature tile with a lime icon chip, used in the "under the hood" grid. */
export function FeatureCard({ icon, title, children, className = '' }: FeatureCardProps) {
  return (
    <div className={`ds-feat ${className}`.trim()}>
      <div className="ds-feat-ico" aria-hidden="true">
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}
