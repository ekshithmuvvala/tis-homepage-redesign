import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import CustomCursor from '../components/animation/CustomCursor';
import ScrollProgress from '../components/animation/ScrollProgress';

import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import AcademicsSection from '../components/sections/AcademicsSection';
import CampusSection from '../components/sections/CampusSection';
import AdmissionsSection from '../components/sections/AdmissionsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <CampusSection />
        <AdmissionsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}