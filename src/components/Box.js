function Box({ backgroundColor, children, className }) {
  return (
    <div className={className} style={{ backgroundColor: backgroundColor }}>
      <div className="info">{children}</div>
    </div>
  );
}

export default Box;
