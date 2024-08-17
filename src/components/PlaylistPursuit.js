import React from "react";
import Box from "./Box.js";
import portraitImage from "../assets/images/portrait-surf.JPG";
import colors from "../colors.js";
import PaddedContent from "./PaddedContent.js";
import resume from "../assets/files/resume.pdf";

const PlaylistPursuit = () => {
  return (
    <div>
      <h2>Playlist Pursuit</h2>
      <h3>Description</h3>
      <h3>Contributions</h3>
      <p>This was originally supposed to be a group project.</p>

      <h3>Media</h3>
      <div className="project-media"></div>
    </div>
  );
};
export default PlaylistPursuit;
