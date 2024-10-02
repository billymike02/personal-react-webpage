// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <>
      <nav
        className="sidebar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <h1>Bill Woodward</h1>

        <Link to="/about">About</Link>

        <Link to="/projects">Projects</Link>

        <a
          href="https://www.linkedin.com/in/wmwoodward2002/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/billymike02"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </>
  );
};

export default Sidebar;
