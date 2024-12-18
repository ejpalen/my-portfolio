import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectState } from "../projectState";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nav = ({ currentCategory, setCurrentCategory }) => {
  const projects = projectState();
  const dropdownRef = useRef(null);
  const webDivRef = useRef(null);
  const projectsHeader = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  const [currentImage, setCurrentImage] = useState("");

  const show = (value) => {
    setCurrentCategory(value);
  };

  const handleHover = () => {
    dropdownRef.current.classList.toggle("active");
  };

  const handleClick = () => {
    dropdownRef.current.classList.add("active");
  };

  const handleProjectHover = (imageUrl) => {
    if (window.innerWidth <= 900) return;

    if (currentImage !== imageUrl) {
      // Fade out current image
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.1,
        onComplete: () => {
          setCurrentImage(imageUrl);
          // Fade in new image
          gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });

      gsap.to(imageContainerRef.current, {
        opacity: 1,
        duration: 0.1
      });
    }
  };

  const handleProjectLeave = () => {
    if (window.innerWidth <= 900) return;

    gsap.to(imageContainerRef.current, {
      opacity: 0,
      duration: 0.1
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 900) return;

    gsap.to(imageContainerRef.current, {
      left: `${e.pageX}px`,
      top: `${e.pageY}px`,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const projectsHeaderDiv = projectsHeader.current;
    gsap.to(projectsHeaderDiv, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: projectsHeaderDiv,
        start: "top 80%",
      },
    });
  }, [currentCategory]);

  return (
    <div className="projects" id="projects-nav">
      <div 
        ref={imageContainerRef} 
        className="floating-image-container"
        style={{
          position: 'fixed',
          zIndex: 100,
          pointerEvents: 'none',
          opacity: 0,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <img
          ref={imageRef}
          src={currentImage}
          alt="Project preview"
          style={{
            width: '400px',
            height: 'auto',
            borderRadius: '5px'
          }}
        />
      </div>

      <div className="projects-header">
        <h2>Projects</h2>
        <div
          ref={dropdownRef}
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="dropdown"
        >
          <input
            className="text-box"
            type="text"
            placeholder={currentCategory}
            readOnly
          />
          <div className="options">
            <div onClick={() => show("Web Development")}>Web Development</div>
            <div onClick={() => show("Software Development")}>
              Software Development
            </div>
          </div>
        </div>
      </div>
      <div 
        className="nav power4Fx" 
        ref={projectsHeader}
        onMouseMove={handleMouseMove}
      >
        <ul>
          <div ref={webDivRef} className="web project-category">
            {projects.map((project) => {
              if (project.category === currentCategory) {
                return (
                  <li key={project.name} className="fadeToRight">
                    <Link to={project.url}>
                      <div 
                        className="link"
                        onMouseEnter={() => handleProjectHover(project.homeImage)}
                        onMouseLeave={handleProjectLeave}
                      >
                        <div className="link-left">
                          <span>{project.name}</span>
                          <p>{project.firstDescription}</p>
                        </div>
                        <p>{project.tag}</p>
                      </div>
                    </Link>
                  </li>
                );
              }
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
