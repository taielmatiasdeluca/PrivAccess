const express = require("express");
const router = express.Router();
const ownerController = require("../controllers/ownerController");
const authenticateJWT = require("../middlewares/jwtMiddleware");
// public routes

router.use(authenticateJWT(["user", "admin"]));
// private routes
router.get("/", ownerController.getAllOwners);
router.post("/", ownerController.createOwner);

module.exports = router;
