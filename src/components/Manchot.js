import React from "react";
import ViewableImage from "./ViewableImage.js";

const Manchot = () => {
  const handleClick = () => {
    window.open(
      "https://html-preview.github.io/?url=https://github.com/RandallCaler/CSC400/blob/main/webpage/index.html",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="project-heading manchot">
        <h2>3D Game Engine + Demo</h2>
        <h3>Project Timeline: Apr. 2024-June. 2024</h3>
      </div>
      <div className="project-body">
        <div className="project-info">
          <h3>Description</h3>
          <p>
            "Manchot's First Flight" is an innovative game developed using a
            custom game engine, featuring a fictional French penguin on a quest
            to gather food for a picnic with his girlfriend. The game combines
            engaging exploration and puzzle-solving in a whimsically designed
            winter environment, showcasing a unique art style and interactive
            gameplay.
          </p>
          <h3>Features:</h3>
          <ul>
            <li>
              <strong>Custom Game Engine:</strong> Developed with a custom
              engine using C++, OpenGL, Assimp, and GLFW. This allowed for a
              highly optimized and tailored gaming experience.
            </li>
            <li>
              <strong>Asset Creation:</strong> Designed and created unique
              visual assets to enhance the game's aesthetic and gameplay
              experience.
            </li>
            <li>
              <strong>Interactive Gameplay:</strong> Includes diverse puzzles
              and exploration elements that challenge players and contribute to
              a rewarding experience.
            </li>
            <li>
              <strong>Collaborative Development:</strong> Worked as part of a
              7-person team, demonstrating strong teamwork and communication
              skills in delivering a cohesive final product.
            </li>
          </ul>
          <h3>Technical Details:</h3>
          <ul>
            <li>
              <strong>Platform:</strong> Custom-developed game engine with
              cross-platform capabilities.
            </li>
            <li>
              <strong>Technology:</strong> Utilized C++ for core development,
              OpenGL for graphics rendering, Assimp for asset management, and
              GLFW for window and input handling.
            </li>
            <li>
              <strong>Development Contributions:</strong> Contributed to both
              asset creation and frontend development. Responsible for designing
              and integrating game assets and implementing key frontend
              features.
            </li>
          </ul>
          <p>
            "Manchot's First Flight" demonstrates a comprehensive application of
            game development principles, from custom engine creation to detailed
            asset design. This project highlights my ability to manage and
            contribute to complex, collaborative projects, making it a strong
            example of my full-stack development capabilities.
          </p>
          <h3>Contributions</h3>
          <p>
            As a key contributor to "Manchot's First Flight," I was responsible
            for designing and creating game assets, as well as handling frontend
            development tasks. My role included collaborating with a team of 7
            to develop the custom game engine, implement interactive features,
            and ensure a cohesive gameplay experience. This project showcases my
            skills in both technical development and effective teamwork.
          </p>
        </div>

        <div className="project-media">
          <ViewableImage
            src="https://raw.githubusercontent.com/RandallCaler/CSC400/main/webpage/leveleditor1.png"
            className="image-container"
          />
          <ViewableImage
            src="https://raw.githubusercontent.com/RandallCaler/CSC400/main/webpage/leveleditor2.png"
            className="image-container"
          />
          <ViewableImage
            src="https://github.com/RandallCaler/CSC400/blob/main/webpage/banner.png?raw=true"
            className="image-container"
          />
        </div>
      </div>
      <div className="project-footer" onClick={handleClick}>
        <h2>Link to Project</h2>
      </div>
    </>
  );
};
export default Manchot;
