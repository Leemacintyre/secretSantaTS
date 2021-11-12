import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { getCurrentUser } from "../../hooks/axiosRequests";
import { useCookies } from "react-cookie";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.component";
import Nav from "../Nav/Nav.component";

import "./App.css";

export interface CurrentUserData {
    email: string;
    fName: string;
    lName: string;
    profilePicture: string;
    _id: string;
}

const App = () => {
    const [cookies, setCookie] = useCookies(["currentUser"]);
    const [userData, setUserData] = useState<CurrentUserData | null>(null);

    useEffect(() => {
        (async () => {
            const data: CurrentUserData = await getCurrentUser();
            setUserData(data);
        })();
    }, []);

    useEffect(() => {
        setCookie("currentUser", userData, { path: "/" });
    }, [userData, setCookie]);

    return (
        <div>
            <Nav currentUser={cookies.currentUser} />
            <Switch>
                <Route path="/" exact component={SignUpPage} />
                <Route path="/:currentGroupId" exact component={SignUpPage} />
            </Switch>
        </div>
    );
};

export default App;
