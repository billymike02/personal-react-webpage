import React from "react";
import HorizontalImageBrowser from "./HorizontalImageBrowser";
import { useState } from "react";

const PlaylistPursuit = () => {
  const images = [
    "https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.45.35.png",
    // "https://via.placeholder.com/150",
    // "https://via.placeholder.com/150",
    // "https://via.placeholder.com/150",
  ];

  return (
    <>
      <div className="project-heading">
        <h2>Playlist Pursuit</h2>
        <h3>Project Timeline: Jan. 2024-Aug. 2024</h3>
      </div>

      {/* <h3>Description</h3>
      <h3>Contributions</h3>
      <p>This was originally supposed to be a group project.</p> */}

      <h3>Media</h3>

      <HorizontalImageBrowser images={images} />
    </>
  );
};
export default PlaylistPursuit;
