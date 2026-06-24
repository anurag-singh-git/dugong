import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import './PriceCard.css';

export interface PriceCardProps {
  /** Plan name, e.g. "Starter". */
  name: ReactNode;
  /** Headline price, e.g. "$0" or "Custom". */
  amount: ReactNode;
  /** Optional period suffix, e.g. "/mo". Omit for "Custom". */
  period?: ReactNode;
  /** One-line plan description. */
  description: ReactNode;
  /** Checklist of included features. */
  features: ReactNode[];
  /** CTA label. */
  ctaLabel: ReactNode;
  ctaHref?: string;
  /** Visual emphasis + lime border; pairs with `badge`. */
  featured?: boolean;
  /** Ribbon text shown on a featured card, e.g. "Most popular". */
  badge?: ReactNode;
  className?: string;
}

/** Pricing tier card. The featured variant gets a lime ribbon and glow. */
export function PriceCard({
  name,
  amount,
  period,
  description,
  features,
  ctaLabel,
  ctaHref = '#',
  featured = false,
  badge,
  className = '',
}: PriceCardProps) {
  return (
    <div className={`ds-price ${featured ? 'ds-price-featured' : ''} ${className}`.trim()}>
      {badge && <div className="ds-price-badge">{badge}</div>}
      <div className="ds-price-name">{name}</div>
      <div className="ds-price-amt">
        {amount}
        {period && <small> {period}</small>}
      </div>
      <div className="ds-price-desc">{description}</div>
      <hr />
      <ul>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <Button variant={featured ? 'primary' : 'ghost'} href={ctaHref} block>
        {ctaLabel}
      </Button>
    </div>
  );
}
