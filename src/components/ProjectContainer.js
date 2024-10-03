const ProjectInfo = ({
  title = "Untitled Project",
  accentColor = "black",
  timeline,
  children,
  externalLink,
}) => {
  const openExternalLink = () => {
    window.open(externalLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        className="project-heading"
        style={{
          backgroundColor: accentColor,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "clamp(1vw, 3rem, 3rem)" }}>{title}</h2>
        <h3
          style={{
            fontSize: "1.7rem",

            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          {timeline}
        </h3>
      </div>
      <div className="project-body">
        <div className="project-info">{children}</div>
      </div>
      {externalLink && (
        <div className="project-footer" onClick={openExternalLink}>
          <h2>Link to Project</h2>
        </div>
      )}
    </>
  );
};

export default ProjectInfo;
