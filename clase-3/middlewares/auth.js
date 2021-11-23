const { decodeToken } = require("../services/auth");

const securedUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = decodeToken(authorization);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "inauthorized" });
  }
};

module.exports = { securedUser };
