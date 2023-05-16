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
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = require("process");
const sequelize_1 = require("sequelize");
const initModels_1 = __importDefault(require("../models/initModels/initModels"));
const InsertDefaultData_1 = require("../models/initModels/InsertDefaultData");
dotenv_1.default.config();
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const sequelize = new sequelize_1.Sequelize({
        database: process_1.env.DB_NAME_DEV,
        host: process_1.env.HOST_DEV,
        dialect: "mysql",
        username: process_1.env.DB_USER_DEV,
        password: process_1.env.DB_PWD_DEV,
        port: Number.parseInt(process_1.env.PORT_DEV),
    });
    try {
        yield sequelize.authenticate();
        console.log("[mode dev] Connexion à la DB réussit.");
        //Init Models
        const dataInitModels = yield initModels_1.default.initAllModels(sequelize);
        if (dataInitModels) {
            sequelize
                .sync({ force: false })
                .then((dataSequelize) => {
                //
                InsertDefaultData_1.InsertDataInitDb.initialiseurDefaultData(dataSequelize);
                //
                initModels_1.default.addModelsList(dataSequelize);
                //
                console.log("[mode dev] La DB est prête.");
            })
                .catch((error) => {
                console.log("[mode dev] Une erreur c'est produite l'or de la synchronisation de la DB : " +
                    error);
            });
        }
        else {
            console.log("[mode dev] erreur init DB ");
        }
    }
    catch (error) {
        console.log("[mode dev] echec authentification de la base de donnée " + error);
    }
});
