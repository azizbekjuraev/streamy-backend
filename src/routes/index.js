import welcomeRouter from "./welcomeRouter.js";
import authRouter from "./authRouter.js";

let Router = (server) => {
  welcomeRouter(server);
  authRouter(server);
}

export default Router;
