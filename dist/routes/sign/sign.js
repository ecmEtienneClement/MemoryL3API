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
const initModels_1 = __importDefault(require("../../models/initModels/initModels"));
const nameModels_1 = require("../../models/initModels/nameModels");
const route_errors_1 = __importDefault(require("../route.errors"));
const route_helper_1 = __importDefault(require("../route.helper"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const process_1 = require("process");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//TODO Sign Up
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("ici..");
        const pwdHash = yield route_helper_1.default.getHashPwd(req);
        const model = initModels_1.default.modelsList.get(nameModels_1.NameModels.personnel);
        if (!model) {
            return res.status(400).json("Error Path sign!");
        }
        const userSignUp = yield model.create(Object.assign(Object.assign({}, req.body), { mdp: pwdHash }));
        return res.status(201).json(userSignUp);
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//TODO Sing In
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const model = initModels_1.default.modelsList.get(nameModels_1.NameModels.personnel);
        if (!model) {
            return res.status(400).json("Error Path sign!");
        }
        const userSign = yield model.findOne({ where: { email } });
        if (!userSign) {
            return res
                .status(404)
                .json({ message: "Désolé ce compte n'existe pas !" + email });
        }
        //
        const isEqual = yield bcrypt_1.default.compare(req.body.mdp, userSign.getDataValue("mdp"));
        if (!isEqual) {
            return res.status(401).json({
                message: "Désolé e-mail ou mot de passe incorrecte !" +
                    userSign.getDataValue("mdp"),
            });
        }
        //
        const id = userSign.getDataValue("id");
        const nom = userSign.getDataValue("nom");
        const prenom = userSign.getDataValue("prenom");
        const role = userSign.getDataValue("role");
        const ip = req.ip;
        const userAg = req.headers["user-agent"];
        res.json({
            id,
            nom,
            prenom,
            email,
            role,
            ip,
            userAg,
            token: jsonwebtoken_1.default.sign({ id, email, role, ip, userAg }, process_1.env.SECRET_KEY, {
                expiresIn: "3h",
                algorithm: "HS384",
                audience: "WEB APP",
            }),
        });
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//Data exported
const sign = {
    signUp,
    signIn,
};
exports.default = sign;
