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
exports.httpGetCurrentUser = void 0;
const user_model_1 = require("../../models/user/user.model");
function httpGetCurrentUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log("httpGetCurrentUser1", req.user.id);
            const currentUser = yield req.user.id;
            // const currentUser = "113577393364732277603";
            return res.status(200).json(yield (0, user_model_1.getCurrentUser)(currentUser));
        }
        catch (error) {
            return res
                .status(400)
                .json({ error: error, location: "httpGetCurrentUser" });
        }
    });
}
exports.httpGetCurrentUser = httpGetCurrentUser;
//# sourceMappingURL=currentUser.controller.js.map