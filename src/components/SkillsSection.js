import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageImports from "./imageImports";

gsap.registerPlugin(ScrollTrigger);

const webSkills = [
  { name: "HTML5", image: imageImports.htmlIcon },
  {
    name: "CSS3",
    image: imageImports.cssIcon,
  },
  {
    name: "Javascript",
    image: imageImports.jsIcon,
  },
  {
    name: "PHP",
    image: imageImports.phpIcon,
  },
  // {
  //   name: "Bootstrap",
  //   image: imageImports.cssIcon,
  // },
  {
    name: "React",
    image: imageImports.reactIcon,
  },
  {
    name: "Liquid",
    image: imageImports.liquidIcon,
  },
];

const softwareDevSkills = [
  {
    name: "C#",
    image: imageImports.cSharpIcon,
  },
  {
    name: "Java",
    image: imageImports.javaIcon,
  },
  {
    name: "C++",
    image: imageImports.cPlusPlusIcon,
  },
  {
    name: "Visual Basic",
    image: imageImports.vbIcon,
  },
  {
    name: "Git",
    image: imageImports.gitIcon,
  },
];

const designToolSkills = [
  {
    name: "Photoshop",
    image: imageImports.photoshopIcon,
  },
  {
    name: "Figma",
    image: imageImports.figmaIcon,
  },
];

const SkillsSection = () => {
  const skillCategoryRef = useRef(null);

  //Animte skills
  useEffect(() => {
    const skillCategory = skillCategoryRef.current;

    gsap.to(skillCategory.querySelectorAll(".skill"), {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: skillCategory,
        start: "top 80%",
        ease: "back",
      },
    });
  }, []);

  return (
    <div className="skills">
      <h2 className="skew fadeToRight">Technical Skills</h2>
      <div className="skill-category-container" ref={skillCategoryRef}>
        <div className="skill-category">
          <div className="fadeToRight">
            <h3>Web</h3>
            <h3>Development</h3>
          </div>
          <div className="skill-wrapper">
            {webSkills.map((skill) => (
              <div className="skill">
                <img src={skill.image} alt={skill.name} className="skill" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <div className="fadeToRight">
            <h3>Software</h3>
            <h3>Development</h3>
          </div>
          <div className="skill-wrapper">
            {softwareDevSkills.map((skill) => (
              <div className="skill">
                <img src={skill.image} alt={skill.name} className="skill" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <div className="fadeToRight">
            <h3>Design</h3>
            <h3>Tools</h3>
          </div>
          <div className="skill-wrapper">
            {designToolSkills.map((skill) => (
              <div className="skill">
                <img src={skill.image} alt={skill.name} className="skill" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
