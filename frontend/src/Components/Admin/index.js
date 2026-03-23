import { Component } from "react";
import Cookie from "js-cookie";
import "./index.css";

const updateConstants = {
  initial: "INITIAL",
  addMovie: "ADD_MOVIE",
  deleteMovie: "DELETE_MOVIE",
  editMovie: "EDIT_MOVIE",
};

class Admin extends Component {
  state = {
    activeTab: updateConstants.initial,
    moviesList: [],
    formMessage: "",
    addMovieFields: {
      title: "",
      year: "",
      posterImageUrl: "",
      bannerImageUrl: "",
      overview: "",
      trailerUrl: "",
      director: "",
      writer: "",
      runTime: "",
      releaseDate: "",
      rating: "",
    },
  };

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList = async () => {
    try {
      const moviesURL = "https://nmarvelfullstack.onrender.com/movies";

      const response = await fetch(moviesURL);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      this.setState({
        moviesList: data,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  onAddMovieTab = () => {
    this.setState({ activeTab: updateConstants.addMovie });
  };

  onDeleteMovieTab = () => {
    this.setState({ activeTab: updateConstants.deleteMovie });
  };
  onEditMovieTab = () => {
    this.setState({ activeTab: updateConstants.editMovie });
  };

  onChangeTitleInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        title: event.target.value,
      },
    }));
  };

  onChangeYearInput = (event) => {
    if (event.target.value !== "") {
      this.setState((prevState) => ({
        addMovieFields: {
          ...prevState.addMovieFields,
          year: parseInt(event.target.value),
        },
      }));
    }
  };

  onChangePosterInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        posterImageUrl: event.target.value,
      },
    }));
  };

  onChangeBannerInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        bannerImageUrl: event.target.value,
      },
    }));
  };

  onChangeOverviewInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        overview: event.target.value,
      },
    }));
  };

  onChangeTrailerInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        trailerUrl: event.target.value,
      },
    }));
  };

  onChangeDirectorInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        director: event.target.value,
      },
    }));
  };

  onChangeWriterInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        writer: event.target.value,
      },
    }));
  };

  onChangeRunTimeInput = (event) => {
    if (event.target.value !== "") {
      this.setState((prevState) => ({
        addMovieFields: {
          ...prevState.addMovieFields,
          runTime: parseInt(event.target.value),
        },
      }));
    }
  };
  onChangeReleaseDateInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        releaseDate: event.target.value,
      },
    }));
  };

  onChangeRatingInput = (event) => {
    this.setState((prevState) => ({
      addMovieFields: {
        ...prevState.addMovieFields,
        rating: event.target.value,
      },
    }));
  };

  onSubmitAddMovieForm = async (event) => {
    event.preventDefault();
    const { addMovieFields } = this.state;
    const jwtToken = Cookie.get("adminToken");
    const addMovieURL = "https://nmarvelfullstack.onrender.com/movies";
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addMovieFields),
    };
    try {
      const response = await fetch(addMovieURL, options);
      const data = await response.json();

      if (response.ok) {
        this.setState({
          formMessage: data.message,
          addMovieFields: {
            title: "",
            year: "",
            posterImageUrl: "",
            bannerImageUrl: "",
            overview: "",
            trailerUrl: "",
            director: "",
            writer: "",
            runTime: "",
            releaseDate: "",
            rating: "",
          },
        });
      } else {
        this.setState({ formMessage: data.message });
      }
    } catch (error) {
      this.setState({ errorMsg: "Something went wrong. Please try again." });
    }
  };

  renderAddMovieForm = () => {
    const { addMovieFields, formMessage } = this.state;

    return (
      <form
        className="add-movie-form-container"
        onSubmit={this.onSubmitAddMovieForm}
      >
        <h1 className="add-movie-heading">Enter Movie Details</h1>
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-input-field"
          value={addMovieFields.title}
          onChange={this.onChangeTitleInput}
        />
        <label className="form-label" htmlFor="year">
          Year
        </label>
        <input
          type="text"
          id="year"
          className="form-input-field"
          value={addMovieFields.year}
          onChange={this.onChangeYearInput}
        />
        <label className="form-label" htmlFor="poster-image">
          Poster Image URL
        </label>
        <input
          type="text"
          id="poster-image"
          className="form-input-field"
          value={addMovieFields.posterImageUrl}
          onChange={this.onChangePosterInput}
        />
        <label className="form-label" htmlFor="banner-image">
          Banner Image URL
        </label>
        <input
          type="text"
          id="banner-image"
          className="form-input-field"
          value={addMovieFields.bannerImageUrl}
          onChange={this.onChangeBannerInput}
        />
        <label className="form-label" htmlFor="overview">
          Overview
        </label>
        <textarea
          id="overview"
          className="form-input-field"
          onChange={this.onChangeOverviewInput}
          rows="4"
          value={addMovieFields.overview}
        ></textarea>
        <label className="form-label" htmlFor="trailer">
          Trailer URL
        </label>
        <input
          type="text"
          id="trailer"
          className="form-input-field"
          value={addMovieFields.trailerUrl}
          onChange={this.onChangeTrailerInput}
        />
        <label className="form-label" htmlFor="director">
          Director
        </label>
        <input
          type="text"
          id="director"
          className="form-input-field"
          value={addMovieFields.director}
          onChange={this.onChangeDirectorInput}
        />
        <label className="form-label" htmlFor="writer">
          Writer
        </label>
        <input
          type="text"
          id="writer"
          className="form-input-field"
          value={addMovieFields.writer}
          onChange={this.onChangeWriterInput}
        />
        <label className="form-label" htmlFor="runtime">
          Runtime
        </label>
        <input
          type="text"
          id="runtime"
          className="form-input-field"
          value={addMovieFields.runTime}
          onChange={this.onChangeRunTimeInput}
        />
        <label className="form-label" htmlFor="release-date">
          Release date
        </label>
        <input
          type="date"
          id="release-date"
          className="form-input-field"
          value={addMovieFields.releaseDate}
          onChange={this.onChangeReleaseDateInput}
        />
        <label className="form-label" htmlFor="rating">
          Rating
        </label>
        <input
          type="text"
          id="rating"
          className="form-input-field"
          value={addMovieFields.rating}
          onChange={this.onChangeRatingInput}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        {formMessage !== "" && <p className="form-message">{formMessage}</p>}
      </form>
    );
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="admin-container">
        <div className="heading-logout-container">
          <h1 className="admin-page-heading">Welcome to Admin Page</h1>
          <button type="button" className="logout-button">
            Logout
          </button>
        </div>
        <div className="tab-selection-container">
          <button
            type="button"
            className={`${activeTab === updateConstants.addMovie ? "active-tab-button" : "tab-button"}`}
            onClick={this.onAddMovieTab}
          >
            Add Movie
          </button>
          <button
            type="button"
            className={`${activeTab === updateConstants.deleteMovie ? "active-tab-button" : "tab-button"}`}
            onClick={this.onDeleteMovieTab}
          >
            Delete Movie
          </button>
          <button
            type="button"
            className={`${activeTab === updateConstants.editMovie ? "active-tab-button" : "tab-button"}`}
            onClick={this.onEditMovieTab}
          >
            Edit Movie
          </button>
        </div>
        {this.renderAddMovieForm()}
      </div>
    );
  }
}
export default Admin;
