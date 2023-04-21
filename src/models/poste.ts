import { DataTypes, Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Poste", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },

    //TODO
    poste: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "poste",
        msg: ValidatorMessages.uniqueMsg("cette poste"),
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("La poste") },
        notNull: { msg: ValidatorMessages.notNullMsg("La poste") },
        len: {
          args: [2, 40],
          msg: ValidatorMessages.lenMsg("La poste", "2 à 40"),
        },
      },
    },
  });
};
