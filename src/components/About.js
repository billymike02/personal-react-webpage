import React from "react";
import Box from "./Box.js";
import portraitImage from "../assets/images/portrait.png";
import colors from "../colors.js";

const About = () => {
  return (
    <div className="box-container">
      <Box backgroundColor={colors.pink} className="box-default">
        <div className="info">
          <img src={portraitImage} className="portrait" alt="Portrait" />
          <h2>About</h2>
          <p>
            <i>
              <b>Billy Woodward</b>
            </i>{" "}
            is both extremely handsome, and a seasoned React developer.
          </p>
        </div>
      </Box>

      <Box className="box-full-width" backgroundColor={colors.green}>
        <h2>New area</h2>
      </Box>
      <Box className="box-full-width" backgroundColor={colors.lightblue}>
        <h2>New area</h2>
      </Box>
      <Box className="box-full-width" backgroundColor={colors.yellow}>
        <h2>New area</h2>
      </Box>
    </div>
  );
};

export default About;
