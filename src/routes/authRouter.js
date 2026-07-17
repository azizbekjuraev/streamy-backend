import authValidator from "../validators/authValidator.js";
import validate from "../validators/validate.js";
import authController from "../controllers/authController.js";

let authRouter = (server) => {
  server.post("/register", authValidator.registerValidationRules, validate, authController.register);
  server.get("/login", authValidator.loginValidationRules, validate, authController.login);
};

export default authRouter;
