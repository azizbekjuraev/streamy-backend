import welcomeRouter from "./welcomeRouter.js";
import authRouter from "./authRouter.js";
import videoRouter from "./videoRouter.js";

let Router = (server) => {
  welcomeRouter(server);
  authRouter(server);
  videoRouter(server);
}

export default Router;
