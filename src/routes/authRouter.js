import authValidator from "../validators/authValidator.js"
import validate from "../validators/validate.js"
import ac from "../controllers/authController.js";

let authRouter = (server) => {
  server.post("/register", authValidator.registerValidationRules, validate, ac.register);
  server.get("/login", authValidator.loginValidationRules, validate, ac.login);
}

export default authRouter;
