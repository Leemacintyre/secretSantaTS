import { Router } from "express";
import {
    httpGetAllEmailList,
    httpCreateEmailList,
    httpSendEmailList,
} from "./emailList.controller";

const emailListRouter = Router();

emailListRouter.get("/", httpGetAllEmailList);
emailListRouter.post("/createEmailList", httpCreateEmailList);
// emailListRouter.get("/", () => console.log("test"));
emailListRouter.get("/sendNewEmail", httpSendEmailList);

export default emailListRouter;
