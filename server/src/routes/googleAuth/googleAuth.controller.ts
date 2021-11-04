export function googleCallback(req, res) {
    return console.log("google called us back");
}

export function redirectToHome(req, res) {
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === "production") {
    //     return res.redirect("");
    // }
    return res.redirect("https://secretsanta-react-ts.herokuapp.com");
    // return res.redirect("http://localhost:3000");
}

export function redirectToLogin(req, res) {
    // console.log(process.env.NODE_ENV);
    // if (process.env.NODE_ENV === "production") {
    //     return res.redirect("");
    // }
    return res.redirect("https://secretsanta-react-ts.herokuapp.com/login");
    // return res.redirect("http://localhost:3000/login");
}
