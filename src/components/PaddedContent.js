function PaddedContent({ children, backgroundColor, color }) {
  return (
    <div className="padded-content" style={{ backgroundColor, color }}>
      <div className="content-body">{children}</div>
    </div>
  );
}

export default PaddedContent;
