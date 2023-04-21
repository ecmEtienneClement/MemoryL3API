import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Personnel", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    nom: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le nom") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le nom") },
        len: {
          args: [2, 15],
          msg: ValidatorMessages.lenMsg("Le nom", "2 à 15"),
        },
      },
    },
    //TODO
    prenom: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le prénom") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le prénom") },
        len: {
          args: [2, 25],
          msg: ValidatorMessages.lenMsg("Le prénom"),
        },
      },
    },
    //TODO
    adresse: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'adresse") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'adresse") },
        len: {
          args: [2, 25],
          msg: ValidatorMessages.lenMsg("L'adresse"),
        },
      },
    },
    //TODO
    age: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'age") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'age") },
        min: { args: [18], msg: ValidatorMessages.ageMinMsg() },
        max: { args: [80], msg: ValidatorMessages.ageMinMsg() },
      },
    },
    //TODO
    sexe: {
      type: dataTypes.ENUM("M", "F"),
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le sexe") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le sexe") },
      },
    },
    //TODO
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: {
        name: "email",
        msg: ValidatorMessages.uniqueMsg("cet e-mail"),
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'e-mail") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'e-mail") },
        isEmail: {
          msg: ValidatorMessages.isEmailMsg(),
        },
      },
    },
    //TODO
    telephone: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: {
        name: "numero",
        msg: ValidatorMessages.uniqueMsg("cet numéro"),
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le numéro") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le numéro") },
        len: {
          args: [9, 9],
          msg: ValidatorMessages.lenPhoneMsg(),
        },
      },
    },
    //TODO
    mdp: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("Le mot de passe"),
        },
        notNull: { msg: ValidatorMessages.notNullMsg("Le mot de passe") },
      },
    },
    //TODO
    role: {
      type: dataTypes.ENUM("super-admin", "admin", "employer"),
      allowNull: false,
      defaultValue: "employer",
    },
  });
};
