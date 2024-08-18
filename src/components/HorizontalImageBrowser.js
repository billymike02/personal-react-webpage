// HorizontalImageBrowser.js
import React, { useRef, useState } from "react";
import "./HorizontalImageBrowser.css"; // Import CSS for styling
import PortalComponent from "./PortalComponent";
import { createPortal } from "react-dom";

const HorizontalImageBrowser = ({ images }) => {
  const scrollContainerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

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
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <PortalComponent
            show={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
      <button className="arrow left" onClick={scrollLeft}>
        ‹
      </button>

      <div className="image-container" ref={scrollContainerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            className="project-image"
            src={image}
            alt={`Project ${index}`}
          />
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        ›
      </button>
    </div>
  );
};

export default HorizontalImageBrowser;
