import "./index.css";

const Trailer = (props) => {
  const { trailerUrl } = props;

  return (
    <div className="video-container">
      <iframe
        className="video"
        width="560"
        height="315"
        src={trailerUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Trailer;
