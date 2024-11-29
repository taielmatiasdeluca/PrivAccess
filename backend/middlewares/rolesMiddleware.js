const authorizeRoles = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role; // Suponiendo que el rol está en `req.user.role`
    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient Permissions" });
    }
    next();
  };
};

module.exports = authorizeRoles;
