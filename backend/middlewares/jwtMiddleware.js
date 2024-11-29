// middlewares/authenticateJWT.js
const jwt = require("jsonwebtoken");

const authenticateJWT = (roles = []) => {
  return (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    // Prevents users without jwt
    if (!token) {
      return res.status(403).json({ message: "Access Denied" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      // Malformed, expired or invalid token
      if (err) {
        return res.status(403).json({ message: "Access Denied" });
      }
      // Gets user role from the token
      const userRole = user?.role;
      // Checks if the user has the required role
      if (roles.length > 0 && !roles.includes(userRole)) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient Permissions" });
      }
      // Ads user data to red, for future use
      req.user = user;
      next();
    });
  };
};

module.exports = authenticateJWT;
