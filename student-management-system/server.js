// server.js

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json()); // Parse JSON payloads

// Routes (We'll define routes later)
app.get("/", (req, res) => res.send("API is running"));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
