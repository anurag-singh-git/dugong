import { useState, type ReactNode } from 'react';
import './Tabs.css';

export interface TabItem {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  /** Initially selected tab index. */
  defaultIndex?: number;
  className?: string;
}

/** Pill-style tab switcher. Uncontrolled — tracks the active tab internally. */
export function Tabs({ items, defaultIndex = 0, className = '' }: TabsProps) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div className={className || undefined}>
      <div className="ds-tabs" role="tablist">
        {items.map((it, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            className={`ds-tab ${i === active ? 'ds-tab-active' : ''}`.trim()}
            onClick={() => setActive(i)}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="ds-tab-panel" role="tabpanel" key={active}>
        {items[active]?.content}
      </div>
    </div>
  );
}
