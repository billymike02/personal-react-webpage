function PaddedContent({ children, backgroundColor, color }) {
  return (
    <>
      <div className="content-body">{children}</div>
    </>
  );
}

export default PaddedContent;
