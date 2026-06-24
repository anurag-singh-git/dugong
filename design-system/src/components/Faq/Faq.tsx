import type { ReactNode } from 'react';
import './Faq.css';

export interface FaqEntry {
  question: ReactNode;
  answer: ReactNode;
  /** Open by default. */
  defaultOpen?: boolean;
}

export interface FaqProps {
  items: FaqEntry[];
  className?: string;
}

/** Accordion list built on native <details>/<summary> with an animated +/× marker. */
export function Faq({ items, className = '' }: FaqProps) {
  return (
    <div className={`ds-faq-list ${className}`.trim()}>
      {items.map((it, i) => (
        <details className="ds-faq-item" key={i} open={it.defaultOpen}>
          <summary>{it.question}</summary>
          <div className="ds-faq-a">{it.answer}</div>
        </details>
      ))}
    </div>
  );
}
