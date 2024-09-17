import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortalComponent from "./PortalComponent.js";
import ModalImage from "./ModalImage.js";

const ViewableImage = ({ src, maxWidth, maxHeight }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="image-container"
        style={{
          maxWidth: maxWidth,
          maxHeight: maxHeight,
        }}
        onClick={() => setShowModal(true)}
      >
        <img
          className="responsive-image"
          src={src}
          style={{ borderRadius: "0.3rem" }}
        />
      </div>

      <ModalImage
        src={src}
        bShow={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default ViewableImage;
