"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailList_controller_1 = require("./emailList.controller");
const emailListRouter = (0, express_1.Router)();
emailListRouter.get("/", emailList_controller_1.httpGetAllEmailList);
emailListRouter.post("/createEmailList", emailList_controller_1.httpCreateEmailList);
// emailListRouter.get("/", () => console.log("test"));
emailListRouter.get("/sendNewEmail", emailList_controller_1.httpSendEmailList);
exports.default = emailListRouter;
//# sourceMappingURL=emailList.router.js.map