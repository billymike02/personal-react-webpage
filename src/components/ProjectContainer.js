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
      <div className="project-heading" style={{ backgroundColor: accentColor }}>
        <h2>{title}</h2>
        <h3>{timeline}</h3>
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
