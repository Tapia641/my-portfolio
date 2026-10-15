import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="work" title="Projects">
          <Projects />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
      </main>
      <Footer />
    </>
  );
}
