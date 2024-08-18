import React, { useRef } from "react";
import "./HorizontalImageBrowser.css"; // Import CSS for styling

const HorizontalImageBrowser = ({ images }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="horizontal-image-browser">
      <button className="arrow left" onClick={scrollLeft}>
        ‹
      </button>

      <div className="image-container">
        <img className="project-image" src={images[0]}></img>
      </div>
      <button className="arrow right" onClick={scrollRight}>
        ›
      </button>
    </div>
  );
};

export default HorizontalImageBrowser;
