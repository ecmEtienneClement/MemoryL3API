import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("TypeRendezVous", {
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
        msg: ValidatorMessages.uniqueMsg("ce type de rendez-vous"),
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le type") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le type") },
      },
    },
    //TODO
    prix: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le prix") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le prix") },
      },
    },
  });
};
