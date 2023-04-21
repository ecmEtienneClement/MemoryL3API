"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Consultation", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        diagnostiqueMedical: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le diagnostique medical"),
                },
                notNull: {
                    msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le diagnostique medical"),
                },
            },
        },
        //TODO
        poids: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le poids"),
                },
                notNull: {
                    msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le poids"),
                },
            },
        },
        //TODO
        taille: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La taille"),
                },
                notNull: {
                    msg: validatorMessages_1.ValidatorMessages.notNullMsg("La taille"),
                },
            },
        },
        //TODO
        imc: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'imc") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'imc") },
            },
        },
        //TODO
        temperature: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La temperature") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("La temperature") },
            },
        },
        //TODO
        frequenceCardiaque: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La fréquence cardiaque"),
                },
                notNull: {
                    msg: validatorMessages_1.ValidatorMessages.notNullMsg("La fréquence cardiaque"),
                },
            },
        },
        //TODO
        pressionArterielle: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La pression arterielle"),
                },
                notNull: {
                    msg: validatorMessages_1.ValidatorMessages.notNullMsg("La pression arterielle"),
                },
            },
        },
    });
};
