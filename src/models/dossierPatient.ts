import { Sequelize } from "sequelize";
import { ValidatorMessages } from "./messageModels/validatorMessages";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("DossierPatient", {
     //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },
    //TODO
    numeroDossier: {
      type: dataTypes.STRING,
           allowNull: false,
      unique: {
        name: "numeroDossier",
        msg: ValidatorMessages.uniqueMsg("ce numero dossier"),
      },
      validate: {
        notEmpty: {
          msg: ValidatorMessages.notEmptyMsg("Le numero de dossier"),
        },
        notNull: { msg: ValidatorMessages.notNullMsg("Le numero de dossier") },
      },
    },
    //TODO
    motif: {
      type: dataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("motif").split(",");
      },
      set(data: any) {
        this.setDataValue("motif", data.join() ? data.join() : data);
      },
      validate: {
        notEmpty: { msg: ValidatorMessages.notEmptyMsg("Le motif") },
        notNull: { msg: ValidatorMessages.notNullMsg("Le motif") },
      },
    },
    //TODO
    histoire: {
      type: dataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("histoire").split(",");
      },
      set(data: any) {
        this.setDataValue("histoire", data.join() ? data.join() : data);
      },
    },
    //TODO
    terrain: {
      type: dataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("terrain").split(",");
      },
      set(data: any) {
        this.setDataValue("terrain", data.join() ? data.join() : data);
      },
    },
  });
};
