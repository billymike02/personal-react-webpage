function ProjectContainer({ children }) {
  return (
    <div className="project-container">
      <div className="project-content">{children}</div>
      <div className="project-links">
        <h2>Project Links</h2>
      </div>
    </div>
  );
}

export default ProjectContainer;
