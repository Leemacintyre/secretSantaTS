import axios from "axios";
import { PlayerStateData } from "../pages/SignUpPage/SignUpPage.component";

export const getAllPlayers = async () => {
    try {
        const { data } = await axios.get(
            "https://secretsanta-react-ts.herokuapp.com/v1/emailList",
            {
                withCredentials: true,
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const addPlayerToGroup = async (player: PlayerStateData) => {
    const { email, fName, groupId } = player;
    try {
        axios.post(
            "https://secretsanta-react-ts.herokuapp.com/v1/emailList/createEmailList",
            {
                email,
                fName,
                groupId,
            }
        );
    } catch (error) {
        console.log(error);
    }
};

export const sendOutEmails = async () => {
    try {
        const { data } = await axios.get(
            "https://secretsanta-react-ts.herokuapp.com/v1/emailList/sendNewEmail",
            {
                withCredentials: true,
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getCurrentUser = async () => {
    try {
        const { data } = await axios.get(
            "https://secretsanta-react-ts.herokuapp.com/v1/currentuser",
            {
                withCredentials: true,
            }
        );
        console.log("getCurrentUser", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
