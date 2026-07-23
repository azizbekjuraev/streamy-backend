import videoController from "../controllers/videoController.js";
import validate from "../validators/validate.js";
import videoValidator from "../validators/videoValidator.js";

let videoRouter = (server) => {
  server.post("/videos", videoValidator.createValidationRules, validate, videoController.create);
  server.get("/videos", videoController.read),
  server.put("/videos/:id", videoValidator.updateValidationRules, validate, videoController.update);
  server.delete("/videos/:id", videoController.delete),
  server.post("/videos/:id/like", videoController.toggleLikeVideo)
};

export default videoRouter;
