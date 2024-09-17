import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

// Projects
import ProjectInfo from "./ProjectContainer.js";

import styles from "./Project.module.css";
import ViewableImage from "./ModalImage.js";

const PlaylistPursuitProject = (
  <ProjectInfo
    title="Playlist Pursuit"
    timeline={"Jan. 2024-Aug. 2024"}
    accentColor="rgb(120 21 222)"
    externalLink={
      "https://github.com/billymike02/PlaylistPursuit?tab=readme-ov-file"
    }
  >
    <div>
      <h3>Description</h3>
      <p>
        "Playlist Pursuit" is an engaging music trivia game designed to enhance
        social interaction through music. Players connect via Spotify to
        anonymously queue songs in a shared playlist. The goal is to guess which
        friend added each song, earning points for correct guesses. This app
        combines the excitement of music discovery with friendly competition,
        making it a unique addition to any music lover's repertoire.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>
          <strong>Anonymous Song Queuing:</strong> Allows players to add songs
          to a shared playlist without revealing their identity, creating an
          intriguing and diverse music experience.
        </li>
        <li>
          <strong>Guessing Game Mechanics:</strong> Players guess which friend
          added each song, with accurate guesses earning points and adding a
          competitive edge to the game.
        </li>
        <li>
          <strong>Live Leaderboard:</strong> Real-time tracking of player
          progress and rankings, enhancing the competitive aspect of the game.
        </li>
        <li>
          <strong>Spotify Integration:</strong> Seamlessly integrates with
          Spotify to access a wide range of tracks, enhancing the gameplay
          experience with familiar music.
        </li>
      </ul>
      <h3>Technical Details:</h3>
      <ul>
        <li>
          <strong>Platform:</strong> Developed for both iOS and Android,
          ensuring broad accessibility.
        </li>
        <li>
          <strong>Technology:</strong> Built with Flutter for cross-platform
          compatibility, Firebase for real-time data synchronization, and the
          Spotify API for music integration.
        </li>
        <li>
          <strong>Backend and Real-Time Features:</strong> Utilizes Firebase for
          handling asynchronous operations, managing playlist updates, and
          supporting real-time interactions.
        </li>
      </ul>
      <p>
        "Playlist Pursuit" transforms your music experience into a competitive
        and interactive game. By leveraging modern technologies and integrating
        with Spotify, it provides a fun and engaging platform for friends to
        connect through music.
      </p>
      <h3>Contributions</h3>
      <p>
        Initially starting with a specific role, I eventually took on full
        responsibility for "Playlist Pursuit." My contributions spanned the
        entire project lifecycle, including:
      </p>
      <ul>
        <li>
          <strong>Initial Design:</strong> Created Figma mockups to define the
          app’s user interface and user experience.
        </li>
        <li>
          <strong>Frontend Development:</strong> Developed the user interface
          using Flutter, ensuring a seamless and intuitive experience across iOS
          and Android platforms.
        </li>
        <li>
          <strong>Backend Development:</strong> Implemented real-time features
          and data synchronization using Firebase, and integrated with the
          Spotify API for music functionality.
        </li>
        <li>
          <strong>Project Management:</strong> Oversaw the project from concept
          to completion, managing development, testing, and deployment phases to
          ensure a high-quality final product.
        </li>
      </ul>
      <p>
        This project showcases my ability to manage and execute all aspects of
        software development, from initial design to final deployment,
        demonstrating my comprehensive skills in full-stack development.
      </p>

      <div className={styles.media}>
        <ViewableImage
          src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.45.35.png"
          className="image-container"
          maxWidth={"250px"}
        />
        <ViewableImage
          src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.46.05.png"
          className="image-container"
          maxWidth={"250px"}
        />
        <ViewableImage
          src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.46.37.png"
          className="image-container"
          maxWidth={"250px"}
        />
        <ViewableImage
          src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.47.06.png"
          className="image-container"
          maxWidth={"250px"}
        />
        <ViewableImage
          src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.47.15.png"
          className="image-container"
          maxWidth={"250px"}
        />
      </div>
    </div>
  </ProjectInfo>
);

const ManchotProject = (
  <ProjectInfo
    title="3D Game Engine + Demo"
    accentColor="rgb(44 103 144)"
    timeline={"Apr. 2024-June 2024"}
    externalLink={
      "https://html-preview.github.io/?url=https://github.com/RandallCaler/CSC400/blob/main/webpage/index.html"
    }
  >
    <div>
      <h3>Description</h3>
      <p>
        "Manchot's First Flight" is an innovative game developed using a custom
        game engine, featuring a fictional French penguin on a quest to gather
        food for a picnic with his girlfriend. The game combines engaging
        exploration and puzzle-solving in a whimsically designed winter
        environment, showcasing a unique art style and interactive gameplay.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>
          <strong>Custom Game Engine:</strong> Developed with a custom engine
          using C++, OpenGL, Assimp, and GLFW. This allowed for a highly
          optimized and tailored gaming experience.
        </li>
        <li>
          <strong>Asset Creation:</strong> Designed and created unique visual
          assets to enhance the game's aesthetic and gameplay experience.
        </li>
        <li>
          <strong>Interactive Gameplay:</strong> Includes diverse puzzles and
          exploration elements that challenge players and contribute to a
          rewarding experience.
        </li>
        <li>
          <strong>Collaborative Development:</strong> Worked as part of a
          7-person team, demonstrating strong teamwork and communication skills
          in delivering a cohesive final product.
        </li>
      </ul>
      <h3>Technical Details:</h3>
      <ul>
        <li>
          <strong>Platform:</strong> Custom-developed game engine with
          cross-platform capabilities.
        </li>
        <li>
          <strong>Technology:</strong> Utilized C++ for core development, OpenGL
          for graphics rendering, Assimp for asset management, and GLFW for
          window and input handling.
        </li>
        <li>
          <strong>Development Contributions:</strong> Contributed to both asset
          creation and frontend development. Responsible for designing and
          integrating game assets and implementing key frontend features.
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
        As a key contributor to "Manchot's First Flight," I was responsible for
        designing and creating game assets, as well as handling frontend
        development tasks. My role included collaborating with a team of 7 to
        develop the custom game engine, implement interactive features, and
        ensure a cohesive gameplay experience. This project showcases my skills
        in both technical development and effective teamwork.
      </p>
      <div className={styles.media}>
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
  </ProjectInfo>
);

const RogueToolkitProject = (
  <ProjectInfo
    title="Rogue Toolkit"
    timeline={"July 2023-July 2024"}
    accentColor="rgb(120, 0, 0)"
    externalLink={"https://github.com/billymike02/RogueToolkit"}
  >
    <div>
      <h3>Description</h3>
      <p>
        "Rogue Toolkit" is a Blender addon developed to theoretically enhance
        the productivity of 3D artists by automating various time-consuming
        tasks. It offers a range of advanced tools designed to simplify the
        integration of sci-fi effects into Blender scenes, including laser
        beams, flak fields, starfields, and path-following animations for
        spacecraft. By automating these processes, the toolkit aims to reduce
        manual effort and streamline workflow, allowing artists to focus more on
        their creative work.
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
          <strong>Path-Following for Spaceships:</strong> Simplify spacecraft
          animations by allowing them to follow predefined paths efficiently.
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
          through personal projects, with ongoing updates to enhance features
          and improve functionality based on theoretical use cases and feedback.
        </li>
      </ul>
      <p>
        Rogue Toolkit aims to provide valuable tools for 3D artists by
        automating complex tasks and improving productivity. Although the
        toolkit is designed to assist artists theoretically, its effectiveness
        and practical adoption are based on its intended functionalities and
        ongoing updates.
      </p>
      <h3>Contributions</h3>
      <p>
        As the sole developer, I managed all aspects of Rogue Toolkit, from
        design and development to implementation. Using Python, I created tools
        that automate various tasks in Blender, enhancing the efficiency of
        artists' workflows. My continuous development efforts ensure the toolkit
        remains robust and functional, aiming to address theoretical
        productivity needs in the field.
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
  </ProjectInfo>
);

const panels = [PlaylistPursuitProject, ManchotProject, RogueToolkitProject];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation properties
  const props = useSpring({
    opacity: 1,
    transform: "scale(1)",

    from: { opacity: 1, transform: "scale(0.9)" },
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
    <div className="content-body" backgroundColor="#DEDFE4">
      <div className="project-nav">
        <div className="nav-arrow" onClick={handlePrev}>
          &#x2039; Prev
        </div>
        <div>
          <div className="project-index">
            {currentIndex + 1} / {panels.length}
          </div>
        </div>
        <div className="nav-arrow" onClick={handleNext}>
          Next &#x203A;
        </div>
      </div>
      <animated.div style={props} className="project-container">
        {panels[currentIndex]}
      </animated.div>
    </div>
  );
};

export default Projects;
