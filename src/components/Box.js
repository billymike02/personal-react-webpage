function Box({ backgroundColor, children, className, textColor }) {
  return (
    <div
      className={className}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div>{children}</div>
    </div>
  );
}

export default Box;
