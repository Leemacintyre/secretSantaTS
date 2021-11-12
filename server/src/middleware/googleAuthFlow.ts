import passport from "passport";

export function signInWithGoogleStart() {
    return passport.authenticate("google", {
        scope: ["email", "profile"],
    });
}
// if (process.env.NODE_ENV === "production") {}

export function signInWithGoogleCallback() {
    return passport.authenticate("google", {
        failureRedirect: "/failure",
        successRedirect: `http://localhost:3000/`,
        session: true,
    });
}
