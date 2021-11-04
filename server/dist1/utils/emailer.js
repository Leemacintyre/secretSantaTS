"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = __importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//     to: "test@example.com", // Change to your recipient
//     from: "test@example.com", // Change to your verified sender
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//     .send(msg)
//     .then(() => {
//         console.log("Email sent");
//     })
//     .catch((error) => {
//         console.error(error);
//     });
//# sourceMappingURL=emailer.js.map