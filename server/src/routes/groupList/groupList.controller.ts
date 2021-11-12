import { Request, Response } from "express";
import { getAllGroupList } from "../../models/groupList/groupList.model";

export interface IGetUserAuthInfoRequest extends Request {
    user: {
        _id: string;
        fName: string;
        lName: string;
        profilePicture: string;
        email: string;
    };
}

// export async function httpGetAllEmailList(
//     req: IGetUserAuthInfoRequest,
//     res: Response
// ) {
//     try {
//         console.log("httpGetAllEmailList");
//         const firstName = await req.user.fName;
//         const lastName = await req.user.lName;
//         const currentUser = `${firstName}${lastName}`;

//         return res.status(200).json(await getAllEmailList(currentUser));
//     } catch (error) {
//         return res
//             .status(400)
//             .json({ error: error, location: "httpGetAllEmailList" });
//     }
// }

export async function httpGetAllGroupList(
    req: IGetUserAuthInfoRequest,
    res: Response
) {
    try {
        console.log("httpGetAllGroupList");
        const currentUser = req.user._id;
        getAllGroupList(currentUser);
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetAllGroupList" });
    }
}
