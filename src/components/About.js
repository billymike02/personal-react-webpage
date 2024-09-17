import React from "react";
import portraitImage from "../assets/images/portrait-surf.JPG";
import PaddedContent from "./PaddedContent.js";
import resume from "../assets/files/resume.pdf";
import ViewableImage from "./ViewableImage.js";

const About = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resume; // Replace with the path to your file

    document.body.appendChild(link);
    link.click();

    // Remove the anchor from the body
    document.body.removeChild(link);
  };

  return (
    <PaddedContent backgroundColor="#DEDFE4" color={"black"}>
      <ViewableImage src={portraitImage} maxWidth={"max(50%, 300px)"} />

      <h2 style={{ marginTop: "30px" }}>About Bill</h2>
      <p>
        I am a soon to be graduating Computer Science student with a background
        in <b>frontend development</b> and <b>graphics</b>.
      </p>
      <h2>Technical Skills & Abilities</h2>
      <p className="interest-cloud">
        Frontend Development • Web Development • Backend Development • Computer
        Graphics • Mobile Development • Figma (UI/UX) • Git
      </p>
      <h2>Additional Interests</h2>
      <p className="interest-cloud">
        3D Modeling • Triathlon • Back/Bikepacking • Surfing • Event Planning •
        Public Speaking
      </p>

      <div className="resume-button" onClick={handleDownload}>
        Download Resume
      </div>
    </PaddedContent>
  );
};

export default About;
