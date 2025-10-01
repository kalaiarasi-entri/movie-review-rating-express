const jwt = require("jsonwebtoken");
const secretKey = "kalaimoviereviewapp"

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decryptedToken = jwt.verify(token, secretKey);
    req.userId = decryptedToken.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message, success: false });
  }
};
