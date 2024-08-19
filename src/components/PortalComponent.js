import React, { Children } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function ModalContent({ children, onClose, show }) {
  return (
    <animated.div className="modal" onClick={onClose}>
      {children}
      {/* <button onClick={onClose}>Close</button> */}
    </animated.div>
  );
}
