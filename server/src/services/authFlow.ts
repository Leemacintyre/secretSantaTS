import passport from "passport";
import User from "../models/user/user.mongo";
import { UserData } from "../models/user/user.mongo";
import { Strategy } from "passport-google-oauth20";

export function authFlow(app) {
    app.use(passport.initialize());

    passport.serializeUser((user: UserData, done) => {
        console.log("serializeUser", user);
        done(null, user._id);
    });

    passport.deserializeUser(async (userId, done) => {
        const currentUser = await User.findById(userId);
        done(null, currentUser);
    });

    const config = {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        COOKIE_KEY_1: process.env.COOKIE_KEY_1,
        // COOKIE_KEY_2: process.env.COOKIE_KEY_2,
    };

    const AUTH_OPTIONS = {
        callbackURL:
            "https://git.heroku.com/secretsanta-react-ts/v1/google/auth/google/callback",
        clientID: config.CLIENT_ID,
        clientSecret: config.CLIENT_SECRET,
    };

    async function verifyCallback(accessToken, refreshToken, profile, done) {
        const existingUser = await User.findOne({ _id: profile.id });
        if (existingUser) {
            done(null, existingUser);
        } else {
            const { sub, given_name, family_name, picture, email } =
                profile._json;
            try {
                const newUser = new User({
                    _id: sub,
                    fName: given_name,
                    lName: family_name,
                    profilePicture: picture,
                    email: email,
                });
                await newUser.save();
                verifyCallback(accessToken, refreshToken, profile, done);
            } catch (error) {
                console.log("could not save user");
            }
        }
        console.log(profile._json);
    }
    passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
}
