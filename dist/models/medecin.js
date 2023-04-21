"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Medecin", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le medecin") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le medecin") },
            },
        },
        //TODO
        salaire: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le salaire") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le salaire") },
            },
        },
        //TODO
        specialisation: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'spécialisation") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'spécialisation") },
            },
        },
    });
};
