const express = require("express");

//CONFIG
const db = require("./config/db");
const cors = require("./config/cors");

const bodyParser = require("body-parser");

// MIDDLEWARES
const apiLimiter = require("./middlewares/rateLimitMiddleware");
const authenticateJWT = require("./middlewares/jwtMiddleware");
const authorizeRoles = require("./middlewares/rolesMiddleware");

// ROUTES
const ownerRoutes = require("./routes/ownerRoutes");
const userRoutes = require("./routes/userRoutes");
const neightbourhoodRoutes = require("./routes/neightbourhoodRoutes");

//Permite acceder a las variables de entorno desde todo el servicio
require("dotenv").config();

const app = express();
app.use(apiLimiter);
app.use(cors);

app.use(bodyParser.json());
app.use("/api/owners", ownerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/neighbourhood", neightbourhoodRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

module.exports = app;
