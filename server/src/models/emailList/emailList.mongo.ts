import { Schema, model, Document } from "mongoose";

export interface EmailList extends Document {
    fName: string;
    email: string;
    groupId: string;
    _id?: number;
}

const emailListSchema = new Schema<EmailList>({
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

const emailListModel = model<EmailList>("EmailList", emailListSchema);

export default emailListModel;
