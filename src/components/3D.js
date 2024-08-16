// src/components/Home.js
import React from "react";
import backgroundVideo from "../assets/images/background-video.mp4";
import styles from "./3D.module.css";
import SketchfabEmbed from "./SketchfabEmbed";

const Creative = () => {
  return (
    <div>
      <div class={styles.videocontainer}>
        <div className={styles.heading}>
          <h1>3D Career</h1>
          <p>as if</p>
        </div>
        <video
          src={backgroundVideo}
          width="600"
          height="300"
          autoplay="true"
          muted="true"
          loop="true"
          className={styles.backgroundvideo}
        />
      </div>
      <div className="info">
        <h2>Featured Model</h2>
        <p>Welcome to the home page of our React app!</p>
        <div className="embed-container">
          <SketchfabEmbed url="https://sketchfab.com/models/c63e3be2827544ce90557475cd8c811e/embed?autostart=0" />
          <SketchfabEmbed url="https://sketchfab.com/models/c63e3be2827544ce90557475cd8c811e/embed?autostart=0" />
        </div>
      </div>
    </div>
  );
};

export default Creative;
