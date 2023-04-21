"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Message", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        idRecepteur: {
            type: dataTypes.UUID,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le récepteur") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le récepteur") },
            },
        },
        //TODO
        message: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le message") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le message") },
                len: {
                    args: [2, 500],
                    msg: validatorMessages_1.ValidatorMessages.lenMsg("L'adresse", "2 à 500"),
                },
            },
        },
    });
};
