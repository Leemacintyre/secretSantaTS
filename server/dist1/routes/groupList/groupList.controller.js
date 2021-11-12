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
exports.httpGetAllGroupList = void 0;
const groupList_model_1 = require("../../models/groupList/groupList.model");
// export async function httpGetAllEmailList(
//     req: IGetUserAuthInfoRequest,
//     res: Response
// ) {
//     try {
//         console.log("httpGetAllEmailList");
//         const firstName = await req.user.fName;
//         const lastName = await req.user.lName;
//         const currentUser = `${firstName}${lastName}`;
//         return res.status(200).json(await getAllEmailList(currentUser));
//     } catch (error) {
//         return res
//             .status(400)
//             .json({ error: error, location: "httpGetAllEmailList" });
//     }
// }
function httpGetAllGroupList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("httpGetAllGroupList");
            const currentUser = req.user._id;
            (0, groupList_model_1.getAllGroupList)(currentUser);
        }
        catch (error) {
            return res
                .status(400)
                .json({ error: error, location: "httpGetAllGroupList" });
        }
    });
}
exports.httpGetAllGroupList = httpGetAllGroupList;
//# sourceMappingURL=groupList.controller.js.map