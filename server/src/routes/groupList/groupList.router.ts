import { Router } from "express";
import { httpGetAllGroupList } from "./groupList.controller";

const groupListRouter = Router();

groupListRouter.get("/", httpGetAllGroupList);

export default groupListRouter;
