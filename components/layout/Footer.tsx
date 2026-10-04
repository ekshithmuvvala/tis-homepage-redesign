import Link from 'next/link';

import {
  ArrowUpRight,
} from 'lucide-react';

import {
  contact,
  navItems,
} from '../../data/siteData';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-ink/10 bg-ink px-6 py-16 text-white dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">

              <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-sm font-black">
                TIS
              </div>

              <div>
                <p className="font-bold">
                  Tulas International School
                </p>

                <p className="text-xs text-white/50">
                  Learning beyond boundaries
                </p>
              </div>

            </div>

            <p className="max-w-lg text-sm leading-7 text-white/60">
              A learning environment designed
              to encourage curiosity, confidence,
              creativity and responsible leadership.
            </p>

            {/* Social links */}
            <div className="mt-7 flex gap-2">

              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-bold transition hover:bg-white/10"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-bold transition hover:bg-white/10"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-bold transition hover:bg-white/10"
              >
                IN
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              Explore
            </p>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              Contact
            </p>

            <div className="space-y-4 text-sm text-white/60">

              <p>
                {contact.address}
              </p>

              <a
                href={`tel:${contact.phone}`}
                className="block transition hover:text-white"
              >
                {contact.phone}
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="block transition hover:text-white"
              >
                {contact.email}
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Tulas International School.
            All rights reserved.
          </p>

          <Link
            href="#home"
            className="inline-flex items-center gap-1 hover:text-white"
          >
            Back to top
            <ArrowUpRight size={13} />
          </Link>

        </div>

      </div>
    </footer>
  );
}