import React from "react";
import "./Nav.styles.scss";

import { CurrentUserData } from "../App/App";

interface navData {
    currentUser: CurrentUserData | null;
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
                    <a href="http://localhost:8000/v1/google/auth/google">
                        Login
                    </a>
                ) : (
                    <a href="http://localhost:8000/v1/google/logout">Log out</a>
                )}
            </div>
        </div>
    );
};

export default Nav;
