const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./modules/auth/auth.routes");

app.use(express.json());

// prefijo API
app.use("/api/auth", authRoutes);

module.exports = app;
