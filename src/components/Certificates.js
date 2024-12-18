import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cert1 from "../images/certificates/cert 1.png";
import cert2 from "../images/certificates/freecodecamp.png";
import cert3 from "../images/certificates/freecodecamp 2.png";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const awards = [
    {
      id: 1,
      image: cert1,
      caption: "English for Career Development",
    },
    {
      id: 2,
      image: cert2,
      caption: "JavaScript Algorithms and Data Structures (Beta)",
    },
    {
      id: 3,
      image: cert3,
      caption: "Responsive Web Design",
    },
    // Add more awards here
  ];

  return (
    <div className="awards-section certificates">
      <h2 className="">Course Certificates</h2>
      <div className="awards-grid">
        {awards.map((award) => (
          <div 
            key={award.id} 
            className="award-item"
          >
            <a 
              href={award.image} 
              target="_blank" 
              rel="noopener noreferrer"
              className="award-image"
            >
              <img src={award.image} alt={award.caption} />
            </a>
            <p className="award-caption">{award.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates; 