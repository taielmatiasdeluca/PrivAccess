const crypto = require("crypto");
const { register } = require("module");
const bcrypt = require("bcryptjs");
const db = require("../config/db");
const jwt = require("jsonwebtoken");

const User = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM owners");
    return rows;
  },

  login: async (userData) => {
    const { email, password } = userData;
    // encrypt password with md5
    md5_password = crypto.createHash("md5").update(password).digest("hex");

    // Search for user in database
    const [rows] = await db.query(
      `SELECT hash, role
      FROM users 
      INNER JOIN roles ON users.idRole = roles.id
      WHERE email = ? AND password = ? limit 1`,
      [email, md5_password]
    );
    // didnt find user
    if (rows.length === 0) {
      throw new Error("Invalid email or password");
    }
    const { hash, role } = rows[0];

    //New token for user
    const token = jwt.sign(
      {
        hash: hash, // El ID del usuario
        role: role, // El rol del usuario
      },
      process.env.JWT_SECRET, // La clave secreta para firmar el token (en .env)
      { expiresIn: "1h" } // Expiración del token (por ejemplo, 1 hora)
    );
    return { token, user: rows[0] };
  },

  register: async (userData) => {
    const { email, password } = userData;
    const [rows] = await db.query(
      "SELECT id FROM users WHERE email = ? limit 1",
      [email]
    );
    if (rows.length > 0) {
      throw new Error("Email already exists");
    }

    //TODO EMAIL CONFIRMATION
    // encrypt password with md5

    const md5_password = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");

    const random_hash = crypto.randomBytes(16).toString("hex");
    const action_token = crypto.randomBytes(16).toString("hex");

    const [result] = await db.query(
      "INSERT INTO users (email,password,hash,action_token) VALUES (?,?,?,?)",
      [email, md5_password, random_hash, action_token]
    );
    return result.insertId;
  },
};

module.exports = User;
