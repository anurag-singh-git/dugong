import type { ReactNode } from 'react';
import { Pill } from '../Pill/Pill';
import './FlowList.css';

export interface FlowRow {
  /** Leading icon node (emoji or SVG). */
  icon: ReactNode;
  title: ReactNode;
  /** Sub-text below the title. */
  desc: ReactNode;
  /** Optional status pill at the row's end. */
  pill?: { label: ReactNode; tone?: 'call' | 'reason' | 'read' };
}

export interface FlowListProps {
  rows: FlowRow[];
  className?: string;
}

/** Framed list of agent steps — each row pairs an icon + label with an optional status pill. */
export function FlowList({ rows, className = '' }: FlowListProps) {
  return (
    <div className={`ds-flow ${className}`.trim()}>
      {rows.map((r, i) => (
        <div className="ds-flow-row" key={i}>
          <div className="ds-flow-ico" aria-hidden="true">
            {r.icon}
          </div>
          <div className="ds-flow-main">
            <div className="ds-flow-t">{r.title}</div>
            <div className="ds-flow-d">{r.desc}</div>
          </div>
          {r.pill && <Pill tone={r.pill.tone ?? 'call'}>{r.pill.label}</Pill>}
        </div>
      ))}
    </div>
  );
}
