"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("RendezVous", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        motif: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le motif") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le motif") },
            },
        },
        //TODO
        date: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La date") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("La date") },
            },
        },
    });
};
