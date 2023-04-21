import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Employer", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'employer") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'employer") },
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
  });
};
