import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow1 from "../images/arrow.png";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const arrow = useRef(null);

  useEffect(() => {
    const arrowImg = arrow.current;
    gsap.to(arrowImg, {
      scrollTrigger: {
        trigger: arrowImg,
        start: "top 80%",
        end: "top 80%",
        scrub: false,
      },
      width: "80px",
      duration: 0.2,
    });

    gsap.from(".highlight", {
      scrollTrigger: {
        trigger: ".highlight",
        start: "top 80%",
        scrub: true,
        toggleClass: "highlighted",
      },
    });

    if (window.innerWidth >= 900) {
      const splitTypes = document.querySelectorAll(".aboutme-gradient");

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "chars" });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
          opacity: 0.2,
          stagger: 0.1,
        });
      });
    }
  }, []);

  return (
    <div className="about-me" id="about-me-wrapper">
      <div className="about-me-text">
        <p className="p30" id="aboutme">
          {window.innerWidth >= 900 ? (
            <span className="aboutme-gradient">
              I create captivating web designs that bring <br></br>clients'
              visions to life, leaving a lasting<br></br> impression on
              audiences. By blending <br></br>innovative design trends with
              intuitive <br></br>user experiences, I ensure websites <br></br>
              engage and drive tangible results.
            </span>
          ) : (
            <span className="aboutme-gradient">
              I create captivating web designs that bring clients' visions to
              life, leaving a lasting impression on audiences. By blending
              innovative design trends with intuitive user experiences, I ensure
              websites engage and drive tangible results.
            </span>
          )}
          <br></br>
          <br></br>
          {window.innerWidth >= 900 ? (
            <span className="highlight">
              My goal is to enhance brand awareness <br></br>and maximize sales
              through impactful <br></br> web design.
            </span>
          ) : (
            <span className="highlight">
              <span>
                My goal is to enhance brand awareness and maximize sales through
                impactful web design.
              </span>
            </span>
          )}
          <br></br>
          <br></br>
        </p>
        <Link to="contact-me-nav" spy smooth offset={-20} className="a-link">
          <div className="btn">
            <p>Drop me a line</p>
            <img src={arrow1} alt="arrow-icon" ref={arrow} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
