"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currentUser_router_1 = __importDefault(require("./currentUser/currentUser.router"));
const emailList_router_1 = __importDefault(require("./emailList/emailList.router"));
const googleAuth_router_1 = __importDefault(require("./googleAuth/googleAuth.router"));
const groupList_router_1 = __importDefault(require("./groupList/groupList.router"));
const api = (0, express_1.Router)();
api.use("/currentUser", currentUser_router_1.default);
api.use("/emailList", emailList_router_1.default);
api.use("/groupList", groupList_router_1.default);
api.use("/google", googleAuth_router_1.default);
exports.default = api;
//# sourceMappingURL=api.js.map