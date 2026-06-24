// Dugong design system — public entry point.
// Importing this pulls in the token + base stylesheet so consumers get the
// look with a single `import '@dugong/design-system'`.
import './styles/index.css';

export { Logo } from './components/Logo/Logo';
export type { LogoProps } from './components/Logo/Logo';

export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Eyebrow } from './components/Eyebrow/Eyebrow';
export type { EyebrowProps } from './components/Eyebrow/Eyebrow';

export { Chip } from './components/Chip/Chip';
export type { ChipProps } from './components/Chip/Chip';

export { Pill } from './components/Pill/Pill';
export type { PillProps } from './components/Pill/Pill';

export { Panel } from './components/Panel/Panel';
export type { PanelProps } from './components/Panel/Panel';

export { StepCard } from './components/StepCard/StepCard';
export type { StepCardProps } from './components/StepCard/StepCard';

export { FeatureCard } from './components/FeatureCard/FeatureCard';
export type { FeatureCardProps } from './components/FeatureCard/FeatureCard';

export { StatCard } from './components/StatCard/StatCard';
export type { StatCardProps } from './components/StatCard/StatCard';

export { PriceCard } from './components/PriceCard/PriceCard';
export type { PriceCardProps } from './components/PriceCard/PriceCard';

export { Tabs } from './components/Tabs/Tabs';
export type { TabsProps, TabItem } from './components/Tabs/Tabs';

export { Faq } from './components/Faq/Faq';
export type { FaqProps, FaqEntry } from './components/Faq/Faq';

export { Marquee } from './components/Marquee/Marquee';
export type { MarqueeProps } from './components/Marquee/Marquee';

export { FlowList } from './components/FlowList/FlowList';
export type { FlowListProps, FlowRow } from './components/FlowList/FlowList';

export { SectionHead } from './components/SectionHead/SectionHead';
export type { SectionHeadProps } from './components/SectionHead/SectionHead';
