"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Payement", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        description: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La description") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("La description") },
                len: {
                    args: [5, 500],
                    msg: validatorMessages_1.ValidatorMessages.lenMsg("La description", "5 à 500"),
                },
            },
        },
        //TODO
        montant: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le montant") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le montant") },
            },
        },
    });
};
