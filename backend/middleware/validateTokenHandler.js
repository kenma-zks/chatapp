import jwt from "jsonwebtoken";

const validateToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Invalid token" });
      }
      req.user = decoded.user;
      next();
    });
  }
  if (!token) {
    res.status(401).json({ message: "Not authorized" });
  }
};

export default validateToken;
