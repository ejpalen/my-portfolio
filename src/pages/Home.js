import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import AwardsSection from "../components/AwardsSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactMeSection from "../components/ContactMeSection";
import DeansCertificatesSection from '../components/DeansCertificatesSection';
import Certificates from "../components/Certificates";

const Home = ({ currentCategory, setCurrentCategory }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <AwardsSection />
      <DeansCertificatesSection />
      <Certificates />
      <SkillsSection />
      <ProjectsSection
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <ContactMeSection />
      
    </>
  );
};

export default Home;
