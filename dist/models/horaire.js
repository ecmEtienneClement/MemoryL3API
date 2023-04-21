"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
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
            set(data) {
                this.setDataValue("jour", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le jour") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le jour") },
            },
        },
        //TODO
        heure: {
            type: dataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("heure").split(",");
            },
            set(data) {
                this.setDataValue("heure", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'heure") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'heure") },
            },
        },
    });
};
