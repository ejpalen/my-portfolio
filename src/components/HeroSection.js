import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageImports from "./imageImports";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const marqueeContainerRef = useRef(null);
  const imagesRef = useRef([]);
  const marqueeContainerRefBottom = useRef(null);
  const imagesRefBottom = useRef([]);

  //Images used for marquee container
  const images = [
    imageImports.projectUmakXplore,
    imageImports.projectJurasicPot,
    imageImports.projectEcoshoppe,
    imageImports.projectNexusFintech,
    imageImports.projectAcsad,
    imageImports.projectEcobar,
    imageImports.projectEcoshoppe,
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
    const marqueeContainer = marqueeContainerRef.current;
    const marqueeImages = imagesRef.current;
    const marqueeContainerBottom = marqueeContainerRefBottom.current;
    const marqueeImagesBottom = imagesRefBottom.current;

    //Animation for hero section when document is loaded
    gsap.to(".hero-left", {
      opacity: 1,
      y: "0px",
      ease: "back",
      duration: 0.5,
      delay: 0.3,
    });

    gsap.to(".hero-right", {
      delay: 0.4,
      opacity: 1,
      ease: "back",
      x: "0px",
      duration: 0.6,
    });
    gsap.to(marqueeContainer, {
      delay: 0.6,
      opacity: 1,
      y: "0px",
      ease: "back",
      duration: 0.6,
    });
    gsap.to(marqueeContainerBottom, {
      delay: 0.6,
      opacity: 1,
      y: "0px",
      ease: "back",
      duration: 0.6,
    });

    // Scroll Animation for Marquee Container
    let imagesTotalWidth = 0;
    let imagesTotalWidthBottom = 0;
    marqueeImages.forEach((image) => {
      imagesTotalWidth += image.offsetWidth;
    });

    marqueeImagesBottom.forEach((image) => {
      imagesTotalWidthBottom += image.offsetWidth;
    });

    gsap.set(marqueeContainer, { width: imagesTotalWidth });
    gsap.set(marqueeContainerRefBottom, { width: imagesTotalWidthBottom });

    const scrollSpeed = 1.4;

    const handleScroll = () => {
      const scrollAmount = window.scrollY * scrollSpeed;
      gsap.to(marqueeContainer, { x: -scrollAmount });
    };
    const handleScrollBottom = () => {
      const scrollAmount = window.scrollY * scrollSpeed;
      gsap.to(marqueeContainerBottom, { x: +scrollAmount });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollBottom);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollBottom);
    };
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-left">
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
        <div className="hero-right">
          <p>specialized in Web Design, UX / UI, and Front End Development.</p>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image" ref={marqueeContainerRef}>
          {images.map((image, index) => (
            <div
              className="imgBx"
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
            >
              <img src={image} alt="marquee-image" />
            </div>
          ))}
        </div>
        <div
          className="hero-image hero-image-bottom"
          ref={marqueeContainerRefBottom}
        >
          {imagesBottom.map((image, index) => (
            <div
              className="imgBx"
              key={index}
              ref={(el) => (imagesRefBottom.current[index] = el)}
            >
              <img src={image} alt="marquee-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
