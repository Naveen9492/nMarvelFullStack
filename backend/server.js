const express = require("express");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ===================== CONFIG =====================
const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwtkey";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

// PostgreSQL connection
const pool = new Pool({
  host: "db.ngqerdhahsnujuctrrzu.supabase.co",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: process.env.DB_PASSWORD, // move password to env
  ssl: { rejectUnauthorized: false },
});

// ===================== INIT DB =====================
const initializeDBAndServer = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS movies (
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
      );
    `);

    console.log("Database connected & tables ready");
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  } catch (err) {
    console.log("DB Error:", err.message);
    process.exit(1);
  }
};

initializeDBAndServer();

// ===================== AUTH MIDDLEWARE =====================
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ===================== LOGIN =====================
app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, {
      expiresIn: "2h",
    });

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid username or password" });
});

// ===================== MOVIES =====================

// GET ALL MOVIES
app.get("/movies", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM movies ORDER BY releaseDate ASC",
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET MOVIE BY ID
app.get("/movies/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM movies WHERE id = $1", [
      req.params.id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD MOVIE
app.post("/movies", authenticateAdmin, async (req, res) => {
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
      releaseDate,
      rating,
    } = req.body;

    const id = uuidv4();

    const formattedDate = releaseDate
      ? new Date(releaseDate).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : null;

    const result = await pool.query(
      `INSERT INTO movies 
      (id, title, year, posterImageUrl, bannerImageUrl, overview, trailerUrl, director, writer, runTime, releaseDate, rating)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING *`,
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
        formattedDate,
        rating,
      ],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Failed to add movie" });
  }
});

// UPDATE MOVIE
app.put("/movies/:id", authenticateAdmin, async (req, res) => {
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
      releaseDate,
      rating,
    } = req.body;

    const formattedDate = releaseDate
      ? new Date(releaseDate).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : null;

    const result = await pool.query(
      `UPDATE movies SET
        title=$1,
        year=$2,
        posterImageUrl=$3,
        bannerImageUrl=$4,
        overview=$5,
        trailerUrl=$6,
        director=$7,
        writer=$8,
        runTime=$9,
        releaseDate=$10,
        rating=$11
      WHERE id=$12
      RETURNING *`,
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
        formattedDate,
        rating,
        req.params.id,
      ],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE MOVIE
app.delete("/movies/:id", authenticateAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM movies WHERE id = $1 RETURNING *",
      [req.params.id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE ALL MOVIES
app.delete("/movies/all", authenticateAdmin, async (req, res) => {
  try {
    await pool.query("DELETE FROM movies");
    res.json({ message: "All movies deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
