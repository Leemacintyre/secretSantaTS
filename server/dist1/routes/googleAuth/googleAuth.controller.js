"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToLogin = exports.redirectToHome = exports.googleCallback = void 0;
function googleCallback(req, res) {
    return console.log("google called us back");
}
exports.googleCallback = googleCallback;
function redirectToHome(req, res) {
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === "production") {
    //     return res.redirect("");
    // }
    return res.redirect("http://localhost:3000");
}
exports.redirectToHome = redirectToHome;
function redirectToLogin(req, res) {
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === "production") {
    //     return res.redirect("");
    // }
    return res.redirect("http://localhost:3000/login");
}
exports.redirectToLogin = redirectToLogin;
//# sourceMappingURL=googleAuth.controller.js.map