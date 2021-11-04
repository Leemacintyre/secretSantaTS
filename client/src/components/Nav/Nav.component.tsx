import React from "react";
import "./Nav.styles.scss";

import { currentUserData } from "../App/App";

interface navData {
    currentUser: currentUserData | null;
}

const Nav: React.FC<navData> = ({ currentUser }) => {
    console.log(currentUser);
    return (
        <div className={"nav-container"}>
            <div className={"nav-userIdContainer"}>
                Group ID: &nbsp;
                {currentUser?.fName ? (
                    <div className={"nav-userId"}>
                        {` ${currentUser?.fName}${currentUser?.lName}`}
                    </div>
                ) : null}
            </div>
            <div className={"nav-linkContainer"}>
                {!currentUser?._id ? (
                    <a href="https://secretsanta-react-ts.herokuapp.com/v1/google/auth/google">
                        Login
                    </a>
                ) : (
                    <a href="https://secretsanta-react-ts.herokuapp.com/v1/google/logout">
                        Log out
                    </a>
                )}
            </div>
        </div>
    );
};

export default Nav;
