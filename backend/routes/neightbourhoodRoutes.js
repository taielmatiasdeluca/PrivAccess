const express = require("express");
const router = express.Router();

const neightbourhoodController = require("../controllers/neightbourhoodController");
const authenticateJWT = require("../middlewares/jwtMiddleware");

// public routes
router.use(authenticateJWT(["admin"]));
// private routes
router.post("/", neightbourhoodController.createNeightbourhood);
router.get("/", neightbourhoodController.getUserNeighbourhoods);

module.exports = router;
