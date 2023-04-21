"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("InfoClinique", {
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
                    args: [2, 200],
                    msg: validatorMessages_1.ValidatorMessages.lenMsg("Le nom", "2 à 200"),
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
        proprietaire: {
            type: dataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("proprietaire").split(",");
            },
            set(data) {
                this.setDataValue("proprietaire", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le proprietaire") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le proprietaire") },
            },
        },
        //TODO
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("email").split(",");
            },
            set(data) {
                this.setDataValue("email", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'e-mail") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'e-mail") },
            },
        },
        //TODO
        telephone: {
            type: dataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("telephone").split(",");
            },
            set(data) {
                this.setDataValue("telephone", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Le numéro") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Le numéro") },
            },
        },
    });
};
