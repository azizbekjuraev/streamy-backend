import { HTTP_STATUS } from "../constants/statusCodes.js";
import catchAsync from "../utils/catchAsync.js";

let welcomeRouter = (server) => {
  server.get("/", catchAsync(async (req, res) => {
      return res.status(HTTP_STATUS.CREATED).json({
        status: "success",
        data: [],
        message: "Welcome to the API homepage!",
      });
  }));
}

export default welcomeRouter;
