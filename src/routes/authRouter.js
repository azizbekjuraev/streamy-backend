import registerValidationRules from "../validators/authValidator.js"
import validate from "../validators/validate.js"
import registerUser from "../controllers/authController.js";

let authRouter = (server) => {
  server.post("/register", registerValidationRules, validate, registerUser)
}

export default authRouter;
