import "./SketchfabEmbed.css";

const SketchfabEmbed = ({ title, caption, url }) => (
  <div className="sketchfab-embed-container">
    <iframe
      title={title}
      src={url}
      className="sketchfab-embed"
      frameBorder="0"
      height="640"
      width="480"
      allow="autoplay; fullscreen; vr"
      allowFullScreen
    ></iframe>
  </div>
);

export default SketchfabEmbed;
