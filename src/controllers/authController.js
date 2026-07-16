import { HTTP_STATUS } from "../constants/statusCodes.js";
import register from "../services/authService.js";
import catchAsync from "../utils/catchAsync.js";

async function registerUser(req, res) {
  let {username, password} = req?.body;

  let newUser = await register(username, password);

  return res.status(HTTP_STATUS.CREATED).json({message: "User created successfully!", user: newUser});
}

export default catchAsync(registerUser);
