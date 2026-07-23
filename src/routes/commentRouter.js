import commentController from "../controllers/commentController.js";

let commentRouter = (server) => {
  server.post("/comments", commentController.create),
  server.put("/comments/:id", commentController.update),
  server.delete("/comments/:id", commentController.delete),
  server.post("/comments/:id/like", commentController.toggleLikeComment)
};

export default commentRouter;
