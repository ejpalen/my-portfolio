import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './DeansCertificatesSection.css';

// Import your certificate images here
import deanslister1 from "../images/deans lister/deans lister 1.png"; 
import deanslister2 from "../images/deans lister/deans lister 2.png"; 
import deanslister3 from "../images/deans lister/deans lister 3.png"; 
import deanslister4 from "../images/deans lister/deans lister 4.png"; 
import deanslister5 from "../images/deans lister/deans lister 5.png"; 

gsap.registerPlugin(ScrollTrigger);

const DeansCertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      image: deanslister1,
      caption: "Dean's Lister - First Year, Second Semester A.Y. 2021-2022",
    },
    {
      id: 2,
      image: deanslister2,
      caption: "Dean's Lister - Second Year, First Semester A.Y. 2022-2023",
    },
    {
      id: 3,
      image: deanslister3,
      caption: "Dean's Lister - Second Year, Second Semester A.Y. 2022-2023",
    },
    {
      id: 4,
      image: deanslister4,
      caption: "Dean's Lister - Third Year, First Semester A.Y. 2023-2024",
    },
    {
      id: 5,
      image: deanslister5,
      caption: "Dean's Lister - Third Year, Second Semester A.Y. 2023-2024",
    },
  ];

  return (
     <div className="awards-section">
    <h2>Academic Excellence</h2>
     <div className="awards-grid">
     {certificates.map((certificate) => (
          <div 
            key={certificate.id} 
            className="award-item"
          >
            <a 
              href={certificate.image} 
              target="_blank" 
              rel="noopener noreferrer"
              className="award-image"
            >
              <img src={certificate.image} alt={certificate.caption} />
            </a>
            <p className="award-caption">{certificate.caption}</p>
          </div>
        ))}
     </div>
   </div>
  );
};

export default DeansCertificatesSection; 