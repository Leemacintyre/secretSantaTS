import { Router } from "express";

import currentUserRouter from "./currentUser/currentUser.router";
import emailListRouter from "./emailList/emailList.router";
import googleAuthRouter from "./googleAuth/googleAuth.router";
import groupListRouter from "./groupList/groupList.router";

const api = Router();

api.use("/currentUser", currentUserRouter);
api.use("/emailList", emailListRouter);
api.use("/groupList", groupListRouter);
api.use("/google", googleAuthRouter);

export default api;
