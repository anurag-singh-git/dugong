import type { MouseEventHandler, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps {
  /** Visual style. `primary` = lime fill, `ghost` = outlined, `dark` = ink fill (used on lime cards). */
  variant?: 'primary' | 'ghost' | 'dark';
  /** `lg` is the hero/CTA size. */
  size?: 'md' | 'lg';
  /** Stretch to fill its container (used inside pricing cards). */
  block?: boolean;
  /** Renders an anchor instead of a button when provided. */
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  className?: string;
  children: ReactNode;
}

/** The primary call-to-action control. Renders an `<a>` when `href` is set, otherwise a `<button>`. */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  href,
  onClick,
  type = 'button',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = [
    'ds-btn',
    `ds-btn-${variant}`,
    size === 'lg' && 'ds-btn-lg',
    block && 'ds-btn-block',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href !== undefined) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
