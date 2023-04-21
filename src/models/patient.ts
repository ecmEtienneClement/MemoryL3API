import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Patient", {
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
    telephone: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("telephone").split(",");
      },
      set(data: any) {
        this.setDataValue("telephone", data.join());
      },
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
    dateDeNaissance: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("La date de naissance"),
        },
        notNull: { msg: ValidatorMessages.notNullMsg("La date de naissance") },
      },
    },
    //TODO
    proffession: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("La proffession") },
        notNull: { msg: ValidatorMessages.notNullMsg("La proffession") },
      },
    },
    //TODO
    groupeSanguin: {
      type: dataTypes.ENUM("AB-", "OO-", "OO+"),
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le groupe sanguin ") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le groupe sanguin") },
      },
    },
  });
};
