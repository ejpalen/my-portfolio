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

  //When dropdown item is clicked
  const show = (value) => {
    setCurrentCategory(value);
  };

  //Dropdown Item hovered
  const handleHover = () => {
    dropdownRef.current.classList.toggle("active");
  };

  //Dropdown Item Clicked
  const handleClick = () => {
    dropdownRef.current.classList.add("active");
  };

  //Image Hover reveal
  useEffect(() => {
    const linkElements = document.querySelectorAll(".link");
    const linkHoverRevealElements = document.querySelectorAll(".hover-reveal");
    const linkImages = document.querySelectorAll(".hidden-img");
    const links = document.querySelectorAll(".link");

    if (window.innerWidth > 900) {
      linkElements.forEach((link, i) => {
        link.addEventListener("mousemove", (e) => {
          linkHoverRevealElements[i].style.opacity = 1;
          linkHoverRevealElements[
            i
          ].style.transform = `translate(-50%, -50% ) rotate(0deg)`;
          linkImages[i].style.transform = "scale(1, 1)";
          linkHoverRevealElements[i].style.left = e.clientX + "px";
        });

        link.addEventListener("mouseleave", () => {
          linkHoverRevealElements[i].style.opacity = 0;
          linkHoverRevealElements[
            i
          ].style.transform = `translate(-50%, -50%) rotate(5deg)`;
          linkImages[i].style.transform = "scale(0.7, 0.7)";
        });
      });

      links.forEach((link) => {
        const otherLinks = Array.from(links).filter((l) => l !== link);

        link.addEventListener("mouseenter", () => {
          otherLinks.forEach((otherLink) => {
            otherLink.classList.add("inactive");
            otherLink.classList.remove("active");
          });
          link.classList.add("active");
          link.classList.remove("inactive");
        });

        link.addEventListener("mouseleave", () => {
          otherLinks.forEach((otherLink) => {
            otherLink.classList.remove("inactive");
            otherLink.classList.remove("active");
          });

          const isHovered = Array.from(links).some((l) =>
            l.classList.contains("active")
          );

          if (!isHovered) {
            link.classList.add("inactive");
          }
        });
      });
    }
  }, [currentCategory]);

  // Animation
  const projectsHeader = useRef(null);
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
            {/* <div onClick={() => show("Web and Graphic Design")}>
              Web and Graphic Design
            </div> */}
          </div>
        </div>
      </div>
      <div className="nav power4Fx" ref={projectsHeader}>
        <ul>
          <div ref={webDivRef} className="web project-category">
            {projects.map((project) => {
              if (project.category === currentCategory) {
                return (
                  <li key={project.name} className="fadeToRight">
                    <Link to={project.url}>
                      <div className="link">
                        <div className="link-left">
                          <span>{project.name}</span>
                          <p>{project.firstDescription}</p>
                        </div>
                        <p>{project.tag}</p>
                        <div className="hover-reveal image01">
                          <img
                            src={project.homeImage}
                            alt="web-project-image"
                            className="hidden-img"
                          />
                        </div>
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
