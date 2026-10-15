'use client';

import { useEffect, useState } from 'react';
import { EXT, FEATURED_REPOS, GITHUB_USER, LINKS } from '@/lib/data';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  fork: boolean;
  pushed_at: string;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`);
        return r.json() as Promise<Repo[]>;
      })
      .then((all) => {
        const own = all.filter((r) => !r.fork && r.name.toLowerCase() !== GITHUB_USER.toLowerCase());
        const pinned = FEATURED_REPOS.flatMap((n) => own.filter((r) => r.name === n));
        const rest = own
          .filter((r) => !FEATURED_REPOS.includes(r.name))
          .sort((a, b) => b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at));
        setRepos([...pinned, ...rest].slice(0, 6));
      })
      .catch((e) => {
        if (e.name !== 'AbortError') setFailed(true);
      });
    return () => ctrl.abort();
  }, []);

  if (failed || (repos && repos.length === 0)) {
    return (
      <p className="text-muted">
        Couldn’t load repositories from GitHub (the API may be rate-limited). Try again in a few minutes or{' '}
        <a href={LINKS.github} {...EXT} className="text-fg underline underline-offset-4">
          browse them on GitHub ↗
        </a>
      </p>
    );
  }

  if (!repos) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="h-44 animate-pulse rounded-2xl bg-fg/5" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((r) => (
          <a
            key={r.id}
            href={r.html_url}
            {...EXT}
            className="group flex min-h-44 flex-col justify-between rounded-2xl border border-fg/15 p-6 transition hover:bg-fg hover:text-bg"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="break-all text-lg font-semibold tracking-tight">{r.name}</h3>
                <span aria-hidden>↗</span>
              </div>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted group-hover:text-bg/70">
                {r.description ?? 'No description.'}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted group-hover:text-bg/70">
              {r.language && <span>{r.language}</span>}
              {r.stargazers_count > 0 && <span>★ {r.stargazers_count}</span>}
              {r.topics?.slice(0, 2).map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <a href={LINKS.github} {...EXT} className="mt-8 inline-block text-sm underline underline-offset-4">
        All repositories on GitHub ↗
      </a>
    </>
  );
}
