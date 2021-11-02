import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { getCurrentUser } from "../../hooks/axiosRequests";
import { useCookies } from "react-cookie";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.component";
import Nav from "../Nav/Nav.component";

import "./App.css";

export interface currentUserData {
    email: string;
    fName: string;
    lName: string;
    profilePicture: string;
    _id: string;
}

const App = () => {
    const [cookies, setCookie] = useCookies(["currentUser"]);
    const [userData, setUserData] = useState<currentUserData | null>(null);
    useEffect(() => {
        (async () => {
            const data: currentUserData = await getCurrentUser();
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
            </Switch>
        </div>
    );
};

export default App;
