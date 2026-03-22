import { Route, Switch } from "react-router-dom";
import Home from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import NavBar from "./Components/NavBar";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movies/:id" component={MovieDetailsPage} />
      </Switch>
    </>
  );
};

export default App;
