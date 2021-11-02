import React, { useState } from "react";
import "./SignUpPage.styles.scss";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import InputField from "../../components/InputField/InputField.component";
import { addPlayerToGroup, sendOutEmails } from "../../hooks/axiosRequests";

export interface PlayerStateData {
    fName: string;
    email: string;
    groupId: string;
}

const SignUpPage: React.FC<any> = () => {
    const initialState: PlayerStateData = {
        fName: "",
        email: "",
        groupId: "",
    };

    const [members, setMembers] = useState<PlayerStateData>({
        fName: "",
        email: "",
        groupId: "",
    });
    const { email, fName, groupId } = members;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;
        setMembers({ ...members, [name]: value });
    };

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        addPlayerToGroup(members);
        console.log(members);
        setMembers(initialState);
    };

    const sendOutEmailHelper = () => {
        sendOutEmails();
        console.log("sent email");
    };

    console.log(members);

    return (
        <div className="bg-christmasTree bg-no-repeat bg-cover signUpPage-container">
            {/* <div className="border-8 border-red-500 w-3/5"></div> */}
            <div className="signUpPage-form-container">
                <form onSubmit={handleFormSubmit}>
                    <div className="signUpPage-input-container">
                        <InputField
                            name={"fName"}
                            label={"Name"}
                            type="text"
                            value={fName}
                            handleChange={handleChange}
                        />
                        <InputField
                            name={"email"}
                            label={"Email"}
                            type={"email"}
                            value={email}
                            handleChange={handleChange}
                        />
                        <InputField
                            name={"groupId"}
                            label={"Group ID"}
                            type="text"
                            value={groupId}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className="signUpPage-button-container">
                        <CustomButton type="submit">Join Group</CustomButton>
                        <CustomButton>Create Group</CustomButton>
                    </div>
                </form>
                <CustomButton onClick={sendOutEmailHelper}>
                    Send Out Emails
                </CustomButton>
            </div>
        </div>
    );
};

export default SignUpPage;
