import { Schema, model, Document } from "mongoose";

export interface UserData extends Document {
    _id: string;
    fName: string;
    lName: string;
    profilePicture: string;
    email: string;
}

const userSchema = new Schema<UserData>({
    _id: {
        type: String,
        required: true,
    },
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const userListModel = model<UserData>("User", userSchema);

export default userListModel;
