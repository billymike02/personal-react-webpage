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
        <h2>Manchot's First Flight</h2>
        <h3>Project Timeline: Apr. 2024-June. 2024</h3>
      </div>
      <div className="project-body">
        <div className="project-info">
          <h3>Description</h3>
          <p>
            Playlist Pursuit is a dynamic music trivia game that combines the
            thrill of music discovery with the fun of friendly competition. In
            this app, you and your friends connect via Spotify to anonymously
            queue songs in a shared playlist. The objective is simple: earn
            points by guessing which friend added each song to the queue.
          </p>
          <h3>Features:</h3>
          <ul>
            <li>
              <strong>Anonymous Song Queuing:</strong> Add songs to a shared
              playlist without revealing your identity. Create a diverse and
              intriguing mix of music.
            </li>
            <li>
              <strong>Guessing Game:</strong> Test your knowledge of your
              friends' musical tastes by guessing who queued each song. The more
              accurate your guesses, the more points you earn.
            </li>
            <li>
              <strong>Live Leaderboard:</strong> Track your progress and see how
              you stack up against your friends in real-time with a live
              leaderboard.
            </li>
            <li>
              <strong>Spotify Integration:</strong> Seamlessly integrate with
              Spotify to access your favorite tracks and discover new ones while
              playing.
            </li>
          </ul>
          <h3>Technical Details:</h3>
          <ul>
            <li>
              <strong>Platform:</strong> Available on iOS and Android.
            </li>
            <li>
              <strong>Technology:</strong> Built with Flutter for a smooth
              cross-platform experience, Firebase for real-time data
              synchronization, and the Spotify API for music integration.
            </li>
            <li>
              <strong>Game Mechanics:</strong> Utilizes asynchronous operations
              to manage playlist updates and guessing rounds efficiently.
            </li>
          </ul>
          <p>
            Playlist Pursuit turns your music library into a competitive
            playground, making it the perfect app for music lovers looking to
            add a fun twist to their listening experience.
          </p>
          <h3>Contributions</h3>
          <p>
            I designed and developed every aspect of Playlist Pursuit. From the
            initial concept and user experience design to the technical
            implementation, I handled it all. This includes integrating
            Spotify’s API, building the real-time features with Firebase, and
            creating a seamless cross-platform experience using Flutter. My role
            encompassed not only coding but also project management, ensuring
            that the app met all functional requirements and delivered an
            engaging user experience.
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
