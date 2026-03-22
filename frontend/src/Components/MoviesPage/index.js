import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import MovieItem from "../MovieItem";
import Footer from "../Footer";
import { getMovies } from "../Resources";

import "./index.css";

class MoviesPage extends Component {
  state = { moviesList: [], isLoading: true };

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList = () => {
    const list = getMovies();
    setTimeout(() => {
      this.setState({ moviesList: list, isLoading: false });
    }, 400);
  };

  render() {
    const { moviesList, isLoading } = this.state;
    return (
      <div className="movies-div">
        <div className="movies-page-banner-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/10/Marvel_Studios_2016_logo.svg"
            className="movies-banner-image"
            alt="movies-banner"
          />
          <p className="movies-banner-text">Movies</p>
        </div>
        {isLoading ? (
          <div className="products-loader-container" data-testid="loader">
            <ThreeDots
              type="ThreeDots"
              color="rgba(255, 107, 107, 0.8)"
              height={60}
              width={60}
            />
          </div>
        ) : (
          <>
            <ul className="movie-list-container">
              {moviesList.map((eachMovie) => (
                <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
              ))}
            </ul>
            <Footer />
          </>
        )}
      </div>
    );
  }
}
export default MoviesPage;
