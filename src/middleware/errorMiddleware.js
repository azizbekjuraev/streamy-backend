import { HTTP_STATUS } from "../constants/statusCodes.js";

let globalErrorHandling = (err, req, res, next) => {
  let statusCode = err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  let message = err.message || "Internal service error";

  if (statusCode === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
    console.error("CRITICAL ERROR:", err.stack || err);
  };

  return res.status(statusCode).json({message});
} 

export default globalErrorHandling;

