import { EXT, LINKS, PROFILE } from '@/lib/data';

const pill = 'rounded-full px-6 py-3 text-sm font-medium transition';
const outline = `${pill} border border-fg/25 hover:bg-fg hover:text-bg`;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-gradient-to-br from-bg to-fg/[0.04] px-6 pb-16 pt-28"
    >
      {/* Apellido gigante de fondo: el único gesto grande de la página */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 select-none whitespace-nowrap text-[24vw] font-extrabold leading-none tracking-tighter text-fg/[0.06]"
      >
        TAPIA
      </span>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">{PROFILE.name}</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            {PROFILE.role}
            <span className="text-muted">.</span>
          </h1>
          <p className="mt-6 text-muted">{PROFILE.tagline}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-fg/80">{PROFILE.bio}</p>
        </div>

        <div
          className="flex flex-wrap gap-3 animate-rise lg:max-w-[17rem] lg:justify-end"
          style={{ animationDelay: '.2s' }}
        >
          <a href="#work" className={`${pill} bg-fg text-bg hover:opacity-80`}>
            View projects ↓
          </a>
          <a href={LINKS.linkedin} {...EXT} className={outline}>
            LinkedIn ↗
          </a>
          <a href={LINKS.github} {...EXT} className={outline}>
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
