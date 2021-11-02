import User from "./user.mongo";

// get current user
export async function getCurrentUser(currentUser: string) {
    console.log("getCurrentUser Function", currentUser);
    try {
        return await User.findById(currentUser);
    } catch (error) {
        console.log(`Could not find current user ${error}`);
    }
}
