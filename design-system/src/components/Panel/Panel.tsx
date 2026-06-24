import type { ReactNode } from 'react';
import './Panel.css';

export interface PanelProps {
  /** Header title text. Omit to render a panel with no header bar. */
  title?: ReactNode;
  /** Monospace tag shown at the far right of the header (e.g. a filename or status). */
  tag?: ReactNode;
  /** Index of the "live" (lime) traffic-light dot, or -1 for all idle. */
  liveDot?: number;
  className?: string;
  children: ReactNode;
}

/** App-window style container with a three-dot header — used for the demo panes. */
export function Panel({ title, tag, liveDot = -1, className = '', children }: PanelProps) {
  return (
    <div className={`ds-panel ${className}`.trim()}>
      {(title !== undefined || tag !== undefined) && (
        <div className="ds-panel-head">
          <div className="ds-dotrow" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <i key={i} className={i === liveDot ? 'ds-dot-live' : undefined} />
            ))}
          </div>
          {title}
          {tag !== undefined && <span className="ds-panel-tag">{tag}</span>}
        </div>
      )}
      <div className="ds-panel-body">{children}</div>
    </div>
  );
}
