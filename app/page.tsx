import BootSequence from '@/components/BootSequence';
import BackgroundFX from '@/components/BackgroundFX';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SectionPerfil from '@/components/SectionPerfil';
import SectionExperiencia from '@/components/SectionExperiencia';
import SectionSistemas from '@/components/SectionSistemas';
import SectionHabilidades from '@/components/SectionHabilidades';
import SectionStack from '@/components/SectionStack';
import SectionFormacion from '@/components/SectionFormacion';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <BootSequence />
      <BackgroundFX />
      <Nav />
      <Hero />
      <SectionPerfil />
      <SectionExperiencia />
      <SectionSistemas />
      <SectionHabilidades />
      <SectionStack />
      <SectionFormacion />
      <Footer />
    </>
  );
}
