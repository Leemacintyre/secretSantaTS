import { Schema, model, Document } from "mongoose";

export interface GroupList extends Document {
    _id: string;
    userId: string;
    groupName: string;
}

const groupListSchema = new Schema<GroupList>({
    userId: {
        type: String,
        required: true,
    },
    groupName: {
        type: String,
        required: true,
    },
});

const groupListModel = model<GroupList>("GroupList", groupListSchema);

export default groupListModel;
