import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./index.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <Link to="/" className="nav-item-link">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
          alt="navbar-logo"
          className="logo-image"
        />
      </Link>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        {!open ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </div>

      <div className={`navbar-menu-item-container ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)} className="nav-item-link">
          <p className="navbar-menu-item">HOME</p>
        </Link>
        <Link
          to="/movies"
          onClick={() => setOpen(false)}
          className="nav-item-link"
        >
          <p className="navbar-menu-item">MOVIES</p>
        </Link>
        <Link
          to="/comics"
          onClick={() => setOpen(false)}
          className="nav-item-link"
        >
          <p className="navbar-menu-item">COMICS</p>
        </Link>
        <Link
          to="/characters"
          onClick={() => setOpen(false)}
          className="nav-item-link"
        >
          <p className="navbar-menu-item">CHARACTERS</p>
        </Link>
        <Link
          to="/tvshows"
          onClick={() => setOpen(false)}
          className="nav-item-link"
        >
          <p className="navbar-menu-item">TV SHOWS</p>
        </Link>
        <Link
          to="/videos"
          onClick={() => setOpen(false)}
          className="nav-item-link"
        >
          <p className="navbar-menu-item">VIDEOS</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
