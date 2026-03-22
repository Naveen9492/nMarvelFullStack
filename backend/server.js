// backend/server.js

const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "app.db");
let db = null;

// Hardcoded secret (no .env)
const JWT_SECRET = "supersecretjwtkey"; // ⚠️ don't expose in production

// Example admin credentials (can later move to DB)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

// --- Initialize DB and Server ---
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    // --- Create tables if not exist ---
    await db.run(`CREATE TABLE IF NOT EXISTS movies (
      id TEXT PRIMARY KEY,
      title TEXT,
      year INTEGER,
      posterImageUrl TEXT,
      bannerImageUrl TEXT,
      overview TEXT,
      trailerUrl TEXT,
      director TEXT,
      writer TEXT,
      runTime INTEGER,
      releaseDate TEXT,
      rating TEXT
    )`);

    await db.run(`CREATE TABLE IF NOT EXISTS comics (
      id TEXT PRIMARY KEY,
      title TEXT,
      issue_number INTEGER,
      year INTEGER,
      author TEXT,
      description TEXT
    )`);

    await db.run(`CREATE TABLE IF NOT EXISTS characters (
      id TEXT PRIMARY KEY,
      name TEXT,
      alias TEXT,
      first_appearance TEXT,
      description TEXT
    )`);

    await db.run(`CREATE TABLE IF NOT EXISTS tv_shows (
      id TEXT PRIMARY KEY,
      title TEXT,
      seasons INTEGER,
      episodes INTEGER,
      year INTEGER,
      genre TEXT,
      description TEXT
    )`);

    await db.run(`CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY,
      title TEXT,
      type TEXT,
      url TEXT,
      description TEXT,
      movie_id TEXT,
      tv_show_id TEXT
    )`);

    await db.run(`CREATE TABLE IF NOT EXISTS movie_characters (
      movie_id TEXT,
      character_id TEXT,
      PRIMARY KEY (movie_id, character_id),
      FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
      FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
    )`);

    await db.run(`CREATE TABLE IF NOT EXISTS comic_characters (
      comic_id TEXT,
      character_id TEXT,
      PRIMARY KEY (comic_id, character_id),
      FOREIGN KEY (comic_id) REFERENCES comics(id) ON DELETE CASCADE,
      FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
    )`);

    // --- Start server ---
    app.listen(5000, () => {
      console.log("Server Running at http://localhost:5000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

//middleware

const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // "Bearer <token>"
  if (!authHeader) return res.status(401).json({ message: "Missing token" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Missing token" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    req.user = decoded; // attach decoded info
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Admin login route
app.post("/admin/login", (req, res) => {
  const { username, password } = req.body; // username & password from UI

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  // Validate credentials
  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    // Generate JWT token
    const token = jwt.sign(
      { username, role: "admin" }, // payload
      JWT_SECRET, // secret
      { expiresIn: "2h" }, // token valid for 2 hours
    );

    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid username or password" });
  }
});

// --- Movies Routes (CRUD) ---

// --- 1. Delete All Movies Route ---
app.delete("/movies/all", async (req, res) => {
  try {
    await db.run("DELETE FROM movies");
    res.json({ message: "All movies deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all movies sorted by release date (ascending)
app.get("/movies", async (req, res) => {
  try {
    const movies = await db.all("SELECT * FROM movies");

    // Convert releaseDate strings to Date objects and sort
    const sortedMovies = movies.sort((a, b) => {
      const dateA = new Date(a.releaseDate); // e.g., "November 4, 2016"
      const dateB = new Date(b.releaseDate);
      return dateA - dateB; // ascending order
    });

    res.json(sortedMovies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single movie by ID
app.get("/movies/:id", async (req, res) => {
  try {
    const movie = await db.get("SELECT * FROM movies WHERE id = ?", [
      req.params.id,
    ]);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new movie
app.post("/movies", async (req, res) => {
  try {
    const {
      title,
      year,
      posterImageUrl,
      bannerImageUrl,
      overview,
      trailerUrl,
      director,
      writer,
      runTime,
      releaseDate, // expects "YYYY-MM-DD"
      rating,
    } = req.body;

    const id = uuidv4();

    // Optionally convert date to "Month Day, Year" for display
    const displayDate = new Date(releaseDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    await db.run(
      `INSERT INTO movies 
       (id, title, year, posterImageUrl, bannerImageUrl, overview, trailerUrl, director, writer, runTime, releaseDate, rating)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        title,
        year,
        posterImageUrl,
        bannerImageUrl,
        overview,
        trailerUrl,
        director,
        writer,
        runTime,
        displayDate, // store in readable format
        rating,
      ],
    );

    res.status(201).json({ id, ...req.body, releaseDate: displayDate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Update a movie
app.put("/movies/:id", async (req, res) => {
  try {
    const {
      title,
      year,
      posterImageUrl,
      bannerImageUrl,
      overview,
      trailerUrl,
      director,
      writer,
      runTime,
      releaseDate, // expects "YYYY-MM-DD"
      rating,
    } = req.body;

    const displayDate = new Date(releaseDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const result = await db.run(
      `UPDATE movies
       SET title=?, year=?, posterImageUrl=?, bannerImageUrl=?, overview=?, trailerUrl=?, director=?, writer=?, runTime=?, releaseDate=?, rating=?
       WHERE id=?`,
      [
        title,
        year,
        posterImageUrl,
        bannerImageUrl,
        overview,
        trailerUrl,
        director,
        writer,
        runTime,
        displayDate,
        rating,
        req.params.id,
      ],
    );

    if (result.changes === 0)
      return res.status(404).json({ message: "Movie not found" });

    res.json({ id: req.params.id, ...req.body, releaseDate: displayDate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a movie
app.delete("/movies/:id", async (req, res) => {
  try {
    const result = await db.run("DELETE FROM movies WHERE id = ?", [
      req.params.id,
    ]);
    if (result.changes === 0)
      return res.status(404).json({ message: "Movie not found" });

    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TODO: Repeat same async/await CRUD pattern for comics, characters, tv_shows, videos
// Also add endpoints to link characters to movies/comics
