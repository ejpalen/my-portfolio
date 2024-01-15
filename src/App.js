import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

import { projectState } from "./projectState";

function App() {
  const location = useLocation();
  const blobRef = useRef(null);

  const [currentCategory, setCurrentCategory] = useState("Web Development");
  const [projects, setProjects] = useState(projectState);

  //Blob effect
  useEffect(() => {
    const blob = blobRef.current;
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const blobHeight = blob.offsetHeight;
      const maxTop = windowHeight - blobHeight;
      const top = Math.min(scrollTop, maxTop);

      blob.style.top = `${top}px`;
    };

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.onpointermove = handlePointerMove;

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.onpointermove = null;
    };
  }, []);

  //Animation
  useEffect(() => {
    const fadeToRight = gsap.utils.toArray(".fadeToRight");
    const fadeToUp = gsap.utils.toArray(".fadeToUp");

    fadeToRight.forEach((e) => {
      gsap.fromTo(
        e,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: e,
            start: "top 90%",
            ease: "back",
          },
        }
      );
    });

    fadeToUp.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            ease: "back",
          },
        }
      );
    });
  }, [currentCategory, location]);

  //Lenis Smooth Scroll
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  //Exit animation
  useEffect(() => {
    gsap.fromTo(
      "footer",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );
    gsap.to(".content", {
      opacity: 0,
      y: 50,
      duration: 0.2,
      ease: "power4",
    });
    gsap.to(".content", {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power4",
    });
    gsap.to("nav", {
      delay: 0.8,
      opacity: 1,
      y: "0px",
      ease: "back",
      duration: 0.4,
    });
  }, [location]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="blob-wrapper">
          <div ref={blobRef} id="blob"></div>
          <div id="blur"></div>
        </div>
        <div className="content">
          <div className="main">
            <Nav />
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                exact
                element={
                  <Home
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                  />
                }
              />
              <Route
                path="/project/:id"
                element={
                  <ProjectDetail
                    projects={projects}
                    setProjects={setProjects}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

const NotFound = () => {
  return (
    <div>
      <Navigate to="/" replace />
    </div>
  );
};

export default App;
