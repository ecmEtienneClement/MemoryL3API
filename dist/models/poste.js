"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Poste", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        poste: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: {
                name: "poste",
                msg: validatorMessages_1.ValidatorMessages.uniqueMsg("cette poste"),
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La poste") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("La poste") },
                len: {
                    args: [2, 40],
                    msg: validatorMessages_1.ValidatorMessages.lenMsg("La poste", "2 à 40"),
                },
            },
        },
    });
};
