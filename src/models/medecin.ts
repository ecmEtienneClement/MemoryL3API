import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Medecin", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le medecin") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le medecin") },
      },
    },
    //TODO
    salaire: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le salaire") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le salaire") },
      },
    },
    //TODO
    specialisation: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'spécialisation") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'spécialisation") },
      },
    },
  });
};
