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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const antecedent_1 = __importDefault(require("../antecedent"));
const compteBloque_1 = __importDefault(require("../compteBloque"));
const consultation_1 = __importDefault(require("../consultation"));
const dossierPatient_1 = __importDefault(require("../dossierPatient"));
const employer_1 = __importDefault(require("../employer"));
const historiqueMessage_1 = __importDefault(require("../historiqueMessage"));
const horaire_1 = __importDefault(require("../horaire"));
const infoClinique_1 = __importDefault(require("../infoClinique"));
const medecin_1 = __importDefault(require("../medecin"));
const message_1 = __importDefault(require("../message"));
const ordonnance_1 = __importDefault(require("../ordonnance"));
const patient_1 = __importDefault(require("../patient"));
const payement_1 = __importDefault(require("../payement"));
const personnel_1 = __importDefault(require("../personnel"));
const poste_1 = __importDefault(require("../poste"));
const rendezVous_1 = __importDefault(require("../rendezVous"));
const salle_1 = __importDefault(require("../salle"));
const tache_1 = __importDefault(require("../tache"));
const typeDeSalle_1 = __importDefault(require("../typeDeSalle"));
const typeRendezVous_1 = __importDefault(require("../typeRendezVous"));
const nameModels_1 = require("./nameModels");
class InitModels {
    // TODO
    //Initialisation des models
    static initAllModels(sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            const allPromiseInitModels = yield Promise.all([
                (0, antecedent_1.default)(sequelize, sequelize_1.DataTypes),
                (0, compteBloque_1.default)(sequelize, sequelize_1.DataTypes),
                (0, consultation_1.default)(sequelize, sequelize_1.DataTypes),
                (0, dossierPatient_1.default)(sequelize, sequelize_1.DataTypes),
                (0, employer_1.default)(sequelize, sequelize_1.DataTypes),
                (0, historiqueMessage_1.default)(sequelize, sequelize_1.DataTypes),
                (0, horaire_1.default)(sequelize, sequelize_1.DataTypes),
                (0, infoClinique_1.default)(sequelize, sequelize_1.DataTypes),
                (0, medecin_1.default)(sequelize, sequelize_1.DataTypes),
                (0, message_1.default)(sequelize, sequelize_1.DataTypes),
                (0, ordonnance_1.default)(sequelize, sequelize_1.DataTypes),
                (0, patient_1.default)(sequelize, sequelize_1.DataTypes),
                (0, payement_1.default)(sequelize, sequelize_1.DataTypes),
                (0, personnel_1.default)(sequelize, sequelize_1.DataTypes),
                (0, poste_1.default)(sequelize, sequelize_1.DataTypes),
                (0, rendezVous_1.default)(sequelize, sequelize_1.DataTypes),
                (0, salle_1.default)(sequelize, sequelize_1.DataTypes),
                (0, tache_1.default)(sequelize, sequelize_1.DataTypes),
                (0, typeDeSalle_1.default)(sequelize, sequelize_1.DataTypes),
                (0, typeRendezVous_1.default)(sequelize, sequelize_1.DataTypes),
            ]);
            if (allPromiseInitModels) {
                return this.initRelationModels(sequelize);
            }
            else {
                return false;
            }
        });
    }
    //TODO
    //Mise en place des relations entre les tables
    static initRelationModels(sequelize) {
        try {
            //Models
            const models = sequelize.models;
            const antecedent = models.Antecedent;
            const compteBloque = models.CompteBloque;
            const consultation = models.Consultation;
            const dossierPatient = models.DossierPatient;
            const employer = models.Employer;
            const historiqueMessage = models.HistoriqueMessage;
            const horaire = models.Horaire;
            const medecin = models.Medecin;
            const message = models.Message;
            const ordonnance = models.Ordonnance;
            const patient = models.Patient;
            const payement = models.Payement;
            const personnel = models.Personnel;
            const poste = models.Poste;
            const rendezVous = models.RendezVous;
            const salle = models.Salle;
            const tache = models.Tache;
            const typeDeSalle = models.TypeDeSalle;
            const typeRendezVous = models.TypeRendezVous;
            //TODO [6] RELATIONS PERSONNEL
            //POSTE  <== PERSONNEL
            poste.hasMany(personnel, {
                foreignKey: { allowNull: false, name: "poste", field: "poste" },
            });
            personnel.belongsTo(poste, {
                foreignKey: { allowNull: false, name: "poste", field: "poste" },
            });
            //HORAIRE  <== PERSONNEL
            horaire.hasMany(personnel, {
                foreignKey: { allowNull: false, name: "horaire", field: "horaire" },
            });
            personnel.belongsTo(horaire, {
                foreignKey: { allowNull: false, name: "horaire", field: "horaire" },
            });
            //COMPTE_BLOQUER  <== PERSONNEL(ADMIN)
            personnel.hasMany(compteBloque, {
                foreignKey: { allowNull: false, name: "admin", field: "admin" },
            });
            compteBloque.belongsTo(personnel, {
                foreignKey: { allowNull: false, name: "admin", field: "admin" },
            });
            //MESSAGE  <== PERSONNEL
            personnel.hasMany(message, {
                foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
            });
            message.belongsTo(personnel, {
                foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
            });
            //HISTORIQUE_MESSAGE  <== PERSONNEL
            personnel.hasOne(historiqueMessage, {
                foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
            });
            historiqueMessage.belongsTo(personnel, {
                foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
            });
            //PERSONNEL(ADMIN)  <== PERSONNEL
            personnel.hasMany(personnel, {
                foreignKey: { allowNull: true, name: "admin", field: "admin" },
            });
            personnel.belongsTo(personnel, {
                foreignKey: { allowNull: true, name: "admin", field: "admin" },
            });
            //TODO [4] RELATIONS EMPLOYER
            //PAYEMENT  <== EMPLOYER(SECRETAIRE)
            employer.hasMany(payement, {
                foreignKey: {
                    allowNull: false,
                    name: "secretaire",
                    field: "secretaire",
                },
            });
            payement.belongsTo(employer, {
                foreignKey: {
                    allowNull: false,
                    name: "secretaire",
                    field: "secretaire",
                },
            });
            //TACHE  <== EMPLOYER(INFIRMIER ... ETC)
            employer.hasMany(tache, {
                foreignKey: { allowNull: false, name: "infirmier", field: "infirmier" },
            });
            tache.belongsTo(employer, {
                foreignKey: { allowNull: false, name: "infirmier", field: "infirmier" },
            });
            //RENDEZ-VOUS  <== EMPLOYER(SECRETAIRE)
            employer.hasMany(rendezVous, {
                foreignKey: {
                    allowNull: false,
                    name: "secretaire",
                    field: "secretaire",
                },
            });
            rendezVous.belongsTo(employer, {
                foreignKey: {
                    allowNull: false,
                    name: "secretaire",
                    field: "secretaire",
                },
            });
            //DOSSIER-PATIENT  <== EMPLOYER(SECRETAIRE)
            employer.hasMany(dossierPatient, {
                foreignKey: {
                    allowNull: false,
                    name: "secretaire",
                    field: "secretaire",
                },
            });
            dossierPatient.belongsTo(employer, {
                foreignKey: {
                    allowNull: false,
                    name: "secretaire",
                    field: "secretaire",
                },
            });
            //TODO [4] RELATIONS MEDECIN
            //DOSSIER-PATIENT  <== MEDECIN
            medecin.hasMany(dossierPatient, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            dossierPatient.belongsTo(medecin, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            //ORDONNANCE  <== MEDECIN
            medecin.hasMany(ordonnance, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            ordonnance.belongsTo(medecin, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            //CONSULTATION  <== MEDECIN
            medecin.hasMany(consultation, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            consultation.belongsTo(medecin, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            //RENDEZ-VOUS  <== MEDECIN
            medecin.hasMany(rendezVous, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            rendezVous.belongsTo(medecin, {
                foreignKey: { allowNull: false, name: "medecin", field: "medecin" },
            });
            //TODO [5] RELATIONS DOSSIER PATIENT
            //ANTECEDENT  <== DOSSIER PATIENT
            dossierPatient.hasOne(antecedent, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            antecedent.belongsTo(dossierPatient, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            //ORDONNANCE  <== DOSSIER PATIENT
            dossierPatient.hasMany(ordonnance, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            ordonnance.belongsTo(dossierPatient, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            //CONSULTATION  <== DOSSIER PATIENT
            dossierPatient.hasMany(consultation, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            consultation.belongsTo(dossierPatient, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            //RENDEZ-VOUS  <== DOSSIER PATIENT
            dossierPatient.hasMany(rendezVous, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            rendezVous.belongsTo(dossierPatient, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            //PAYEMENT  <== DOSSIER PATIENT
            dossierPatient.hasMany(payement, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            payement.belongsTo(dossierPatient, {
                foreignKey: {
                    allowNull: false,
                    name: "dossierPatient",
                    field: "dossierPatient",
                },
            });
            //TODO [1] RELATION PATIENT
            //DOSSIER PATIENT  <== PATIENT
            patient.hasOne(dossierPatient, {
                foreignKey: { allowNull: false, name: "patient", field: "patient" },
            });
            dossierPatient.belongsTo(patient, {
                foreignKey: { allowNull: false, name: "patient", field: "patient" },
            });
            //TODO [1] RELATION SALLE
            //PATIENT  <== SALLE
            salle.hasMany(patient, {
                foreignKey: { allowNull: false, name: "salle", field: "salle" },
            });
            patient.belongsTo(salle, {
                foreignKey: { allowNull: false, name: "salle", field: "salle" },
            });
            //TODO [1] RELATION TYPE DE SALLE
            //SALLE  <== TYPE DE SALLE
            typeDeSalle.hasMany(salle, {
                foreignKey: {
                    allowNull: false,
                    field: "typeDeSalle",
                    name: "typeDeSalle",
                },
            });
            salle.belongsTo(typeDeSalle, {
                foreignKey: {
                    allowNull: false,
                    field: "typeDeSalle",
                    name: "typeDeSalle",
                },
            });
            //TODO [1] RELATION TYPE DE RENDEZ-VOUS
            //RENDEZ-VOUS  <== TYPE DE RENDEZ-VOUS
            typeRendezVous.hasMany(rendezVous, {
                foreignKey: {
                    allowNull: false,
                    name: "typeRendezVous",
                    field: "typeRendezVous",
                },
            });
            rendezVous.belongsTo(typeRendezVous, {
                foreignKey: {
                    allowNull: false,
                    name: "typeRendezVous",
                    field: "typeRendezVous",
                },
            });
            return true;
        }
        catch (error) {
            console.log("Une erreur c'est produite lors de la mise en place des relations : \n" +
                error);
            return false;
        }
    }
    //
    static getModel() {
        return this.model;
    }
    //
    static setModel(model) {
        this.model = model;
    }
}
exports.default = InitModels;
_a = InitModels;
InitModels.modelsList = new Map();
//TODO
// Ajout des models dans la liste de model
InitModels.addModelsList = (sequelize) => {
    //Models
    const models = sequelize.models;
    const antecedent = models.Antecedent;
    const compteBloque = models.CompteBloque;
    const consultation = models.Consultation;
    const dossierPatient = models.DossierPatient;
    const employer = models.Employer;
    const historiqueMessage = models.HistoriqueMessage;
    const horaire = models.Horaire;
    const infoClinique = models.InfoClinique;
    const medecin = models.Medecin;
    const message = models.Message;
    const ordonnance = models.Ordonnance;
    const patient = models.Patient;
    const payement = models.Payement;
    const personnel = models.Personnel;
    const poste = models.Poste;
    const rendezVous = models.RendezVous;
    const salle = models.Salle;
    const tache = models.Tache;
    const typeDeSalle = models.TypeDeSalle;
    const typeRendezVous = models.TypeRendezVous;
    //
    _a.modelsList.set(nameModels_1.NameModels.antecedent, antecedent);
    _a.modelsList.set(nameModels_1.NameModels.compteBloque, compteBloque);
    _a.modelsList.set(nameModels_1.NameModels.consultation, consultation);
    _a.modelsList.set(nameModels_1.NameModels.dossierPatient, dossierPatient);
    _a.modelsList.set(nameModels_1.NameModels.employer, employer);
    _a.modelsList.set(nameModels_1.NameModels.historiqueMessage, historiqueMessage);
    _a.modelsList.set(nameModels_1.NameModels.horaire, horaire);
    _a.modelsList.set(nameModels_1.NameModels.infoClinique, infoClinique);
    _a.modelsList.set(nameModels_1.NameModels.medecin, medecin);
    _a.modelsList.set(nameModels_1.NameModels.message, message);
    _a.modelsList.set(nameModels_1.NameModels.ordonnance, ordonnance);
    _a.modelsList.set(nameModels_1.NameModels.patient, patient);
    _a.modelsList.set(nameModels_1.NameModels.payement, payement);
    _a.modelsList.set(nameModels_1.NameModels.personnel, personnel);
    _a.modelsList.set(nameModels_1.NameModels.poste, poste);
    _a.modelsList.set(nameModels_1.NameModels.rendezVous, rendezVous);
    _a.modelsList.set(nameModels_1.NameModels.salle, salle);
    _a.modelsList.set(nameModels_1.NameModels.tache, tache);
    _a.modelsList.set(nameModels_1.NameModels.typeDeSalle, typeDeSalle);
    _a.modelsList.set(nameModels_1.NameModels.typeRendezVous, typeRendezVous);
};
