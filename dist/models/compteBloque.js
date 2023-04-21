"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("CompteBloque", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: {
                name: "email",
                msg: validatorMessages_1.ValidatorMessages.uniqueMsg("cet e-mail"),
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'e-mail") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'e-mail") },
                isEmail: {
                    msg: validatorMessages_1.ValidatorMessages.isEmailMsg(),
                },
            },
        },
        //TODO
        byAdmin: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    });
};
