import { JWT_SECRET } from "../config/index.js";
import { HTTP_STATUS } from "../constants/statusCodes.js";
import authService from "../services/authService.js";
import catchAsync from "../utils/catchAsync.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function registerUser(req, res) {
  let {username, password} = req.body;
  let newUser = await authService.register(username, password);

  return res.status(HTTP_STATUS.CREATED).json({message: "User created successfully!", data: newUser});
};

async function loginUser(req, res) {
  let {username, password} = req.body;
  let existingUser = await authService.login(username);

  let isMatch = await bcrypt.compare(password, existingUser.password);

  if (isMatch) {
    let token = jwt.sign({username, id: existingUser.id}, JWT_SECRET, {expiresIn: "7d"});
    res.status(HTTP_STATUS.OK).json({success: true, message: "Authenication successful!", token});
  };

  return res.status(HTTP_STATUS.UNAUTHORIZED).json({message: "Password does not match your real password."});
};

export default {
  register: catchAsync(registerUser),
  login: catchAsync(loginUser)
};
