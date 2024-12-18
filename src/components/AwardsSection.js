import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import award1 from "../images/awards/award 1.png";
import award2 from "../images/awards/award 2.png";

gsap.registerPlugin(ScrollTrigger);

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      image: award1,
      caption: "Web Design Champion 2023",
      description: "Champion of Infotechnolympics 2023 in the Web Design Category"
    },
    {
      id: 2,
      image: award2,
      caption: "Best Designer 2023",
      description: "Recognized for excellence in console application design using C++"
    },
    // Add more awards here
  ];

  return (
    <div className="awards-section">
      <h2 className="">Awards & Recognition</h2>
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

export default AwardsSection; 