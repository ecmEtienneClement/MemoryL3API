"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Antecedent", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        allergie: {
            type: dataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue("allergie").split(",");
            },
            set(data) {
                this.setDataValue("allergie", data.join());
            },
        },
        //TODO
        medicaux: {
            type: dataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue("medicaux").split(",");
            },
            set(data) {
                this.setDataValue("medicaux", data.join());
            },
        },
        //TODO
        chirugicaux: {
            type: dataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue("chirugicaux").split(",");
            },
            set(data) {
                this.setDataValue("chirugicaux", data.join());
            },
        },
        //TODO
        familiaire: {
            type: dataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue("familiaire").split(",");
            },
            set(data) {
                this.setDataValue("familiaire", data.join());
            },
        },
        //TODO
        autre: {
            type: dataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue("autre").split(",");
            },
            set(data) {
                this.setDataValue("autre", data.join());
            },
        },
    });
};
