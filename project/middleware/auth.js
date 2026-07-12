const jwt = require("jsonwebtoken");
require("dotenv").config()
const authMiddleware = (req, res, next) => {
  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token"
    });
  }
};

module.exports = {authMiddleware};