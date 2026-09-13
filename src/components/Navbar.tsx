import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/cn';

const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Interviews', href: '#interviews' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('swarali-theme');

    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('swarali-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('swarali-theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-50 mix-blend-normal">
      <nav className="border-b border-paper-300/80 bg-paper-100/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="group min-w-0">
            <span className="block font-sans text-[15px] font-semibold tracking-tight text-ink-900 sm:text-base">
              Swarali JoshiRao
            </span>

            <span className="hidden text-[10px] uppercase tracking-caps text-ink-500 sm:block">
              Journalist
            </span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-caps text-ink-600 transition-colors hover:text-ink-900"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-ink-900 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-caps text-ink-900 transition-colors hover:bg-ink-900 hover:text-paper-50"
            >
              Contact
            </a>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Light mode' : 'Dark mode'}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-300 text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-900"
            >
              {darkMode ? (
                <Sun className="h-3.5 w-3.5" />
              ) : (
                <Moon className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Light mode' : 'Dark mode'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-300 text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-900"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              className="-mr-2 p-2 text-ink-900"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-paper-300 bg-paper-100 px-5 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-ink-800"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className={cn(
                  'pt-2 text-sm font-medium uppercase tracking-caps',
                )}
                onClick={() => setOpen(false)}
              >
                Write to Swarali
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}