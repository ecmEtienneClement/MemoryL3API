"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const process_1 = require("process");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//
exports.default = (req, res, next) => {
    try {
        let tokenReqHeader = req.headers.authorization.split(" ")[1];
        let tokenVerify = jsonwebtoken_1.default.verify(tokenReqHeader, process_1.env.SECRET_KEY, {
            algorithms: ["HS384"],
            audience: "WEB APP",
        });
        //INFO TOKEN
        const userIdToken = tokenVerify.id;
        const userEmailToken = tokenVerify.email;
        const userIpToken = tokenVerify.ip;
        const userUserAgentToken = tokenVerify.userAg;
        //INFO URL
        const userIdReq = req.query.id;
        const userEmailReq = req.query.em;
        const userIpReq = req.ip;
        const userUserAgentReq = req.headers["user-agent"];
        //Verify data in Token and query URL
        if (userIdToken != userIdReq ||
            userEmailToken != userEmailReq ||
            userIpToken != userIpReq ||
            userUserAgentToken != userUserAgentReq) {
            throw new Error();
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(403).json({
            message: "Token invalide veillez générer un nouveau token.",
        });
    }
};
