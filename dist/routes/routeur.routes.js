"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_path_1 = __importDefault(require("./routeEntities/route.path"));
const router_crtl_path_1 = __importDefault(require("./routeurController/router.crtl.path"));
const sign_1 = __importDefault(require("./sign/sign"));
exports.default = (app) => {
    app.post("/api/clinique/signUp/", sign_1.default.signUp);
    app.post("/api/clinique/signIn/", sign_1.default.signIn);
    app.use("/api/clinique/:modelPath/", 
    //  auth,
    ///  authAccesProfil,
    router_crtl_path_1.default, route_path_1.default);
    app.use("**/**", (req, res) => {
        res.status(404).json("Cette route n'existe pas !");
    });
};
