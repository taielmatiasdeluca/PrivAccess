const User = require("../models/userModel");
const Neighbourhood = require("../models/neightbourhoodModel");

const createNeightbourhood = async (req, res) => {
  try {
    if (!("name" in req.body)) {
      res.status(400).json({ message: "Name is required" });
      return;
    }
    const userId = await User.getIdFromHash(req.user.hash);
    if (!userId) {
      res.status(401).json({ message: "Usuario no encontrado" });
      return;
    }
    const neightbourhoodId = await Neighbourhood.create(userId, req.body);
    res
      .status(201)
      .json({ message: "Neightbourhood created", neightbourhoodId });
  } catch (error) {
    res.status(500).json({ message: "Error creating neightbourhood", error });
  }
};

const getUserNeighbourhoods = async (req, res) => {
  try {
    const userId = await User.getIdFromHash(req.user.hash);
    if (!userId) {
      res.status(401).json({ message: "Usuario no encontrado" });
      return;
    }
    const neighbourhoods = await Neighbourhood.getUserNeighbourhoods(userId);
    res.status(200).json(neighbourhoods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching neighbourhoods", error });
  }
};

module.exports = { createNeightbourhood, getUserNeighbourhoods };
