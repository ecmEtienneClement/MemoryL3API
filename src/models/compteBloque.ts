import { DataTypes, Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("CompteBloque", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: {
        name: "email",
        msg: ValidatorMessages.uniqueMsg("cet e-mail"),
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("L'e-mail") },
        notNull: { msg: ValidatorMessages.notNullMsg("L'e-mail") },
        isEmail: {
          msg: ValidatorMessages.isEmailMsg(),
        },
      },
    },

    //TODO
    byAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
