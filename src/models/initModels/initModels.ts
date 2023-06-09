import { Sequelize, DataTypes } from "sequelize";
import antecedent from "../antecedent";
import compteBloque from "../compteBloque";
import consultation from "../consultation";
import dossierPatient from "../dossierPatient";
import historiqueMessage from "../historiqueMessage";
import infoClinique from "../infoClinique";
import message from "../message";
import ordonnance from "../ordonnance";
import patient from "../patient";
import payement from "../payement";
import personnel from "../personnel";
import poste from "../poste";
import rendezVous from "../rendezVous";
import salle from "../salle";
import tache from "../tache";
import typeDeSalle from "../typeDeSalle";
import typeRendezVous from "../typeRendezVous";
import { NameModels } from "./nameModels";

export default class InitModels {
  public static modelsList: Map<string, any> = new Map<string, any>();
  private static model: any;

  // TODO
  //Initialisation des models
  public static async initAllModels(sequelize: Sequelize): Promise<Boolean> {
    const allPromiseInitModels: void[] = await Promise.all([
      antecedent(sequelize, DataTypes),
      compteBloque(sequelize, DataTypes),
      consultation(sequelize, DataTypes),
      dossierPatient(sequelize, DataTypes),
      historiqueMessage(sequelize, DataTypes),
      infoClinique(sequelize, DataTypes),
      message(sequelize, DataTypes),
      ordonnance(sequelize, DataTypes),
      patient(sequelize, DataTypes),
      payement(sequelize, DataTypes),
      personnel(sequelize, DataTypes),
      poste(sequelize, DataTypes),
      rendezVous(sequelize, DataTypes),
      salle(sequelize, DataTypes),
      tache(sequelize, DataTypes),
      typeDeSalle(sequelize, DataTypes),
      typeRendezVous(sequelize, DataTypes),
    ]);
    if (allPromiseInitModels) {
      return this.initRelationModels(sequelize);
    } else {
      return false;
    }
  }

  //TODO
  //Mise en place des relations entre les tables
  private static initRelationModels(sequelize: Sequelize): boolean {
    try {
      //Models
      const models = sequelize.models;
      const antecedent = models.Antecedent;
      const compteBloque = models.CompteBloque;
      const consultation = models.Consultation;
      const dossierPatient = models.DossierPatient;
      const historiqueMessage = models.HistoriqueMessage;
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

      //TODO [10] RELATIONS PERSONNEL
      //POSTE  <== PERSONNEL
      poste.hasMany(personnel, {
        foreignKey: { allowNull: false, name: "profil", field: "profil" },
      });
      personnel.belongsTo(poste, {
        foreignKey: { allowNull: false, name: "profil", field: "profil" },
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
      //PAYEMENT  <== PERSONNEL(SECRETAIRE)
      personnel.hasMany(payement, {
        foreignKey: {
          allowNull: false,
          name: "secretaire",
          field: "secretaire",
        },
      });
      payement.belongsTo(personnel, {
        foreignKey: {
          allowNull: false,
          name: "secretaire",
          field: "secretaire",
        },
      });
      //TACHE  <== PERSONNEL(INFIRMIER ... ETC)
      personnel.hasMany(tache, {
        foreignKey: { allowNull: false, name: "infirmier", field: "infirmier" },
      });
      tache.belongsTo(personnel, {
        foreignKey: { allowNull: false, name: "infirmier", field: "infirmier" },
      });
      //RENDEZ-VOUS  <== PERSONNEL(SECRETAIRE)
      personnel.hasMany(rendezVous, {
        foreignKey: {
          allowNull: false,
          name: "secretaire",
          field: "secretaire",
        },
      });
      rendezVous.belongsTo(personnel, {
        foreignKey: {
          allowNull: false,
          name: "secretaire",
          field: "secretaire",
        },
      });
    
      //TODO [4] RELATIONS PERSONNEL
      //DOSSIER-PATIENT  <== PERSONNEL
      personnel.hasMany(dossierPatient, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
      });
      dossierPatient.belongsTo(personnel, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
      });
      //ORDONNANCE  <== PERSONNEL
      personnel.hasMany(ordonnance, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
      });
      ordonnance.belongsTo(personnel, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
      });
      //CONSULTATION  <== PERSONNEL
      personnel.hasMany(consultation, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
      });
      consultation.belongsTo(personnel, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
      });
      //RENDEZ-VOUS  <== PERSONNEL
      personnel.hasMany(rendezVous, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
      });
      rendezVous.belongsTo(personnel, {
        foreignKey: { allowNull: false, name: "personnel", field: "personnel" },
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

      //DOSSIER PATIENT  <== SALLE
      salle.hasMany(dossierPatient, {
        foreignKey: { allowNull: false, name: "salle", field: "salle" },
      });
      dossierPatient.belongsTo(salle, {
        foreignKey: { allowNull: false, name: "salle", field: "salle" },
      });

      //TODO [1] RELATION PATIENT
      //DOSSIER PATIENT  <== PATIENT
      patient.hasMany(dossierPatient, {
        foreignKey: { allowNull: false, name: "patient", field: "patient" },
      });
      dossierPatient.belongsTo(patient, {
        foreignKey: { allowNull: false, name: "patient", field: "patient" },
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
    } catch (error) {
      console.log(
        "Une erreur c'est produite lors de la mise en place des relations : \n" +
          error
      );
      return false;
    }
  }

  //TODO
  // Ajout des models dans la liste de model
  public static addModelsList = (sequelize: Sequelize): void => {
    //Models
    const models = sequelize.models;
    const antecedent = models.Antecedent;
    const compteBloque = models.CompteBloque;
    const consultation = models.Consultation;
    const dossierPatient = models.DossierPatient;
    const historiqueMessage = models.HistoriqueMessage;
    const infoClinique = models.InfoClinique;
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
    this.modelsList.set(NameModels.antecedent, antecedent);
    this.modelsList.set(NameModels.compteBloque, compteBloque);
    this.modelsList.set(NameModels.consultation, consultation);
    this.modelsList.set(NameModels.dossierPatient, dossierPatient);
    this.modelsList.set(NameModels.historiqueMessage, historiqueMessage);
    this.modelsList.set(NameModels.infoClinique, infoClinique);
    this.modelsList.set(NameModels.message, message);
    this.modelsList.set(NameModels.ordonnance, ordonnance);
    this.modelsList.set(NameModels.patient, patient);
    this.modelsList.set(NameModels.payement, payement);
    this.modelsList.set(NameModels.personnel, personnel);
    this.modelsList.set(NameModels.poste, poste);
    this.modelsList.set(NameModels.rendezVous, rendezVous);
    this.modelsList.set(NameModels.salle, salle);
    this.modelsList.set(NameModels.tache, tache);
    this.modelsList.set(NameModels.typeDeSalle, typeDeSalle);
    this.modelsList.set(NameModels.typeRendezVous, typeRendezVous);
  };
  //
  public static getModel() {
    return this.model;
  }
  //
  public static setModel(model: any) {
    this.model = model;
  }
}
