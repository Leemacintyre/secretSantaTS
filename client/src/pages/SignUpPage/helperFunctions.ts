import { CookieData, ErrorToggleData, PlayerStateData } from "./types";

export const handleChange =
    (
        members: PlayerStateData,
        setMembers: React.Dispatch<React.SetStateAction<PlayerStateData>>,
        formValidationHelper: (e: React.ChangeEvent<HTMLInputElement>) => void
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;
        setMembers({ ...members, [name]: value });
        formValidationHelper(event);
    };

export const formValidation =
    (
        toggleError: ErrorToggleData,
        setToggleError: React.Dispatch<React.SetStateAction<ErrorToggleData>>
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = e.target;
        if (value.length === 0) {
            setToggleError({ ...toggleError, [name]: true });
        } else {
            setToggleError({ ...toggleError, [name]: false });
        }
    };

export const pushGroupToUrl = (history: any, cookies: CookieData) => {
    if (cookies.currentUser.fName && cookies.currentUser.lName) {
        console.log("i am logging", cookies.currentUser);
        history.push(
            `/${cookies.currentUser.fName}${cookies.currentUser.lName}`
        );
    }
    //  else {
    //     history.push(`/`);
    // }
};

export const setGroupIdUrlParam = (
    groupId: string,
    // setGroupId: React.Dispatch<React.SetStateAction<PlayerStateData>>
    setGroupId: any
) => {
    if (groupId) {
        setGroupId({ groupId: groupId });
        console.log("groupid", groupId);
    } else {
        setGroupId({ groupId: "" });
        console.log("groupid2", groupId);
    }
};
