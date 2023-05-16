"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameModelPathSave = void 0;
const initModels_1 = __importDefault(require("../../models/initModels/initModels"));
const nameModels_1 = require("../../models/initModels/nameModels");
const route_helper_1 = __importDefault(require("../route.helper"));
exports.default = (req, res, next) => {
    const modelPath = route_helper_1.default.getModelPath(req);
    NameModelPathSave.setNameModel(modelPath);
    //Pour eviter toute creation de personnel a parti de ce path
    //tout creation ou connection d'un user se fera a partir du patj signIn et signUp
    if (modelPath == nameModels_1.NameModels.personnel && req.method == "POST") {
        return res.status(400).json("Error Sign !");
    }
    //Recuperation du model dans la liste
    const model = initModels_1.default.modelsList.get(modelPath);
    if (!model) {
        return res.status(400).json("Error Path !");
    }
    initModels_1.default.setModel(model);
    next();
};
//Pour sauvegarder le nom du model afin de pouvoir l'utiliser dans les reponses de requete (msg)
class NameModelPathSave {
    static getNameModel() {
        return this.nameModel;
    }
    static setNameModel(nameModel) {
        this.nameModel = nameModel;
    }
}
exports.NameModelPathSave = NameModelPathSave;
NameModelPathSave.nameModel = "";
