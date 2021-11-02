import express from "express";
import { httpGetCurrentUser } from "./currentUser.controller";

const currentUserRouter = express.Router();
//
currentUserRouter.get("/", httpGetCurrentUser);
// (req, res) => {
//     res.send(req.user);}
export default currentUserRouter;
