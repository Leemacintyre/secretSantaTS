"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const groupListSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    groupName: {
        type: String,
        required: true,
    },
});
const groupListModel = (0, mongoose_1.model)("GroupList", groupListSchema);
exports.default = groupListModel;
//# sourceMappingURL=groupList.mongo.js.map