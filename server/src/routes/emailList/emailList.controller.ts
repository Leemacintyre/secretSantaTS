import {
    getAllEmailList,
    createEmailList,
    sendEmailList,
} from "../../models/emailList/emailList.model";
import { Request, Response } from "express";

interface IGetUserAuthInfoRequest extends Request {
    user: any;
}

export async function httpGetAllEmailList(
    req: IGetUserAuthInfoRequest,
    res: Response
) {
    try {
        console.log("httpGetAllEmailList");
        console.log(req.user);

        const currentUser = await req.user.id;
        console.log("here", currentUser);

        return res.status(200).json(await getAllEmailList());
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetAllEmailList" });
    }
}

export async function httpCreateEmailList(req: Request, res: Response) {
    try {
        console.log("httpCreateEmailList");
        return res.status(201).json(await createEmailList(req, res));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpCreateEmailList" });
    }
}

export async function httpSendEmailList(req: Request, res: Response) {
    try {
        console.log("httpSendEmailList");
        return res.status(201).json(await sendEmailList(req, res));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpSendEmailList" });
    }
}
