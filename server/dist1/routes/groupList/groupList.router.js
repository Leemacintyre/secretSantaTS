"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const groupList_controller_1 = require("./groupList.controller");
const groupListRouter = (0, express_1.Router)();
groupListRouter.get("/", groupList_controller_1.httpGetAllGroupList);
exports.default = groupListRouter;
//# sourceMappingURL=groupList.router.js.map