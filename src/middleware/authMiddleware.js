import jwt from "jsonwebtoken";
import { HTTP_STATUS } from "../constants/statusCodes";
import { JWT_SECRET } from "../config/index.js";

let authenticateToken = (req, res, next) => {
  let authHeader = req?.headers["authorization"];

  let token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({message: "Access denied. Token missing."});
  }

  jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({message: "Invalid or expired token."});
    }

    req.user = decodedUser;
    next();
  });
}

export default authenticateToken;
