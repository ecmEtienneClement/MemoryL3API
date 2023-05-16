"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const process_1 = require("process");
const dotenv_1 = __importDefault(require("dotenv"));
const route_helper_1 = __importDefault(require("../route.helper"));
const CtrLevelAccesModels_1 = __importDefault(require("../authorizations/CtrLevelAccesModels"));
dotenv_1.default.config();
//
exports.default = (req, res, next) => {
    try {
        const modelPath = route_helper_1.default.getModelPath(req);
        let tokenReqHeader = req.headers.authorization.split(" ")[1];
        let tokenVerify = jsonwebtoken_1.default.verify(tokenReqHeader, process_1.env.SECRET_KEY, {
            algorithms: ["HS384"],
            audience: "WEB APP",
        });
        //INFO TOKEN
        const userIdToken = tokenVerify.id;
        const userEmailToken = tokenVerify.email;
        const userRoleToken = tokenVerify.role;
        const userIpToken = tokenVerify.ip;
        const userUserAgentToken = tokenVerify.userAg;
        //INFO URL
        const userIdReq = req.query.id;
        const userEmailReq = req.query.em;
        const userIpReq = req.ip;
        const userUserAgentReq = req.headers["user-agent"];
        const httpMethode = req.method;
        // Controle du nivau d'acces du profil
        (0, CtrLevelAccesModels_1.default)(httpMethode, userRoleToken, modelPath, next);
        //Si bon
        next();
    }
    catch (error) {
        res.status(403).json(error);
    }
};
