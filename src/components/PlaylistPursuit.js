import React from "react";
import ViewableImage from "./ViewableImage.js";

const PlaylistPursuit = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/billymike02/PlaylistPursuit?tab=readme-ov-file",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="project-heading playlist-pursuit">
        <h2>Playlist Pursuit</h2>
        <h3>Project Timeline: Jan. 2024-Aug. 2024</h3>
      </div>
      <div className="project-body">
        <div className="project-info">
          <h3>Description</h3>
          <p>
            "Playlist Pursuit" is an engaging music trivia game designed to
            enhance social interaction through music. Players connect via
            Spotify to anonymously queue songs in a shared playlist. The goal is
            to guess which friend added each song, earning points for correct
            guesses. This app combines the excitement of music discovery with
            friendly competition, making it a unique addition to any music
            lover's repertoire.
          </p>
          <h3>Features:</h3>
          <ul>
            <li>
              <strong>Anonymous Song Queuing:</strong> Allows players to add
              songs to a shared playlist without revealing their identity,
              creating an intriguing and diverse music experience.
            </li>
            <li>
              <strong>Guessing Game Mechanics:</strong> Players guess which
              friend added each song, with accurate guesses earning points and
              adding a competitive edge to the game.
            </li>
            <li>
              <strong>Live Leaderboard:</strong> Real-time tracking of player
              progress and rankings, enhancing the competitive aspect of the
              game.
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
              compatibility, Firebase for real-time data synchronization, and
              the Spotify API for music integration.
            </li>
            <li>
              <strong>Backend and Real-Time Features:</strong> Utilizes Firebase
              for handling asynchronous operations, managing playlist updates,
              and supporting real-time interactions.
            </li>
          </ul>
          <p>
            "Playlist Pursuit" transforms your music experience into a
            competitive and interactive game. By leveraging modern technologies
            and integrating with Spotify, it provides a fun and engaging
            platform for friends to connect through music.
          </p>
          <h3>Contributions</h3>
          <p>
            Initially starting with a specific role, I eventually took on full
            responsibility for "Playlist Pursuit." My contributions spanned the
            entire project lifecycle, including:
          </p>
          <ul>
            <li>
              <strong>Initial Design:</strong> Created Figma mockups to define
              the app’s user interface and user experience.
            </li>
            <li>
              <strong>Frontend Development:</strong> Developed the user
              interface using Flutter, ensuring a seamless and intuitive
              experience across iOS and Android platforms.
            </li>
            <li>
              <strong>Backend Development:</strong> Implemented real-time
              features and data synchronization using Firebase, and integrated
              with the Spotify API for music functionality.
            </li>
            <li>
              <strong>Project Management:</strong> Oversaw the project from
              concept to completion, managing development, testing, and
              deployment phases to ensure a high-quality final product.
            </li>
          </ul>
          <p>
            This project showcases my ability to manage and execute all aspects
            of software development, from initial design to final deployment,
            demonstrating my comprehensive skills in full-stack development.
          </p>
        </div>

        <div className="project-media">
          <ViewableImage
            src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.45.35.png"
            className="image-container"
          />
          <ViewableImage
            src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.46.05.png"
            className="image-container"
          />
          <ViewableImage
            src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.46.37.png"
            className="image-container"
          />
          <ViewableImage
            src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.47.06.png"
            className="image-container"
          />
          <ViewableImage
            src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.47.15.png"
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
export default PlaylistPursuit;
