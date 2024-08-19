import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function ModalContent({ onClose, show }) {
  return (
    <animated.div className="modal">
      <img
        className="project-image"
        src="https://github.com/billymike02/PlaylistPursuit/raw/main/demo_images/Simulator%20Screenshot%20-%20iPhone%2015%20-%202024-08-15%20at%2010.45.35.png"
      />

      {/* <button onClick={onClose}>Close</button> */}
    </animated.div>
  );
}
