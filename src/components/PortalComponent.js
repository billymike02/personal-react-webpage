// PortalComponent.js
import React from "react";
// Make sure to import the CSS for fade-in effect

export default function PortalComponent({ onClose, show }) {
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Close</button>
        <p>I'm a modal dialog</p>
      </div>
    </div>
  );
}
