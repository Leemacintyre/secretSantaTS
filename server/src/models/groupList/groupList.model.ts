import groupListModel, { GroupList } from "./groupList.mongo";

export async function getAllGroupList(
    currentUser: string
): Promise<GroupList[]> {
    try {
        console.log(currentUser);
        const groupList = await groupListModel.find({ userId: currentUser });
        console.log(groupList);

        return groupList;
    } catch (error) {
        console.log(`could not get email list ${error}`);
    }
}
