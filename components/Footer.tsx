import { EXT, LINKS, PROFILE } from '@/lib/data';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-fg/15">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <a
          href={LINKS.linkedin}
          {...EXT}
          className="block max-w-4xl text-4xl font-extrabold tracking-tight transition hover:text-muted sm:text-6xl"
        >
          Let&apos;s talk on LinkedIn ↗
        </a>
        <div className="mt-16 flex flex-col justify-between gap-4 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <div className="flex gap-6">
            <a href={LINKS.github} {...EXT} className="transition hover:text-fg">
              GitHub
            </a>
            <a href={LINKS.linkedin} {...EXT} className="transition hover:text-fg">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
