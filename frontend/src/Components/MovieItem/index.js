import { Link, withRouter } from "react-router-dom";
import "./index.css";

const MovieItem = (props) => {
  const { movieDetails } = props;
  const { id, title, year, posterImageUrl } = movieDetails;

  return (
    <Link to={`/movies/${id}`} className="nav-link">
      <li className="movie-card">
        <img src={posterImageUrl} alt={title} className="poster-image" />
        <div className="movie-text-container">
          <p className="title-text">
            {title}
            <br />
            <span className="year-text">{year}</span>
          </p>
        </div>
      </li>
    </Link>
  );
};
export default withRouter(MovieItem);
