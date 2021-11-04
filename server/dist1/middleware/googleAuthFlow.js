"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInWithGoogleCallback = exports.signInWithGoogleStart = void 0;
const passport_1 = __importDefault(require("passport"));
function signInWithGoogleStart() {
    return passport_1.default.authenticate("google", {
        scope: ["email", "profile"],
    });
}
exports.signInWithGoogleStart = signInWithGoogleStart;
// if (process.env.NODE_ENV === "production") {}
function signInWithGoogleCallback() {
    return passport_1.default.authenticate("google", {
        failureRedirect: "/failure",
        successRedirect: "http://localhost:3000/",
        session: true,
    });
}
exports.signInWithGoogleCallback = signInWithGoogleCallback;
//# sourceMappingURL=googleAuthFlow.js.map