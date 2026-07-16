import { HTTP_STATUS } from "../constants/statusCodes.js";

function validatePassword(password) {
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  
  if (!passwordRegex.test(password)) {
    let error = new Error("Password must contain at least one letter, one number, and one special character.")
    error.status = HTTP_STATUS.BAD_REQUEST;
    throw error; 
  }
}

export default validatePassword;
