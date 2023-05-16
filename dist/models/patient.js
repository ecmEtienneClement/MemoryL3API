"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Patient", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        nom: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le nom") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le nom") },
                len: {
                    args: [2, 15],
                    msg: validatorMessages_1.ValidatorMessages.lenMsg("Le nom", "2 à 15"),
                },
            },
        },
        //TODO
        prenom: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le prénom") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le prénom") },
                len: {
                    args: [2, 25],
                    msg: validatorMessages_1.ValidatorMessages.lenMsg("Le prénom"),
                },
            },
        },
        //TODO
        adresse: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'adresse") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'adresse") },
                len: {
                    args: [2, 25],
                    msg: validatorMessages_1.ValidatorMessages.lenMsg("L'adresse"),
                },
            },
        },
        //TODO
        age: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'age") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'age") },
                min: { args: [18], msg: validatorMessages_1.ValidatorMessages.ageMinMsg() },
                max: { args: [80], msg: validatorMessages_1.ValidatorMessages.ageMinMsg() },
            },
        },
        //TODO
        sexe: {
            type: dataTypes.ENUM("M", "F"),
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le sexe") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le sexe") },
            },
        },
        //TODO
        telephone: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: {
                name: "numero",
                msg: validatorMessages_1.ValidatorMessages.uniqueMsg("cet numéro"),
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le numéro") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le numéro") },
                len: {
                    args: [9, 9],
                    msg: validatorMessages_1.ValidatorMessages.lenPhoneMsg(),
                },
            },
        },
        //TODO
        dateDeNaissance: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La date de naissance"),
                },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("La date de naissance") },
            },
        },
        //TODO
        proffession: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("La proffession") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("La proffession") },
            },
        },
        //TODO
        groupeSanguin: {
            type: dataTypes.ENUM("O-", "O+", 'B-', 'A-', 'AB+', 'AB-'),
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le groupe sanguin ") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le groupe sanguin") },
            },
        },
    });
};
