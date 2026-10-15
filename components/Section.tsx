export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {children}
    </section>
  );
}
