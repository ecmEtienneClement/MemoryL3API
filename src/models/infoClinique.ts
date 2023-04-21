import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("InfoClinique", {
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
          args: [2, 200],
          msg: ValidatorMessages.lenMsg("Le nom", "2 à 200"),
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
    proprietaire: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("proprietaire").split(",");
      },
      set(data: any) {
        this.setDataValue("proprietaire", data.join());
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le proprietaire") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le proprietaire") },
      },
    },
    //TODO
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("email").split(",");
      },
      set(data: any) {
        this.setDataValue("email", data.join());
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'e-mail") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'e-mail") },
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
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le numéro") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le numéro") },
      },
    },
  });
};
