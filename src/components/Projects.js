import React, { useState } from "react";

import { useSpring, animated } from "@react-spring/web";
import PaddedContent from "./PaddedContent.js";
import ProjectContainer from "./ProjectContainer.js";

const panels = [
  <ProjectContainer>
    <h2>Playlist Pursuit</h2>
  </ProjectContainer>,
  <ProjectContainer>
    <h2>Manchot's First Flight</h2>
  </ProjectContainer>,
  <ProjectContainer>
    <h2>Rogue Toolkit</h2>
  </ProjectContainer>,
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation properties
  const props = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.9)" },
    reset: true, // Reset animation on index change
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % panels.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + panels.length) % panels.length
    );
  };

  return (
    <PaddedContent backgroundColor="black">
      <div className="project-nav">
        <div className="nav-arrow" onClick={handlePrev}>
          &#x2039;
        </div>
        <h3>Browse Projects</h3>
        <div className="nav-arrow" onClick={handleNext}>
          &#x203A;
        </div>
      </div>
      <animated.div style={props} className="coverflow-container">
        {panels[currentIndex]}
      </animated.div>
    </PaddedContent>
  );
};

export default Projects;
