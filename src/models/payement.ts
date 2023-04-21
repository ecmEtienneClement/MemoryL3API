import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Payement", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    description: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("La description") },
        notNull: { msg: ValidatorMessages.notNullMsg("La description") },
        len: {
          args: [5, 500],
          msg: ValidatorMessages.lenMsg("La description", "5 à 500"),
        },
      },
    },
    //TODO
    montant: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le montant") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le montant") },
      },
    },
  });
};
