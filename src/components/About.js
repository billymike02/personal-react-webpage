import React from "react";
import portraitImage from "../assets/images/portrait-surf.JPG";

import resume from "../assets/files/resume.pdf";
import ViewableImage from "./ModalImage.js";
import { FaFileDownload } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

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
    <div className="content-body" backgroundColor="#DEDFE4" color={"black"}>
      <ViewableImage src={portraitImage} maxWidth={"max(50%, 300px)"} />

      <h2 style={{ marginTop: "30px" }}>About Bill</h2>
      <p>
        I am a soon to be graduating Computer Science student with a background
        in <b>frontend development</b> and <b>graphics</b>.
      </p>
      <h2>Technical Skills & Abilities</h2>
      <p className="interest-cloud">
        Frontend (Mobile/Web) Development • Computer Graphics (OpenGL) • Backend
        Development • Git
      </p>
      <h2>Additional Interests</h2>
      <p className="interest-cloud">
        3D Modeling • Triathlon • Back/Bikepacking • Surfing • Event Planning •
        Public Speaking
      </p>

      <div
        className="resume-button"
        style={{
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          gap: "8px",
        }}
        onClick={handleDownload}
      >
        <a
          style={{
            margin: "0px",
            fontSize: "1.4rem",
            color: "rgb(235, 235, 235)",
            fontWeight: "bold",
          }}
        >
          Resume
        </a>

        <MdFileDownload
          style={{ fill: "rgb(235, 235, 235)" }}
          size={30}
        ></MdFileDownload>
      </div>
    </div>
  );
};

export default About;
