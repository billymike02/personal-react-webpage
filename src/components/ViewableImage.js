import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortalComponent from "./PortalComponent.js";

const ViewableImage = ({ src, maxWidth, maxHeight }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="image-container"
        style={{ maxWidth, maxHeight }}
        onClick={() => setShowModal(true)}
      >
        <img className="responsive-image" src={src} />
      </div>

      {showModal &&
        createPortal(
          <PortalComponent show={showModal} onClose={() => setShowModal(false)}>
            <img className="responsive-image" src={src} />
          </PortalComponent>,
          document.body
        )}
    </>
  );
};

export default ViewableImage;
