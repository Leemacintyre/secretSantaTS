import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("mongoose is connected");
});

export async function mongoConnect(): Promise<void> {
    try {
        await mongoose.connect(String(MONGO_URL));
    } catch (error) {
        console.log(error);
    }
}

export async function mongoDisconnect(): Promise<void> {
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
}
