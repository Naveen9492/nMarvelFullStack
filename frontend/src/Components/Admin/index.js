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
    editMovieId: "",
    editMovieFields: {
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
        editMovieFields: data[0],
        editMovieId: data[0].id,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  onAdminLogout = () => {
    Cookie.remove("adminToken");
    this.props.history.replace("/admin/login");
  };

  onAddMovieTab = () => {
    this.setState({ activeTab: updateConstants.addMovie });
  };

  onDeleteMovieTab = () => {
    this.setState({ activeTab: updateConstants.deleteMovie });
  };
  onEditMovieTab = () => {
    this.setState({ activeTab: updateConstants.editMovie });
    this.getMovieList();
  };

  onChangeMovieToEdit = (event) => {
    const { moviesList } = this.state;
    const movie = moviesList.find((eachMovie) =>
      eachMovie.id.includes(event.target.value),
    );
    this.setState({
      editMovieFields: movie,
      editMovieId: movie.id,
    });
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

  onChangeEditTitleInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        title: event.target.value,
      },
    }));
  };

  onChangeEditYearInput = (event) => {
    if (event.target.value !== "") {
      this.setState((prevState) => ({
        editMovieFields: {
          ...prevState.editMovieFields,
          year: parseInt(event.target.value),
        },
      }));
    }
  };

  onChangeEditPosterInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        posterImageUrl: event.target.value,
      },
    }));
  };

  onChangeEditBannerInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        bannerImageUrl: event.target.value,
      },
    }));
  };

  onChangeEditOverviewInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        overview: event.target.value,
      },
    }));
  };

  onChangeEditTrailerInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        trailerUrl: event.target.value,
      },
    }));
  };

  onChangeEditDirectorInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        director: event.target.value,
      },
    }));
  };

  onChangeEditWriterInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        writer: event.target.value,
      },
    }));
  };

  onChangeEditRunTimeInput = (event) => {
    if (event.target.value !== "") {
      this.setState((prevState) => ({
        editMovieFields: {
          ...prevState.editMovieFields,
          runTime: parseInt(event.target.value),
        },
      }));
    }
  };

  onChangeEditReleaseDateInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
        releaseDate: event.target.value,
      },
    }));
  };

  onChangeEditRatingInput = (event) => {
    this.setState((prevState) => ({
      editMovieFields: {
        ...prevState.editMovieFields,
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

  onSubmitEditMovieForm = async (event) => {
    event.preventDefault();
    const { editMovieFields, editMovieId } = this.state;
    const jwtToken = Cookie.get("adminToken");
    const editMovieURL = `https://nmarvelfullstack.onrender.com/movies/${editMovieId}`;
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editMovieFields),
    };
    try {
      const response = await fetch(editMovieURL, options);
      const data = await response.json();

      if (response.ok) {
        console.log(data);
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
          type="number"
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
          type="number"
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

  renderEditMovieForm = () => {
    const { moviesList, formMessage, editMovieFields, editMovieId } =
      this.state;

    const formatDateForInput = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`; // yyyy-MM-dd
    };

    return (
      <form
        className="add-movie-form-container"
        onSubmit={this.onSubmitEditMovieForm}
      >
        <label className="form-label" htmlFor="movie-id">
          Select Movie
        </label>
        <select
          value={editMovieId}
          id="movie-id"
          className="form-input-field"
          onChange={this.onChangeMovieToEdit}
        >
          {moviesList.map((eachMovie) => (
            <option key={eachMovie.id} value={eachMovie.id}>
              {eachMovie.title}
            </option>
          ))}
        </select>
        <h1 className="add-movie-heading">Edit Movie Details</h1>
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-input-field"
          value={editMovieFields.title}
          onChange={this.onChangeEditTitleInput}
        />
        <label className="form-label" htmlFor="year">
          Year
        </label>
        <input
          type="number"
          id="year"
          className="form-input-field"
          value={editMovieFields.year}
          onChange={this.onChangeEditYearInput}
        />
        <label className="form-label" htmlFor="poster-image">
          Poster Image URL
        </label>
        <input
          type="text"
          id="poster-image"
          className="form-input-field"
          value={editMovieFields.posterImageUrl}
          onChange={this.onChangeEditPosterInput}
        />
        <label className="form-label" htmlFor="banner-image">
          Banner Image URL
        </label>
        <input
          type="text"
          id="banner-image"
          className="form-input-field"
          value={editMovieFields.bannerImageUrl}
          onChange={this.onChangeEditBannerInput}
        />
        <label className="form-label" htmlFor="overview">
          Overview
        </label>
        <textarea
          id="overview"
          className="form-input-field"
          onChange={this.onChangeEditOverviewInput}
          rows="4"
          value={editMovieFields.overview}
        ></textarea>
        <label className="form-label" htmlFor="trailer">
          Trailer URL
        </label>
        <input
          type="text"
          id="trailer"
          className="form-input-field"
          value={editMovieFields.trailerUrl}
          onChange={this.onChangeEditTrailerInput}
        />
        <label className="form-label" htmlFor="director">
          Director
        </label>
        <input
          type="text"
          id="director"
          className="form-input-field"
          value={editMovieFields.director}
          onChange={this.onChangeEditDirectorInput}
        />
        <label className="form-label" htmlFor="writer">
          Writer
        </label>
        <input
          type="text"
          id="writer"
          className="form-input-field"
          value={editMovieFields.writer}
          onChange={this.onChangeEditWriterInput}
        />
        <label className="form-label" htmlFor="runtime">
          Runtime
        </label>
        <input
          type="number"
          id="runtime"
          className="form-input-field"
          value={editMovieFields.runTime}
          onChange={this.onChangeEditRunTimeInput}
        />
        <label className="form-label" htmlFor="release-date">
          Release date
        </label>
        <input
          type="date"
          id="release-date"
          className="form-input-field"
          value={formatDateForInput(editMovieFields.releaseDate)}
          onChange={this.onChangeEditReleaseDateInput}
        />
        <label className="form-label" htmlFor="rating">
          Rating
        </label>
        <input
          type="text"
          id="rating"
          className="form-input-field"
          value={editMovieFields.rating}
          onChange={this.onChangeEditRatingInput}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        {formMessage !== "" && <p className="form-message">{formMessage}</p>}
      </form>
    );
  };

  renderFinalView = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case updateConstants.addMovie:
        return this.renderAddMovieForm();
      case updateConstants.editMovie:
        return this.renderEditMovieForm();
      default:
        return null;
    }
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="admin-container">
        <div className="heading-logout-container">
          <h1 className="admin-page-heading">Welcome to Admin Page</h1>
          <button
            type="button"
            className="logout-button"
            onClick={this.onAdminLogout}
          >
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
        {this.renderFinalView()}
      </div>
    );
  }
}
export default Admin;
