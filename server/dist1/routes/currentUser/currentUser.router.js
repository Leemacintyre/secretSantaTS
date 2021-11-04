"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const currentUser_controller_1 = require("./currentUser.controller");
const currentUserRouter = express_1.default.Router();
//
currentUserRouter.get("/", currentUser_controller_1.httpGetCurrentUser);
// (req, res) => {
//     res.send(req.user);}
exports.default = currentUserRouter;
//# sourceMappingURL=currentUser.router.js.map