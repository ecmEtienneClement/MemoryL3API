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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertDataInitDb = void 0;
const LevelAccesModels_1 = require("../../routes/authorizations/LevelAccesModels");
class InsertDataInitDb {
    //TODO
    static initialiseurDefaultData(sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                //  InsertDataInitDb.insDefaultPersonnel(sequelize),
                InsertDataInitDb.insDefaultPoste(sequelize),
                InsertDataInitDb.insDefaultTypeDeSalle(sequelize),
                InsertDataInitDb.insDefaultTypeDeRV(sequelize),
            ]);
        });
    }
    /*
    //TODO
    private static async insDefaultPersonnel(
      sequelize: Sequelize
    ): Promise<void> {
      const modelDefaultAdmin = sequelize.models.Personnel;
      const dataDefautlPersonnel = await modelDefaultAdmin.findOne({
        where: {
          [Op.or]: [
            { email: "ecmbayeclement@gmail.com" },
            { email: "ndieyediop@gmail.com" },
            { email: "moussandiaye@gmail.com" },
            { email: "malickyade@gmail.com" },
          ],
        },
      });
      if (!dataDefautlPersonnel) {
        try {
          //HASH
          const salt = await bcrypt.genSalt(10);
          const pwdHashAdmin = await bcrypt.hash("Firstadmin01", salt);
          const pwdHashMed = await bcrypt.hash("Firstmed01", salt);
          const pwdHashInf = await bcrypt.hash("Firstinf01", salt);
          const pwdHashSecr = await bcrypt.hash("Firstsec01", salt);
          await Promise.all([
            //
            modelDefaultAdmin.create({
              nom: "DIOP",
              prenom: "Ndieye",
              email: "ndieyediop@gmail.com",
              telephone: "777777777",
              adresse: "Dakar",
              age: 0,
              sexe: "F",
              role: NamesProfiles.medecin,
              mdp: pwdHashMed,
            }),
            //
            modelDefaultAdmin.create({
              nom: "NDIAYE",
              prenom: "Moussa",
              email: "moussandiaye@gmail.com",
              telephone: "777777777",
              adresse: "Thies",
              age: 0,
              sexe: "M",
              role: NamesProfiles.infirmier,
              mdp: pwdHashInf,
            }),
            //
            modelDefaultAdmin.create({
              nom: "YADE",
              prenom: "Malick",
              email: "malickyade@gmail.com",
              telephone: "777777777",
              adresse: "Thies",
              age: 0,
              sexe: "M",
              role: NamesProfiles.secretaire,
              mdp: pwdHashSecr,
            }),
            //
            modelDefaultAdmin.create({
              nom: "MBAYE",
              prenom: "Etienne Clement",
              email: "ecmbayeclement@gmail.com",
              telephone: "777777777",
              adresse: "Dakar",
              age: 0,
              sexe: "M",
              role: NamesProfiles.admin,
              mdp: pwdHashAdmin,
            }),
          ]);
        } catch (error) {
          throw new Error(
            "Une erreut c'est produite avec les personnels par défaut : " + error
          );
        }
      }
    }
    */
    //TODO
    static insDefaultPoste(sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            const modelDefaultPoste = sequelize.models.Poste;
            const dataDefautlPoste = yield modelDefaultPoste.findAll({
                limit: 1,
            });
            if (dataDefautlPoste.length < 1) {
                try {
                    yield Promise.all([
                        modelDefaultPoste.create({
                            poste: LevelAccesModels_1.NamesProfiles.admin,
                        }),
                        modelDefaultPoste.create({
                            poste: LevelAccesModels_1.NamesProfiles.medecin,
                        }),
                        modelDefaultPoste.create({
                            poste: LevelAccesModels_1.NamesProfiles.infirmier,
                        }),
                        modelDefaultPoste.create({
                            poste: LevelAccesModels_1.NamesProfiles.secretaire,
                        }),
                    ]);
                }
                catch (error) {
                    throw new Error("Une erreut c'est produite avec les poste par defaut : " + error);
                }
            }
        });
    }
    //TODO
    static insDefaultTypeDeSalle(sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            const modelDefaultTypeDeSalle = sequelize.models.TypeDeSalle;
            const dataDefautlTypeDeSalle = yield modelDefaultTypeDeSalle.findAll({
                limit: 1,
            });
            if (dataDefautlTypeDeSalle.length < 1) {
                try {
                    yield Promise.all([
                        modelDefaultTypeDeSalle.create({
                            type: "Cabinet",
                        }),
                        modelDefaultTypeDeSalle.create({
                            type: "Commune",
                        }),
                    ]);
                }
                catch (error) {
                    throw new Error("Une erreut c'est produite avec les poste par defaut : " + error);
                }
            }
        });
    }
    //TODO
    static insDefaultTypeDeRV(sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            const modelDefaultTypeRD = sequelize.models.TypeRendezVous;
            const dataDefautlTypeDeSalle = yield modelDefaultTypeRD.findAll({
                limit: 1,
            });
            if (dataDefautlTypeDeSalle.length < 1) {
                try {
                    yield Promise.all([
                        modelDefaultTypeRD.create({
                            type: "Premiere consultation",
                            prix: 2000,
                        }),
                        modelDefaultTypeRD.create({
                            type: "Consultation de suivi",
                            prix: 1000,
                        }),
                        modelDefaultTypeRD.create({
                            type: "Suivi gynécologique",
                            prix: 4000,
                        }),
                        modelDefaultTypeRD.create({
                            type: "Suivi de nourrisson et de l'enfant",
                            prix: 2500,
                        }),
                    ]);
                }
                catch (error) {
                    throw new Error("Une erreut c'est produite avec les types de rendez-vous par defaut : " +
                        error);
                }
            }
        });
    }
}
exports.InsertDataInitDb = InsertDataInitDb;
