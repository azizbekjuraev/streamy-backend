import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config/index.js";
import globalErrorHandling from "./middleware/errorMiddleware.js";
import Router from "./routes/index.js";

let server = express();

server.use(cors());
server.disable("x-powered-by");
server.use(cookieParser());
server.use(express.urlencoded({extended: true}));
server.use(express.json());

Router(server);
server.use(globalErrorHandling);

server.listen(PORT, () => 
  console.log(`Server running on http://localhost:${PORT}`));

