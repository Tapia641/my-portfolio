import { SKILLS } from '@/lib/data';

export default function Skills() {
  return (
    <div className="border-b border-fg/15">
      {SKILLS.map(({ title, items }) => (
        <div key={title} className="grid gap-4 border-t border-fg/15 py-6 md:grid-cols-[14rem_1fr]">
          <h3 className="font-semibold">{title}</h3>
          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item} className="rounded-full border border-fg/20 px-3.5 py-1.5 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
