"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSendEmailList = exports.httpCreateEmailList = exports.httpGetAllEmailList = void 0;
const emailList_model_1 = require("../../models/emailList/emailList.model");
function httpGetAllEmailList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("httpGetAllEmailList");
            const firstName = yield req.user.fName;
            const lastName = yield req.user.lName;
            const currentUser = `${firstName}${lastName}`;
            return res.status(200).json(yield (0, emailList_model_1.getAllEmailList)(currentUser));
        }
        catch (error) {
            return res
                .status(400)
                .json({ error: error, location: "httpGetAllEmailList" });
        }
    });
}
exports.httpGetAllEmailList = httpGetAllEmailList;
function httpCreateEmailList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("httpCreateEmailList");
            return res.status(201).json(yield (0, emailList_model_1.createEmailList)(req, res));
        }
        catch (error) {
            return res
                .status(400)
                .json({ error: error, location: "httpCreateEmailList" });
        }
    });
}
exports.httpCreateEmailList = httpCreateEmailList;
function httpSendEmailList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("httpSendEmailList");
            const firstName = yield req.user.fName;
            const lastName = yield req.user.lName;
            const currentUser = `${firstName}${lastName}`;
            return res.status(201).json(yield (0, emailList_model_1.sendEmailList)(currentUser));
        }
        catch (error) {
            return res
                .status(400)
                .json({ error: error, location: "httpSendEmailList" });
        }
    });
}
exports.httpSendEmailList = httpSendEmailList;
//# sourceMappingURL=emailList.controller.js.map