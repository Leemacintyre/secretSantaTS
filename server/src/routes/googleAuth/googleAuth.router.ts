import express from "express";

import {
    signInWithGoogleStart,
    signInWithGoogleCallback,
} from "../../middleware/googleAuthFlow";
import { redirectToHome } from "./googleAuth.controller";

const googleAuthRouter = express.Router();

googleAuthRouter.get("/auth/google", signInWithGoogleStart());

googleAuthRouter.get("/auth/google/callback", signInWithGoogleCallback());

googleAuthRouter.get("/logout", (req, res) => {
    req.logOut();
    redirectToHome(req, res);
    // res.json(undefined);
});

googleAuthRouter.get("/checklog", (req, res) => {
    console.log(process.env);
    return res.send("confirmed");
});

googleAuthRouter.get("/failure", (req, res) => {
    console.log("failed google called us back");
});

export default googleAuthRouter;
