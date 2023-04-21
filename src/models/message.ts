import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Message", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    idRecepteur: {
      type: dataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le récepteur") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le récepteur") },
      },
    },
    //TODO
    message: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le message") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le message") },
        len: {
          args: [2, 500],
          msg: ValidatorMessages.lenMsg("L'adresse", "2 à 500"),
        },
      },
    },
  });
};
