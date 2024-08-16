import React from "react";
import Box from "./Box.js";
import colors from "../colors.js";
import DemoImage from "./DemoImage.js";

const Projects = () => {
  return (
    <div className="project-background">
      <div className="project-container">
        <Box
          className="box-full-width"
          backgroundColor={colors.lightblue}
        ></Box>
        <Box className="box-default" backgroundColor={colors.purple}>
          <div className="box-title">Playlist Pursuit</div>
          <div className="info">
            <p>
              Playlist Pursuit is a multiplayer game built with Flutter and
              Firebase for iOS and Android. Players anonymously contribute to a
              music queue and guess the tracks played, using the Spotify API to
              enhance the experience.
            </p>
            <h3>Features</h3>
            <ul>
              <li>Multiplayer Gameplay: Play with friends or other users.</li>
              <li>
                Anonymous Play: Contribute to a music queue without revealing
                your identity.
              </li>
              <li>Spotify Integration: Utilize Spotify’s music library.</li>
              <li>Real-time Updates: Firebase for live game updates.</li>
              <li>Cross-Platform: Available on iOS and Android.</li>
            </ul>
          </div>
        </Box>

        <Box className="box-default" backgroundColor={colors.purple}>
          <div className="info">
            <h3>Product Media</h3>
            <div className="demo-image-container">
              <DemoImage url="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.45.35.png" />
              <DemoImage url="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.46.05.png" />
              <DemoImage url="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.46.37.png" />
              <DemoImage url="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.47.06.png" />
              <DemoImage url="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.47.15.png" />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
