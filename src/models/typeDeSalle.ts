import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("TypeDeSalle", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    type: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: {
        name: "type",
        msg: ValidatorMessages.uniqueMsg("ce type de salle"),
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le type de salle") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le type de salle") },
      },
    },
  });
};
