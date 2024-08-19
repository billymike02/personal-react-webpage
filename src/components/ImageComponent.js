import React from "react";
import "./ImageComponent.css"; // Import the CSS file

const ImageComponent = ({ src, alt, maxWidth, maxHeight }) => {
  return (
    <div className="image-container" style={{ maxWidth, maxHeight }}>
      <img src={src} alt={alt} className="responsive-image" />
    </div>
  );
};

export default ImageComponent;
