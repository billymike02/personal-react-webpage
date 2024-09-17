import React from "react";
import ViewableImage from "./ViewableImage.js";
import styles from "./Project.module.css";

const PlaylistPursuit = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/billymike02/RogueToolkit",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="project-heading rogue-toolkit">
        <h2>Rogue Toolkit</h2>
        <h3>Project Timeline: July. 2023-July. 2024</h3>
      </div>
      <div className="project-body">
        <div className="project-info">
          <h3>Description</h3>
          <p>
            "Rogue Toolkit" is a Blender addon developed to theoretically
            enhance the productivity of 3D artists by automating various
            time-consuming tasks. It offers a range of advanced tools designed
            to simplify the integration of sci-fi effects into Blender scenes,
            including laser beams, flak fields, starfields, and path-following
            animations for spacecraft. By automating these processes, the
            toolkit aims to reduce manual effort and streamline workflow,
            allowing artists to focus more on their creative work.
          </p>
          <h3>Features:</h3>
          <ul>
            <li>
              <strong>Laser Effects:</strong> Effortlessly add and customize
              high-quality laser effects to enhance your scenes.
            </li>
            <li>
              <strong>Flak Fields:</strong> Automatically generate realistic
              explosion effects within a specified volume, reducing manual
              adjustment time.
            </li>
            <li>
              <strong>Starfields:</strong> Quickly create detailed starfield
              backgrounds to enrich space scenes without extensive setup.
            </li>
            <li>
              <strong>Path-Following for Spaceships:</strong> Simplify
              spacecraft animations by allowing them to follow predefined paths
              efficiently.
            </li>
          </ul>
          <h3>Technical Details:</h3>
          <ul>
            <li>
              <strong>Platform:</strong> Developed as a Blender addon using
              Blender's Python API for seamless integration.
            </li>
            <li>
              <strong>Technology:</strong> Implemented in Python to work within
              Blender’s scripting environment.
            </li>
            <li>
              <strong>Development and Maintenance:</strong> Developed and tested
              through personal projects, with ongoing updates to enhance
              features and improve functionality based on theoretical use cases
              and feedback.
            </li>
          </ul>
          <p>
            Rogue Toolkit aims to provide valuable tools for 3D artists by
            automating complex tasks and improving productivity. Although the
            toolkit is designed to assist artists theoretically, its
            effectiveness and practical adoption are based on its intended
            functionalities and ongoing updates.
          </p>
          <h3>Contributions</h3>
          <p>
            As the sole developer, I managed all aspects of Rogue Toolkit, from
            design and development to implementation. Using Python, I created
            tools that automate various tasks in Blender, enhancing the
            efficiency of artists' workflows. My continuous development efforts
            ensure the toolkit remains robust and functional, aiming to address
            theoretical productivity needs in the field.
          </p>

          <div className={styles.media}>
            <ViewableImage
              src="https://github.com/billymike02/RogueToolkit/raw/main/demo_images/Screenshot%202024-08-12%20at%2019.25.51.png"
              className="image-container"
            />
            <ViewableImage
              src="https://github.com/billymike02/RogueToolkit/raw/main/demo_images/Screenshot%202024-08-12%20at%2019.27.13.png"
              className="image-container"
            />
            <ViewableImage
              src="https://github.com/billymike02/RogueToolkit/raw/main/demo_images/Screenshot%202024-08-12%20at%2019.27.57.png"
              className="image-container"
            />
          </div>
        </div>
      </div>
      <div className="project-footer" onClick={handleClick}>
        <h2>Link to Project</h2>
      </div>
    </>
  );
};
export default PlaylistPursuit;
