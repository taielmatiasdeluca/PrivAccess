const db = require("../config/db");

const Owner = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM owners");
    return rows;
  },

  create: async (ownerData) => {
    const { name, email, phone, street } = ownerData;
    const [result] = await db.query(
      "INSERT INTO users (name, email, phone, street) VALUES (?, ?, ?, ?)",
      [name, email, phone, street]
    );
    return result.insertId;
  },
};

module.exports = Owner;
