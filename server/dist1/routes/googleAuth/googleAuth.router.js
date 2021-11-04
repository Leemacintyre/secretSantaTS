"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const googleAuthFlow_1 = require("../../middleware/googleAuthFlow");
const googleAuth_controller_1 = require("./googleAuth.controller");
const googleAuthRouter = express_1.default.Router();
googleAuthRouter.get("/auth/google", (0, googleAuthFlow_1.signInWithGoogleStart)());
googleAuthRouter.get("/auth/google/callback", (0, googleAuthFlow_1.signInWithGoogleCallback)());
googleAuthRouter.get("/logout", (req, res) => {
    req.logOut();
    (0, googleAuth_controller_1.redirectToHome)(req, res);
    // res.json(undefined);
});
googleAuthRouter.get("/checklog", (req, res) => {
    console.log(process.env);
    return res.send("confirmed");
});
googleAuthRouter.get("/failure", (req, res) => {
    console.log("failed google called us back");
});
exports.default = googleAuthRouter;
//# sourceMappingURL=googleAuth.router.js.map