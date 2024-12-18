import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageImports from "./imageImports";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const marqueeContainerRef = useRef(null);
  const marqueeContainerRefBottom = useRef(null);
  const sectionRef = useRef(null);

  //Images used for marquee container
  const images = [
    imageImports.projectUmakXplore,
    imageImports.projectJurasicPot,
    imageImports.projectClassScheduler,
    imageImports.projectEcoshoppe,
    imageImports.projectNexusFintech,
    imageImports.projectAcsad,
    imageImports.projectEcobar,
  ];

  const imagesBottom = [
    imageImports.projectMercBus,
    imageImports.projectCyberpunk,
    imageImports.projectMercBus,
    imageImports.projectRemindMe,
    imageImports.projectUmakNexus,
    imageImports.projectMercAirlines,
    imageImports.projectCyberpunk,
    imageImports.projectMindPro,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.to(".hero-left", {
        opacity: 1,
        y: "0px",
        ease: "power2.out",
        duration: 0.5,
      })
      .to(".hero-right", {
        opacity: 1,
        x: "0px",
        ease: "power2.out",
        duration: 0.5,
      }, "-=0.3")
      .to([marqueeContainerRef.current, marqueeContainerRefBottom.current], {
        opacity: 1,
        y: "0px",
        ease: "power2.out",
        duration: 0.5,
      }, "-=0.3");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        }
      });

      scrollTl
        .to(marqueeContainerRef.current, {
          x: `-=${window.innerWidth * 0.5}`,
          ease: "none",
        })
        .to(marqueeContainerRefBottom.current, {
          x: `+=${window.innerWidth * 0.5}`,
          ease: "none",
        }, "<");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-wrapper" ref={sectionRef}>
      <div className="hero">
        <div className="hero-left" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
        <div className="hero-right" style={{ opacity: 0, transform: 'translateX(20px)' }}>
          <p>specialized in Web Design, UI/UX, and Front-End Development.</p>
        </div>
      </div>
      <div className="hero-image-container">
        <div 
          className="hero-image" 
          ref={marqueeContainerRef}
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          {images.map((image, index) => (
            <div className="imgBx" key={index}>
              <img src={image} alt="marquee-image" loading="lazy" />
            </div>
          ))}
        </div>
        <div
          className="hero-image hero-image-bottom"
          ref={marqueeContainerRefBottom}
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          {imagesBottom.map((image, index) => (
            <div className="imgBx" key={index}>
              <img src={image} alt="marquee-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
