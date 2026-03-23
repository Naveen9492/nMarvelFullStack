import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/HomePage";
import MoviesPage from "./Components/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import AdminLogin from "./Components/AdminLogin";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Components/NotFound";
import Admin from "./Components/Admin";
import NavBar from "./Components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="whole-container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/movies/:id" component={MovieDetailsPage} />
        <Route exact path="/admin/login" component={AdminLogin} />
        <ProtectedRoute exact path="/admin" component={Admin} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
