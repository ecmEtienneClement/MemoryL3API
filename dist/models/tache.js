"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, dataTypes) => {
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
            set(data) {
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
            set(data) {
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
            set(data) {
                this.setDataValue("prisMedicament", data.join());
            },
        },
    });
};
