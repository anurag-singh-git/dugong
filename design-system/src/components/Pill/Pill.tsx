import type { ReactNode } from 'react';
import './Pill.css';

export interface PillProps {
  /** Semantic tone: `call` (tool call, lime), `reason` (AI reasons, green), `read` (AI reads/writes, pink). */
  tone?: 'call' | 'reason' | 'read';
  className?: string;
  children: ReactNode;
}

/** Tiny status tag attached to a flow row to label what the agent is doing. */
export function Pill({ tone = 'call', className = '', children }: PillProps) {
  return <span className={`ds-pill ds-pill-${tone} ${className}`.trim()}>{children}</span>;
}
