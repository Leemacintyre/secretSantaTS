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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailList = exports.createEmailList = exports.getAllEmailList = void 0;
const emailList_mongo_1 = __importDefault(require("./emailList.mongo"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const mergeArray_1 = require("../../utils/mergeArray");
const shuffle_1 = require("../../utils/shuffle");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
function getAllEmailList(currentUser) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(currentUser);
            const emailList = yield emailList_mongo_1.default.find({ groupId: currentUser });
            console.log(emailList);
            return emailList;
        }
        catch (error) {
            console.log(`Could not get email list ${error}`);
        }
    });
}
exports.getAllEmailList = getAllEmailList;
function createEmailList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkIfEmailExists = yield emailList_mongo_1.default.find({
                email: req.body.email,
            });
            if (checkIfEmailExists) {
                throw Error;
            }
            const newList = new emailList_mongo_1.default({
                fName: req.body.fName,
                email: req.body.email,
                groupId: req.body.groupId,
            });
            console.log(newList);
            return yield newList.save();
        }
        catch (error) {
            console.log(`Could not post to email list ${error}`);
        }
    });
}
exports.createEmailList = createEmailList;
function sendEmailList(currentUser) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const emailList = yield getAllEmailList(currentUser);
            const listToEdit = [...emailList];
            const shuffledList = (0, shuffle_1.checkAndCreateShufflesArray)(listToEdit, emailList);
            const mergedList = (0, mergeArray_1.mergeArray)(emailList, shuffledList);
            const mergedListLength = mergedList.length;
            console.log(emailList);
            console.log(shuffledList);
            console.log(mergedList);
            console.log(mergedListLength);
            mergedList.forEach((person) => {
                console.log("i am a person", person);
                const { emailTo, email, fName } = person;
                const msg = {
                    to: `${emailTo}`,
                    from: "tempzaq1234@gmail.com",
                    subject: `Who are you buying a gift for this year?`,
                    text: "and easy to do anywhere, even with Node.",
                    html: `
                <h1>Dear Santa,</h1>
                <h3>This year you are buying a gift for ${fName}.</h3>
                <h3>Please do not spend more than £10</h3>
                <h3>Merry Christmas!</h3>
                `,
                };
                mail_1.default
                    .send(msg)
                    .then(() => {
                    console.log("Email sent");
                })
                    .catch((error) => {
                    console.error(error);
                });
            });
        }
        catch (error) {
            console.log(`Could not post to email list ${error}`);
        }
    });
}
exports.sendEmailList = sendEmailList;
//# sourceMappingURL=emailList.model.js.map