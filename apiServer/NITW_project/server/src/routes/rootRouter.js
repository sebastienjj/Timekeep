import express from "express";
import countyRouter from "./api/v1/countyRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);


rootRouter.use("/api/v1/countyTable",countyRouter)


export default rootRouter;
