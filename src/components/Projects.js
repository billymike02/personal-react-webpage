import React from "react";
import Box from "./Box.js";
import colors from "../colors.js";

const Projects = () => {
  return (
    <div className="box-container">
      <Box className="box-default" backgroundColor={colors.orange}>
        <h2> Wot</h2>
      </Box>
      <Box className="box-full-width" backgroundColor="rgb(87	154	64)">
        <h2>New area</h2>
      </Box>
      <Box className="box-full-width" backgroundColor="rgb(184	208	225	)">
        <h2>New area</h2>
      </Box>
      <Box className="box-full-width" backgroundColor="rgb(248	216	86	)">
        <h2>New area</h2>
      </Box>
    </div>
  );
};

export default Projects;
