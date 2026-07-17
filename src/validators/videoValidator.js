import { body } from "express-validator";
import db from "../config/db.js";

let createValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .isLength({min: 5}).withMessage("Video name must be at least 5 characters long"),
  
  body("videoUrl")
    .notEmpty()
    .withMessage("Video url must be provided")
    .custom(async (videoUrl, {req}) => {
      let videoExist = await db("videos")
        .where({video_url: videoUrl, user_id: req?.body.userId})
        .first();

      if (videoExist) {
        throw new Error("A video with this url already exists")
      }
      return true;
    })
]

let updateValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .isLength({min: 5}).withMessage("Video name must be at least 5 characters long"),
]

export default {
  createValidationRules,
  updateValidationRules
}
