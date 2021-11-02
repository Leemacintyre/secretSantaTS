import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { getAllPlayers, getCurrentUser } from "../../hooks/axiosRequests";
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
    // const peopleArr: PeopleArr[] = [
    //     {
    //         person: "person",
    //         email: "email",
    //     },
    // ];
    // for (let i = 0; i < 10; i++) {
    //     peopleArr.push({
    //         person: "person" + i,
    //         email: "email" + i,
    //     });
    // }

    // const peopleArrToEdit = [...peopleArr];

    // const [shuffledArray, setShuffledArray] = useState(peopleArr);
    // const [arrayToEmail, setArrayToEmail] = useState({});
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
            {/* <button onClick={() => console.log(cookies.currentUser)}>
                test
            </button>
            ;
            <br />
            <a href="http://localhost:8000/v1/google/auth/google">login </a>
            <br />
            <a href="http://localhost:8000/v1/google/checklog"> check log </a>
            <br />
            <a href="http://localhost:8000/v1/google/logout"> logout</a>
            <br />
            <a href="http://localhost:8000/v1/currentuser"> currentUser</a> */}
            <button onClick={() => getAllPlayers()}>get current user</button>

            <Nav currentUser={cookies.currentUser} />
            <Switch>
                <Route path="/" exact component={SignUpPage} />
            </Switch>
            {/* <button
                onClick={() =>
                    setShuffledArray(
                        checkAndCreateShufflesArray(peopleArrToEdit, peopleArr)
                    )
                }
            >
                shuffle
            </button>
            <button
                onClick={() =>
                    setArrayToEmail(mergeArray(peopleArr, shuffledArray))
                }
            >
                merge
            </button>

            <div className="container">
                <div>
                    {peopleArr.map(({ person, email }) => (
                        <div key={email}>
                            <div>{person}</div>
                            <div>{email}</div>
                        </div>
                    ))}
                </div>
                <div>
                    {shuffledArray.map(({ person, email }) => (
                        <div key={email}>
                            <div>{person}</div>
                            <div>{email}</div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default App;
