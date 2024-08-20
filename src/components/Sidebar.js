// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <>
      <nav className="sidebar">
        {isDesktop && (
          <ul>
            <h1>Bill Woodward</h1>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            {/* <li>
          <Link to="/creative">Animation</Link>
        </li> */}

            <li>
              <a
                href="https://www.linkedin.com/in/wmwoodward2002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/billymike02"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            {/* <li>
            <a
              href="https://sketchfab.com/a308"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sketchfab
            </a>
          </li> */}
          </ul>
        )}

        {isMobile && (
          <ul>
            <h1>Bill Woodward</h1>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            {/* <li>
          <Link to="/creative">Animation</Link>
        </li> */}

            <li>
              <a
                href="https://www.linkedin.com/in/wmwoodward2002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/billymike02"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            {/* <li>
            <a
              href="https://sketchfab.com/a308"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sketchfab
            </a>
          </li> */}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
