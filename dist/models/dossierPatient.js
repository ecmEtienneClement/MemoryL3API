"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("DossierPatient", {
        //TODO
        numeroDossier: {
            type: dataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: {
                name: "numeroDossier",
                msg: validatorMessages_1.ValidatorMessages.uniqueMsg("ce numero dossier"),
            },
            validate: {
                notEmpty: {
                    msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le numero de dossier"),
                },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le numero de dossier") },
            },
        },
        //TODO
        motif: {
            type: dataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("motif").split(",");
            },
            set(data) {
                this.setDataValue("motif", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le motif") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le motif") },
            },
        },
        //TODO
        histoire: {
            type: dataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue("histoire").split(",");
            },
            set(data) {
                this.setDataValue("histoire", data.join());
            },
        },
        //TODO
        terrain: {
            type: dataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue("terrain").split(",");
            },
            set(data) {
                this.setDataValue("terrain", data.join());
            },
        },
    });
};
