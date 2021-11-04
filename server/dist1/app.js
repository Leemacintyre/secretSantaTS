"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./routes/api"));
const passport_1 = __importDefault(require("passport"));
const authFlow_1 = require("./services/authFlow");
const cookie_session_1 = __importDefault(require("cookie-session"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cookie_session_1.default)({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY_1],
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// auth flow for social sign in (google)
(0, authFlow_1.authFlow)(app);
// app.use(helmet({ contentSecurityPolicy: false }));
// test
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://secretsanta-react-ts.herokuapp.com/",
    ],
}));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.use("/v1", api_1.default);
app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!!!!!");
});
exports.default = app;
//# sourceMappingURL=app.js.map