import passport from "passport";
import { getCurrentUser } from "../../models/user/user.model";

export async function httpGetCurrentUser(req, res) {
    try {
        // console.log("httpGetCurrentUser1", req.user.id);
        const currentUser = await req.user.id;
        // const currentUser = "113577393364732277603";
        return res.status(200).json(await getCurrentUser(currentUser));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpGetCurrentUser" });
    }
}
