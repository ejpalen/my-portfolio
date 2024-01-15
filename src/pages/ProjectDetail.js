import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { projectState } from "../projectState";
import { Parallax } from "react-parallax";
import imageImports from "../components/imageImports";

gsap.registerPlugin(ScrollTrigger);

//Check if scroll position is not at the top
const ProjectDetail = ({ projects, setProjects }) => {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  const [projectIndex, setProjectIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    // Set the project index based on the current URL
    const currentProjectIndex = projects.findIndex(
      (stateProject) => stateProject.url === url
    );
    setProjectIndex(currentProjectIndex >= 0 ? currentProjectIndex : 0);
  }, [projects, url]);

  const project = projects[projectIndex];

  //Animation when loaded
  useEffect(() => {
    if (project) {
      gsap.to(".specific-project-header", {
        opacity: 1,
        x: "0px",
        ease: "back",
        duration: 0.5,
        delay: 0.2,
      });

      gsap.to(".image-parallax-1", {
        opacity: 1,
        y: "0px",
        ease: "back",
        duration: 0.5,
        delay: 0.4,
      });
    }
  }, [project]);

  const handleNextProject = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    const nextIndex = (projectIndex + 1) % projects.length;
    navigate(projects[nextIndex].url);
    setProjectIndex(nextIndex); // Update projectIndex
  };

  return (
    <div>
      {project && (
        <div className="specific-project">
          <div className="specific-project-header">
            <h1 className="fadeRight specific-project-h1">{project.name}</h1>
            <h3>{project.tag}</h3>
          </div>
          <div>
            {window.innerWidth >= 900 ? (
              <Parallax
                strength={200}
                className="image-parallax image-parallax-1"
                bgImage={project.firstImage}
                start={{ top: 0, left: 0 }}
              >
                <div className="content"></div>
              </Parallax>
            ) : (
              <img className="mobile-image" src={project.firstImage} alt="" />
            )}
          </div>
          <div className="specific-project-div" id="project-description">
            <p className="fadeToRight">{project.firstDescription}</p>
            <div className="visit-button fadeToRight">
              {project.website?.cta && (
                <a
                  href={project.website.link}
                  target="_blank"
                  className={`${project.github?.cta ? "both-link-active" : ""}`}
                >
                  <img src={project.logo} alt="project-logo" />
                  <p>{project.website.cta}</p>
                </a>
              )}
            </div>
            <div className="visit-button fadeToRight">
              {project.github?.cta && (
                <a
                  href={project.github.link}
                  target="_blank"
                  className={` ${
                    project.github.cta ===
                    "The GitHub repository is private due to the sensitive nature of the organization's contents."
                      ? "private-github"
                      : ""
                  }`}
                >
                  <img src={imageImports.githubLogo} alt="project-logo" />
                  <p>{project.github.cta}</p>
                </a>
              )}
            </div>
          </div>
          {window.innerWidth >= 900 ? (
            <Parallax
              strength={200}
              className="image-parallax"
              bgImage={project.secondImage}
              start={{ top: 0, left: 0 }}
            >
              <div className="content"></div>
            </Parallax>
          ) : (
            <img className="mobile-image" src={project.secondImage} alt="" />
          )}
          <div className="specific-project-div">
            <p className="fadeToRight second-description">
              {project.secondDescription}
            </p>

            <div className="specific-project-nav">
              <div className="home-button fadeToRight">
                <Link to="/" className="fadeToRight">
                  <span>&#8592;</span>
                  <p>Back to Home</p>
                </Link>
              </div>
              <div
                className="next-button home-button fadeToRight"
                onClick={handleNextProject}
              >
                <p>
                  <span className="next-project-text">Next Project: </span>
                  {projects[
                    (projectIndex + 1) % projects.length
                  ].name.toUpperCase()}
                </p>
                <span>&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
