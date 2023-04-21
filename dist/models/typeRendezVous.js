"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("TypeRendezVous", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        type: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: {
                name: "type",
                msg: validatorMessages_1.ValidatorMessages.uniqueMsg("ce type de rendez-vous"),
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le type") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le type") },
            },
        },
        //TODO
        prix: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le prix") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le prix") },
            },
        },
    });
};
