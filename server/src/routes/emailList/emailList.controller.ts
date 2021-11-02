import {
    getAllEmailList,
    createEmailList,
    sendEmailList,
} from "../../models/emailList/emailList.model";
import { Request, Response } from "express";

export interface IGetUserAuthInfoRequest extends Request {
    user: any;
}

export async function httpGetAllEmailList(
    req: IGetUserAuthInfoRequest,
    res: Response
) {
    try {
        console.log("httpGetAllEmailList");
        const currentUser = await req.user.id;

        return res.status(200).json(await getAllEmailList(currentUser));
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

export async function httpSendEmailList(
    req: IGetUserAuthInfoRequest,
    res: Response
) {
    try {
        console.log("httpSendEmailList");
        const currentUser = await req.user.id;
        return res.status(201).json(await sendEmailList(currentUser));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpSendEmailList" });
    }
}
