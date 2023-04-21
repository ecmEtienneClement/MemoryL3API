import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Ordonnance", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    tbOrdonnance: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("tbOrdonnance").split(",");
      },
      set(data: any) {
        this.setDataValue("tbOrdonnance", data.join());
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'ordonnance") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'ordonnance") },
      },
    },
  });
};
