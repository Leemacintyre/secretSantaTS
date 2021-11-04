import express from "express";
import cors from "cors";
import path from "path";
import api from "./routes/api";
import passport from "passport";
import { authFlow } from "./services/authFlow";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY_1],
    })
);
app.use(passport.initialize());
app.use(passport.session());

// auth flow for social sign in (google)
authFlow(app);

// app.use(helmet({ contentSecurityPolicy: false }));
// test

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://secretsanta-react-ts.herokuapp.com/",
        ],
    })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!!!!!");
});

export default app;
