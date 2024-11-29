const Owner = require("../models/ownerModel");

const getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.getAll();
    res.status(200).json(owners);
  } catch (error) {
    res.status(500).json({ message: "Error fetching owners", error });
  }
};

const createOwner = async (req, res) => {
  try {
    const ownerId = await Owner.create(req.body);
    res.status(201).json({ message: "Owner created", ownerId });
  } catch (error) {
    res.status(500).json({ message: "Error creating owner", error });
  }
};

module.exports = { getAllOwners, createOwner };
