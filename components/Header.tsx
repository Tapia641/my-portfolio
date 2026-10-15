import ThemeToggle from './ThemeToggle';
import { PROFILE } from '@/lib/data';

const links = [
  ['Projects', '#work'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 text-sm font-medium">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-fg/20 text-[11px] font-bold">LT</span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-muted sm:gap-7">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-fg">
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
