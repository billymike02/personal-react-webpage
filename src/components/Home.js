// src/components/Home.js
import React from "react";
import backgroundVideo from "../assets/images/background-video.mp4";

const Home = () => {
  return (
    <div className="main">
      <video
        src={backgroundVideo}
        width="600"
        height="300"
        autoplay="true"
        muted="true"
        loop="true"
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <div className="content">
        <h2>Home Page</h2>
        <p>Welcome to the home page of our React app!</p>
      </div>
    </div>
  );
};

export default Home;
