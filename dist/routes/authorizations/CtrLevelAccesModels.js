"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const LevelAccesModels_1 = __importStar(require("./LevelAccesModels"));
exports.default = (httpMethode, profile, nameModel, next) => {
    const listModelsProfil = LevelAccesModels_1.default.listProfil.get(LevelAccesModels_1.NamesProfiles.infirmier);
    //TODO
    //Cas ou le profil dans le token n'est pas sur la liste profil
    if (!listModelsProfil) {
        const customError = new Error();
        customError.name = "Profil";
        customError.message = "Ce profil n'existe pas ";
        throw customError;
    }
    //TODO
    //Cas ou le model dans le path n'est pas sur la liste model
    const levelAccesModelProfil = listModelsProfil.get(nameModel);
    if (!levelAccesModelProfil) {
        const customError = new Error();
        customError.name = "Model";
        customError.message = "Ce model n'existe pas ";
        throw customError;
    }
    //TODO
    //List des methodes http
    const listMethodesHttp = LevelAccesModels_1.default.httpMethodesForLevelAcces.get(levelAccesModelProfil);
    //TODO
    //On verifi si cette methode fait partie des methodes autorisées
    if (!listMethodesHttp.includes(httpMethode)) {
        const customError = new Error();
        customError.name = "No Acces";
        customError.message = "Vous n'êtes pas autorisé à effectuée cette action.";
        throw customError;
    }
    //TODO
    // Si acces autorisé
    return true;
};
