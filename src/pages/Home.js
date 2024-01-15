import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactMeSection from "../components/ContactMeSection";

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
