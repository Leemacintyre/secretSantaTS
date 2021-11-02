import EmailListModel from "./emailList.mongo";
import { EmailList } from "./emailList.mongo";
import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";
import { EmailTo, mergeArray } from "../../utils/mergeArray";
import { checkAndCreateShufflesArray, PeopleArr } from "../../utils/shuffle";
import dotenv from "dotenv";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function getAllEmailList(): Promise<EmailList[]> {
    try {
        return await EmailListModel.find();
    } catch (error) {
        console.log(`Could not get email list ${error}`);
    }
}

export async function createEmailList(req: Request, res: Response) {
    try {
        const newList: EmailList = new EmailListModel({
            fName: req.body.fName,
            email: req.body.email,
            groupId: req.body.groupId,
        });
        console.log(newList);
        return await newList.save();
    } catch (error) {
        console.log(`Could not post to email list ${error}`);
    }
}

export async function sendEmailList(req: Request, res: Response) {
    try {
        const emailList: EmailList[] = await EmailListModel.find();
        const listToEdit: EmailList[] = [...emailList];
        const shuffledList: PeopleArr[] = checkAndCreateShufflesArray(
            listToEdit,
            emailList
        );
        const mergedList: EmailTo[] = mergeArray(emailList, shuffledList);
        const mergedListLength: number = mergedList.length;

        console.log(emailList);
        console.log(shuffledList);
        console.log(mergedList);
        console.log(mergedListLength);

        mergedList.forEach((person: EmailTo) => {
            console.log("i am a person", person);
            const { emailTo, email, fName } = person;

            const msg = {
                to: `${emailTo}`, // Change to your recipient
                from: "tempzaq1234@gmail.com", // Change to your verified sender
                subject: `${fName} Sending with SendGrid is Fun`,
                text: "and easy to do anywhere, even with Node.js",
                html: "<strong>and easy to do anywhere, even with Node.js</strong>",
            };
            sgMail
                .send(msg)
                .then(() => {
                    console.log("Email sent");
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    } catch (error) {
        console.log(`Could not post to email list ${error}`);
    }
}
