"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const emailListSchema = new mongoose_1.Schema({
    fName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    groupId: {
        type: String,
        trim: true,
    },
});
const emailListModel = (0, mongoose_1.model)("EmailList", emailListSchema);
exports.default = emailListModel;
//# sourceMappingURL=emailList.mongo.js.map