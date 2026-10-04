'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        className="h-10 w-10 rounded-full border border-ink/10 dark:border-white/10"
        aria-label="Change theme"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 transition hover:scale-105 dark:border-white/10"
      data-cursor="interactive"
    >
      {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}