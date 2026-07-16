import { body } from "express-validator";
import db from "../config/db.js";

let registerValidationRules = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({min: 3}).withMessage("Username must be at least 3 characters long")
    .custom(async (usernameValue) => {
      let userExists = await db("users")
        .where({username: usernameValue})
        .first();

      if (userExists) {
        throw new Error("Username is already taken");
      }
      return true;
    }),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({min: 6}).withMessage("Password must be at least 6 characters long")
]

export default registerValidationRules;
