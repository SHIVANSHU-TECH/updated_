const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const protect = async (req, res, next) => {
  try {
    // console.log(req.headers);
    if (!req.headers.authorization) {
      return res.status(400).json({ error: "Authorization token not found" });
    }
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);/
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decodedToken);
    const user = await User.findById(decodedToken.id);
    // console.log(user);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    // console.log(req);
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Invalid credentials", error: error.stack });
  }
};
module.exports = protect;
