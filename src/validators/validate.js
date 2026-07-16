import { validationResult } from "express-validator";
import { HTTP_STATUS } from "../constants/statusCodes.js";

let validate = (req, res, next) => {
  let errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  let errorMessages = errors.array().map(err => err.msg).join(", ");
  let customError = new Error(errorMessages);
  customError.status = HTTP_STATUS.BAD_REQUEST;

  return next(customError);
}

export default validate;
