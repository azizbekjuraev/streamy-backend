import welcomeRouter from "./welcomeRouter.js";
import authRouter from "./authRouter.js";
import videoRouter from "./videoRouter.js";
import subscriberRouter from "./subscriberRouter.js";

let Router = (server) => {
  welcomeRouter(server);
  authRouter(server);
  videoRouter(server);
  subscriberRouter(server);
}

export default Router;
