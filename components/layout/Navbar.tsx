'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
} from 'lucide-react';

import { navItems } from '../../data/siteData';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-ink/80 sm:px-5">

        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3"
          data-cursor="interactive"
          onClick={() => setOpen(false)}
        >
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-sm font-black text-white">
            TIS
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-black tracking-tight text-ink dark:text-white">
              Tulas International
            </p>

            <p className="text-[10px] uppercase tracking-[0.18em] text-ink/50 dark:text-white/50">
              School
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/65 transition hover:text-brand-600 dark:text-white/65 dark:hover:text-brand-400"
              data-cursor="interactive"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="#admissions"
            className="hidden rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-ink sm:inline-flex"
            data-cursor="interactive"
          >
            Admissions
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 dark:border-white/10 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-ink/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-ink/95 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand-50 dark:text-white dark:hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}