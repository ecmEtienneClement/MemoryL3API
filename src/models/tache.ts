import { Sequelize } from "sequelize";
export default (sequelize: Sequelize, dataTypes: any) => {
  sequelize.define("Tache", {
    //TODO
    id: {
      type: dataTypes.UUID,
      primaryKey: true,
      defaultValue: dataTypes.UUIDV4,
    },

    //TODO
    perfusion: {
      type: dataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("perfusion").split(",");
      },
      set(data: any) {
        this.setDataValue("perfusion", data.join());
      },
    },
    //TODO
    prelevement: {
      type: dataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("prelevement").split(",");
      },
      set(data: any) {
        this.setDataValue("prelevement", data.join());
      },
    },
    //TODO
    prisMedicament: {
      type: dataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("prisMedicament").split(",");
      },
      set(data: any) {
        this.setDataValue("prisMedicament", data.join());
      },
    },
  });
};
