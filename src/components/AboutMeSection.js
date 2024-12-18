import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow1 from "../images/arrow.png";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const arrow = useRef(null);
  const splitTextRefs = useRef([]);

  useEffect(() => {
    const arrowImg = arrow.current;
    
    // Arrow animation
    const arrowAnim = gsap.to(arrowImg, {
      scrollTrigger: {
        trigger: arrowImg,
        start: "top 80%",
        end: "top 80%",
        scrub: false,
      },
      width: "80px",
      duration: 0.2,
    });

    // Highlight animation
    const highlightAnim = gsap.from(".highlight", {
      scrollTrigger: {
        trigger: ".highlight",
        start: "top 80%",
        scrub: true,
        toggleClass: "highlighted",
      },
    });

    // Text split animation for desktop only
    let textAnimations = [];
    if (window.innerWidth >= 900) {
      const splitTypes = document.querySelectorAll(".aboutme-gradient");

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "chars" });
        splitTextRefs.current.push(text);

        const anim = gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
          opacity: 0.2,
          stagger: 0.1,
        });
        textAnimations.push(anim);
      });
    }

    // Cleanup function
    return () => {
      arrowAnim.kill();
      highlightAnim.kill();
      textAnimations.forEach(anim => anim.kill());
      
      // Revert split text
      splitTextRefs.current.forEach(split => {
        if (split && split.revert) {
          split.revert();
        }
      });
      splitTextRefs.current = [];
    };
  }, []);

  return (
    <div className="about-me" id="about-me-wrapper">
      <div className="about-me-text">
        <p className="p30" id="aboutme">
           <span className="aboutme-gradient">
              I am a reliable web developer and designer with a proven track record of delivering high-quality, user-focused solutions. With strong technical proficiency in development and design, I balance creativity with functionality to ensure every project meets the highest standards. My real-world experience and commitment to excellence allow me to approach challenges proactively and deliver results that make a lasting impact.
            </span>
          <br></br>
          <br></br>
          <span className="highlight">
          Beyond technical expertise, I bring effective leadership and collaboration skills to every team I work with. Whether managing projects or contributing to innovative solutions, I strive to foster clear communication and mutual success. I take pride in my ability to combine vision with execution, creating digital experiences that drive growth and inspire confidence in both clients and colleagues.
            </span>
          <br></br>
          <br></br>
        </p>
        <div className="about-btn-container">
        <a href="https://drive.google.com/drive/folders/1xpePcud3CvHYujO7iDx6Xc2FzQfCSE6J?usp=sharing"  target="_blank" className="a-link">
        <div className="btn cover-letter-btn">
            <p>View Cover Letter</p>
          </div>
        </a>
        <a href="https://drive.google.com/drive/folders/1gR3cj4Woi-XR5Cpre8zMWUUOk68CyI2A?usp=sharing"  target="_blank" className="a-link">
        <div className="btn cover-letter-btn">
            <p>View References</p>
          </div>
        </a>
        <a href="https://drive.google.com/drive/folders/1sHwT8A3xkRmVDYY1pJ0eyUUNxeEaYPbK?usp=sharing" target="_blank" className="a-link">
        <div className="btn">
            <p>View Resume</p>
          </div>
        </a>
        </div>

        <h2 className="video-resume-header">Video Resume</h2>
        <div className="video-section">
          
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/O4desdwm990?si=QPp6T-ktooqsN0Em" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        {/* <Link to="contact-me-nav" spy smooth offset={-20} className="a-link">
          <div className="btn">
            <p>Drop me a line</p>
            <img src={arrow1} alt="arrow-icon" ref={arrow} />
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default AboutMe;
