import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Horaire", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    jour: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("jour").split(",");
      },
      set(data: any) {
        this.setDataValue("jour", data.join());
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le jour") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le jour") },
      },
    },
    //TODO
    heure: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("heure").split(",");
      },
      set(data: any) {
        this.setDataValue("heure", data.join());
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'heure") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'heure") },
      },
    },
  });
};
