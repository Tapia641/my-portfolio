'use client';

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-fg/20 text-fg transition hover:bg-fg hover:text-bg"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
    </button>
  );
}
