import React, { useEffect, useState } from "react";
import "./SignUpPage.styles.scss";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import InputField from "../../components/InputField/InputField.component";
import Modal from "../../components/Modal/Modal.component";
import { addPlayerToGroup, sendOutEmails } from "../../hooks/axiosRequests";
import { useCookies } from "react-cookie";
import { CurrentUserData } from "../../components/App/App";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
    formValidation,
    handleChange,
    pushGroupToUrl,
    setGroupIdUrlParam,
} from "./helperFunctions";
import { ErrorToggleData, PlayerStateData } from "./types";

const SignUpPage: React.FC<any> = () => {
    const history = useHistory();
    const params: PlayerStateData = useParams();
    const [cookies] = useCookies(["currentUser"]);
    const currentUser: CurrentUserData | null = cookies.currentUser;
    const [toggleModal, setToggleModal] = useState<boolean>(false);

    const [toggleError, setToggleError] = useState<ErrorToggleData>({
        fName: false,
        email: false,
        groupId: false,
    });

    const initialState: PlayerStateData = {
        fName: "",
        email: "",
        groupId: "",
    };

    const [members, setMembers] = useState<PlayerStateData>({
        // const [members, setMembers] = useState<any>({
        fName: "",
        email: "",
        groupId: "",
    });
    const { email, fName, groupId } = members;

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        addPlayerToGroup(members);
        console.log(members);
        setMembers(initialState);
        toggleModalHelper();
    };

    const sendOutEmailHelper = (): void => {
        sendOutEmails();
        console.log("sent email");
    };

    const toggleModalHelper = (): void => {
        setToggleModal(!toggleModal);
        console.log(toggleModal);
    };

    useEffect(() => {
        pushGroupToUrl(history, cookies);
        params.groupId && setGroupIdUrlParam(params.groupId, setMembers);
    }, [params.groupId, history, cookies]);

    const handleChangeHelper = handleChange(
        members,
        setMembers,
        formValidation(toggleError, setToggleError)
    );

    return (
        <>
            {toggleModal && (
                <Modal
                    title={"Merry Christmas"}
                    toggleModalHelper={toggleModalHelper}
                >
                    You are now part of the group!
                </Modal>
            )}
            <div className="bg-christmasTree bg-no-repeat bg-cover signUpPage-container">
                {/* <div className="border-8 border-red-500 w-3/5"></div> */}
                <div className="signUpPage-form-container">
                    <form onSubmit={handleFormSubmit}>
                        <div className="signUpPage-input-container">
                            <InputField
                                name={"fName"}
                                label={"Full Name"}
                                type="text"
                                value={fName}
                                handleChange={handleChangeHelper}
                                error={toggleError.fName}
                            />
                            <InputField
                                name={"email"}
                                label={"Email"}
                                type={"email"}
                                value={email}
                                handleChange={handleChangeHelper}
                                error={toggleError.email}
                            />
                            <InputField
                                name={"groupId"}
                                label={"Group ID"}
                                type="text"
                                value={groupId}
                                handleChange={handleChangeHelper}
                                error={toggleError.groupId}
                            />
                        </div>
                        <div className="signUpPage-button-form">
                            <CustomButton type="submit">
                                Join Group
                            </CustomButton>
                            {currentUser?._id ? (
                                <CustomButton
                                    type="button"
                                    onClick={sendOutEmailHelper}
                                >
                                    Send Out Emails
                                </CustomButton>
                            ) : null}
                        </div>
                    </form>
                    <div className="signUpPage-button"></div>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;
