import User from "../models/User.js";
import bcrypt from "bcrypt";

async function register(username, password) {
  let passwordHash = await bcrypt.hash(password, 10);
  return await User.create({username, passwordHash});
}

export default register;
