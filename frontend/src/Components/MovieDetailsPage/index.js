import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Component } from "react";
import Trailer from "../Trailer";
import Footer from "../Footer";
import "./index.css";

class MovieDetailsPage extends Component {
  state = { movieDetails: {}, isLoading: false };

  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails = async () => {
    this.setState({ isLoading: true });
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    try {
      const movieDetailsURL = `https://nmarvelfullstack.onrender.com/movies/${id}`;
      const response = await fetch(movieDetailsURL);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      const formattedData = {
        id: data.id,
        title: data.title,
        year: data.year,
        posterImageUrl: data.posterimageurl,
        bannerImageUrl: data.bannerimageurl,
        overview: data.overview,
        trailerUrl: data.trailerurl,
        director: data.director,
        writer: data.writer,
        runTime: data.runtime,
        releaseDate: data.releasedate,
        rating: data.rating,
      };

      this.setState({
        movieDetails: formattedData,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error:", error);

      this.setState({ isLoading: false });
    }
  };

  render() {
    const { movieDetails, isLoading } = this.state;

    const {
      posterImageUrl,
      bannerImageUrl,
      overview,
      trailerUrl,
      director,
      writer,
      runTime,
      releaseDate,
      rating,
      title,
    } = movieDetails;

    return isLoading ? (
      <div className="loader-container" data-testid="loader">
        <ThreeDots
          type="ThreeDots"
          color="rgba(255, 107, 107, 0.8)"
          height={60}
          width={60}
        />
      </div>
    ) : (
      <div className="movie-details-div">
        <img src={bannerImageUrl} alt={title} className="banner-image" />
        <div className="movie-overview-poster-div">
          <div className="overview-div">
            <h1 className="overview-heading tracking-in-expand">OVERVIEW</h1>
            <p className="overview-para">{overview}</p>
            <div className="cast-details-div">
              <div className="cast-card">
                <p className="cast-heading">Directed By</p>
                <p className="cast-para">{director}</p>
              </div>
              <div className="cast-card">
                <p className="cast-heading">Written By</p>
                <p className="cast-para">{writer}</p>
              </div>
              <div className="cast-card">
                <p className="cast-heading">Rating</p>
                <p className="cast-para">{rating}</p>
              </div>
              <div className="cast-card">
                <p className="cast-heading">Run Time</p>
                <p className="cast-para">{runTime}</p>
              </div>
              <div className="cast-card">
                <p className="cast-heading">Release Date</p>
                <p className="cast-para">{releaseDate}</p>
              </div>
            </div>
          </div>
          <img
            src={posterImageUrl}
            alt={title}
            className="movie-details-poster"
          />
        </div>
        <Trailer trailerUrl={trailerUrl} />
        <Link to="/movies" className="back-button-nav">
          <button type="button" className="back-button">
            Back to Movies
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}
export default MovieDetailsPage;
