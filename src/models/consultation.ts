import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Consultation", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    diagnostiqueMedical: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("Le diagnostique medical"),
        },
        notNull: {
          msg: ValidatorMessages.notNullMsg("Le diagnostique medical"),
        },
      },
    },
    //TODO
    poids: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("Le poids"),
        },
        notNull: {
          msg: ValidatorMessages.notNullMsg("Le poids"),
        },
      },
    },
    //TODO
    taille: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("La taille"),
        },
        notNull: {
          msg: ValidatorMessages.notNullMsg("La taille"),
        },
      },
    },
    //TODO
    imc: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'imc") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'imc") },
      },
    },
    //TODO
    temperature: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("La temperature") },
        notNull: { msg: ValidatorMessages.notNullMsg("La temperature") },
      },
    },
    //TODO
    frequenceCardiaque: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("La fréquence cardiaque"),
        },
        notNull: {
          msg: ValidatorMessages.notNullMsg("La fréquence cardiaque"),
        },
      },
    },
    //TODO
    pressionArterielle: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("La pression arterielle"),
        },
        notNull: {
          msg: ValidatorMessages.notNullMsg("La pression arterielle"),
        },
      },
    },
  });
};
