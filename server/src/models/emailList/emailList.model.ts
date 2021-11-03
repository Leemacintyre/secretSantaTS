import EmailListModel from "./emailList.mongo";
import { EmailList } from "./emailList.mongo";
import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";
import { EmailTo, mergeArray } from "../../utils/mergeArray";
import { checkAndCreateShufflesArray, PeopleArr } from "../../utils/shuffle";
import dotenv from "dotenv";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function getAllEmailList(
    currentUser: string
): Promise<EmailList[]> {
    try {
        console.log(currentUser);
        const emailList = await EmailListModel.find({ groupId: currentUser });
        console.log(emailList);

        return emailList;
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

export async function sendEmailList(currentUser: any) {
    try {
        const emailList: EmailList[] = await getAllEmailList(currentUser);
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
                subject: `Who are you buying a gift for this year?`,
                text: "and easy to do anywhere, even with Node.",
                html: `
                <h1>Dear Santa,</h1>
                <h3>This year you are buying a gift for ${fName}.</h3>
                <h3>Please do not spend more than £10</h3>
                <h3>Merry Christmas!</h3>
                `,
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
