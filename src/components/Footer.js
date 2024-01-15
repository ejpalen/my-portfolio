import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footer = useRef(null);

  useEffect(() => {
    const footerDiv = footer.current;

    //Animate footer
    gsap.fromTo(
      footerDiv,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );
  }, []);

  return (
    <footer ref={footer}>
      <div className="footer-left">
        <a
          href="https://www.linkedin.com/in/ejpalen/"
          target="_blank"
          className="a-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ejpalen/"
          target="_blank"
          className="a-link"
        >
          Github
        </a>
      </div>
      <a
        href="https://drive.google.com/drive/folders/1_oTB_w9RX8735iNueEwZvYONJUE6s6tU?usp=sharing"
        target="_blank"
        className="a-link"
      >
        View Resume
      </a>
      <p>© 2024 Ej Palen</p>
    </footer>
  );
};

export default Footer;
