"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authFlow = void 0;
const passport_1 = __importDefault(require("passport"));
const user_mongo_1 = __importDefault(require("../models/user/user.mongo"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
function authFlow(app) {
    app.use(passport_1.default.initialize());
    passport_1.default.serializeUser((user, done) => {
        console.log("serializeUser", user);
        done(null, user._id);
    });
    passport_1.default.deserializeUser((userId, done) => __awaiter(this, void 0, void 0, function* () {
        const currentUser = yield user_mongo_1.default.findById(userId);
        done(null, currentUser);
    }));
    const config = {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        COOKIE_KEY_1: process.env.COOKIE_KEY_1,
        // COOKIE_KEY_2: process.env.COOKIE_KEY_2,
    };
    const AUTH_OPTIONS = {
        callbackURL: "http://localhost:8000/v1/google/auth/google/callback",
        clientID: config.CLIENT_ID,
        clientSecret: config.CLIENT_SECRET,
    };
    function verifyCallback(accessToken, refreshToken, profile, done) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield user_mongo_1.default.findOne({ _id: profile.id });
            if (existingUser) {
                done(null, existingUser);
            }
            else {
                const { sub, given_name, family_name, picture, email } = profile._json;
                try {
                    const newUser = new user_mongo_1.default({
                        _id: sub,
                        fName: given_name,
                        lName: family_name,
                        profilePicture: picture,
                        email: email,
                    });
                    yield newUser.save();
                    verifyCallback(accessToken, refreshToken, profile, done);
                }
                catch (error) {
                    console.log("could not save user");
                }
            }
            console.log(profile._json);
        });
    }
    passport_1.default.use(new passport_google_oauth20_1.Strategy(AUTH_OPTIONS, verifyCallback));
}
exports.authFlow = authFlow;
//# sourceMappingURL=authFlow.js.map