import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow1 from "../images/arrow.png";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const arrow = useRef(null);
  const textRef = useRef(null);
  const [isWideScreen] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(arrow.current, {
        scrollTrigger: {
          trigger: arrow.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        width: "80px",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.from(".highlight", {
        scrollTrigger: {
          trigger: ".highlight",
          start: "top 80%",
          toggleActions: "play none none reverse",
          toggleClass: "highlighted",
        },
      });

      if (isWideScreen) {
        const splitTypes = document.querySelectorAll(".aboutme-gradient");
        splitTypes.forEach((char) => {
          const text = new SplitType(char, { 
            types: "chars",
            absolute: false 
          });

          gsap.from(text.chars, {
            scrollTrigger: {
              trigger: char,
              start: "top 90%",
              end: "top 30%",
              scrub: 0.5,
              toggleActions: "play none none reverse",
            },
            opacity: 0.2,
            stagger: {
              amount: 0.6,
              from: "start",
            },
            ease: "power2.out",
          });
        });
      }
    });

    return () => {
      ctx.revert(); 
    };
  }, [isWideScreen]); 

  const renderText = (text, className) => {
    return isWideScreen ? (
      <span className={className}>
        {text.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}<br />
          </React.Fragment>
        ))}
      </span>
    ) : (
      <span className={className}>{text}</span>
    );
  };

  const mainText = `I create captivating web designs that bring\nclients' visions to life, leaving a lasting\nimpression on audiences. By blending\ninnovative design trends with intuitive\nuser experiences, I ensure websites\nengage and drive tangible results.`;
  
  const highlightText = `My goal is to enhance brand awareness\nand maximize sales through impactful\nweb design.`;

  return (
    <div className="about-me" id="about-me-wrapper">
      <div className="about-me-text" ref={textRef}>
        <p className="p30" id="aboutme">
          {renderText(mainText, "aboutme-gradient")}
          <br /><br />
          {renderText(highlightText, "highlight")}
          <br /><br />
        </p>
        <Link 
          to="contact-me-nav" 
          spy={true} 
          smooth={true} 
          offset={-20} 
          className="a-link"
        >
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
