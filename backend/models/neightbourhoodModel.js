const User = require("../models/userModel");
const crypto = require("crypto");
const db = require("../config/db");

const Neightbourhood = {
  create: async (userId, NeightbourhoodData) => {
    // Get name and generate hash for neightourhood
    const { name } = NeightbourhoodData;
    const random_hash = crypto.randomBytes(16).toString("hex");
    try {
      //Create neightbourhood
      const [result] = await db.query(
        "INSERT INTO `neighbourhoods` (`hash`, `name`) VALUES (?, ?) ",
        [random_hash, name]
      );
      if (result) {
        // Add permision to admin for the neightbourhood
        const [permsResult] = await db.query(
          "INSERT INTO `neighbourhoodsXUsers` (`idNeighbourhood`, `idUser`) VALUES (?,?) ",
          [result.insertId, userId]
        );
        if (permsResult) {
          return permsResult.insertId;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  },

  getUserNeighbourhoods: async (userId) => {
    const [rows] = await db.query(
      `SELECT 
      name , hash
      FROM neighbourhoods INNER JOIN neighbourhoodsXUsers on neighbourhoodsXUsers.idNeighbourhood = neighbourhoods.id 
      where neighbourhoodsXUsers.idUser = ?`,
      [userId]
    );
    return rows;
  },
};

module.exports = Neightbourhood;
