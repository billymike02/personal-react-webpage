// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import sketchfabLogo from "../assets/images/sketchfab-logo-black.png"; // Update path as necessary
import githubLogo from "../assets/images/github-logo-black.png";
import linkedInLogo from "../assets/images/linked-in-logo-black.png";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <div className="separator"></div>
        <li>
          <a
            href="https://linkedin.com/wmwoodward2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="LinkedIn" className="sidebar-logo" />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://sketchfab.com/a308"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sketchfabLogo} alt="Sketchfab" className="sidebar-logo" />
            Sketchfab
          </a>
        </li>
        <li>
          <a
            href="https://github.com/billymike02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="sidebar-logo" />
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
