// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav
        className="sidebar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          minWidth: "36%",
        }}
      >
        <div className="name-container">
          <h1>Bill Woodward</h1>
        </div>

        <Link to="/about" style={{ cursor: "pointer" }}>
          About
        </Link>

        <Link to="/projects" style={{ cursor: "pointer" }}>
          Projects
        </Link>

        <a
          href="https://www.linkedin.com/in/wmwoodward2002/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/billymike02"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          GitHub
        </a>
      </nav>
    </>
  );
};

export default Sidebar;
