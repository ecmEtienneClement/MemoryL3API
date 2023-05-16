"use strict";
//****************************ETIENNE CLEMENT MBAYE***************************************** */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelCRUD = exports.NamesProfiles = void 0;
//Nivaux d'acces des models [CRUD]
const nameModels_1 = require("../../models/initModels/nameModels");
//Les differents profiles
var NamesProfiles;
(function (NamesProfiles) {
    NamesProfiles["admin"] = "admin";
    NamesProfiles["medecin"] = "medecin";
    NamesProfiles["infirmier"] = "infirmier";
    NamesProfiles["secretaire"] = "secretaire";
})(NamesProfiles = exports.NamesProfiles || (exports.NamesProfiles = {}));
//Les differents combinaisons d'actions
var LevelCRUD;
(function (LevelCRUD) {
    LevelCRUD["All"] = "*";
    LevelCRUD["R"] = "R";
    LevelCRUD["RU"] = "RU";
    LevelCRUD["RUD"] = "RUD";
    LevelCRUD["CRU"] = "CRU";
    LevelCRUD["None"] = "/";
})(LevelCRUD = exports.LevelCRUD || (exports.LevelCRUD = {}));
//Les differents methodes http
var methodeHttp;
(function (methodeHttp) {
    methodeHttp["Post"] = "POST";
    methodeHttp["Get"] = "GET";
    methodeHttp["Put"] = "PUT";
    methodeHttp["Delete"] = "DELETE";
})(methodeHttp || (methodeHttp = {}));
//*******************************ALL PROFIL*************************** */
class AllProfil {
    //TODO
    static admin() {
        //ACCESS ALL MODEL OBJECTS [CRUD]
    }
    //TODO
    static medecin() {
        //List des models restreint pour le profil medecin
        return new Map([
            [nameModels_1.NameModels.antecedent, LevelCRUD.All],
            [nameModels_1.NameModels.compteBloque, LevelCRUD.None],
            [nameModels_1.NameModels.consultation, LevelCRUD.All],
            [nameModels_1.NameModels.dossierPatient, LevelCRUD.All],
            [nameModels_1.NameModels.historiqueMessage, LevelCRUD.All],
            [nameModels_1.NameModels.infoClinique, LevelCRUD.R],
            [nameModels_1.NameModels.message, LevelCRUD.All],
            [nameModels_1.NameModels.ordonnance, LevelCRUD.All],
            [nameModels_1.NameModels.patient, LevelCRUD.All],
            [nameModels_1.NameModels.payement, LevelCRUD.None],
            [nameModels_1.NameModels.personnel, LevelCRUD.R],
            [nameModels_1.NameModels.poste, LevelCRUD.R],
            [nameModels_1.NameModels.rendezVous, LevelCRUD.All],
            [nameModels_1.NameModels.salle, LevelCRUD.R],
            [nameModels_1.NameModels.typeDeSalle, LevelCRUD.R],
            [nameModels_1.NameModels.typeRendezVous, LevelCRUD.R],
        ]);
    }
    //TODO
    static infirmier() {
        //List des models restreint pour le profil infirmier
        return new Map([
            [nameModels_1.NameModels.antecedent, LevelCRUD.All],
            [nameModels_1.NameModels.compteBloque, LevelCRUD.None],
            [nameModels_1.NameModels.consultation, LevelCRUD.All],
            [nameModels_1.NameModels.dossierPatient, LevelCRUD.All],
            [nameModels_1.NameModels.historiqueMessage, LevelCRUD.All],
            [nameModels_1.NameModels.infoClinique, LevelCRUD.R],
            [nameModels_1.NameModels.message, LevelCRUD.All],
            [nameModels_1.NameModels.ordonnance, LevelCRUD.R],
            [nameModels_1.NameModels.patient, LevelCRUD.R],
            [nameModels_1.NameModels.payement, LevelCRUD.None],
            [nameModels_1.NameModels.personnel, LevelCRUD.R],
            [nameModels_1.NameModels.poste, LevelCRUD.R],
            [nameModels_1.NameModels.rendezVous, LevelCRUD.R],
            [nameModels_1.NameModels.salle, LevelCRUD.R],
            [nameModels_1.NameModels.typeDeSalle, LevelCRUD.R],
            [nameModels_1.NameModels.typeRendezVous, LevelCRUD.R],
        ]);
    } //TODO
    static secretaire() {
        //List des models restreint pour le profil secretaire
        return new Map([
            [nameModels_1.NameModels.antecedent, LevelCRUD.None],
            [nameModels_1.NameModels.compteBloque, LevelCRUD.None],
            [nameModels_1.NameModels.consultation, LevelCRUD.None],
            [nameModels_1.NameModels.dossierPatient, LevelCRUD.All],
            [nameModels_1.NameModels.historiqueMessage, LevelCRUD.All],
            [nameModels_1.NameModels.infoClinique, LevelCRUD.All],
            [nameModels_1.NameModels.message, LevelCRUD.All],
            [nameModels_1.NameModels.ordonnance, LevelCRUD.None],
            [nameModels_1.NameModels.patient, LevelCRUD.All],
            [nameModels_1.NameModels.payement, LevelCRUD.All],
            [nameModels_1.NameModels.personnel, LevelCRUD.All],
            [nameModels_1.NameModels.poste, LevelCRUD.All],
            [nameModels_1.NameModels.rendezVous, LevelCRUD.All],
            [nameModels_1.NameModels.salle, LevelCRUD.All],
            [nameModels_1.NameModels.typeDeSalle, LevelCRUD.All],
            [nameModels_1.NameModels.typeRendezVous, LevelCRUD.All],
        ]);
    }
}
exports.default = AllProfil;
AllProfil.listProfil = new Map([
    [NamesProfiles.medecin, AllProfil.medecin()],
    [NamesProfiles.infirmier, AllProfil.infirmier()],
    [NamesProfiles.secretaire, AllProfil.secretaire()],
]);
//Les differents methodes disponibles dans les niveaux d'acces
AllProfil.httpMethodesForLevelAcces = new Map([
    [
        LevelCRUD.All,
        [methodeHttp.Post, methodeHttp.Get, methodeHttp.Put, methodeHttp.Delete],
    ],
    [LevelCRUD.R, [methodeHttp.Get]],
    [LevelCRUD.RU, [methodeHttp.Get, methodeHttp.Put]],
    [LevelCRUD.RUD, [methodeHttp.Get, methodeHttp.Put, methodeHttp.Delete]],
    [
        LevelCRUD.CRU,
        [methodeHttp.Post, methodeHttp.Get, methodeHttp.Put, methodeHttp.Delete],
    ],
    [LevelCRUD.None, ["None"]],
]);
