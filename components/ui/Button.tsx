import Link from 'next/link';

import {
  ArrowUpRight,
} from 'lucide-react';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  href,
  children,
  variant = 'primary',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5';

  const styles =
    variant === 'primary'
      ? 'bg-ink text-white hover:bg-brand-700 dark:bg-white dark:text-ink'
      : 'border border-ink/15 bg-white/60 text-ink hover:border-brand-500 dark:border-white/15 dark:bg-white/5 dark:text-white';

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      data-cursor="interactive"
    >
      {children}

      <ArrowUpRight size={16} />
    </Link>
  );
}