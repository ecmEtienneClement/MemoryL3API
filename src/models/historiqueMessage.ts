import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("HistoriqueMessage", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    idContact: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("idContact").split(",");
      },
      set(data: any) {
        this.setDataValue("idContact", data.join());
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Les contactes") },
        notNull: { msg: ValidatorMessages.notNullMsg("Les contactes") },
      },
    },
  });
};
