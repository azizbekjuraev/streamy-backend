import subscriberController from "../controllers/subscriberController.js";

let subscriberRouter = (server) => {
  server.post("/subscribers", subscriberController.create);
  server.delete("/subscribers/:id", subscriberController.delete);
};

export default subscriberRouter;
