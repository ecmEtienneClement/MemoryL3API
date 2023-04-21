"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Employer", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'employer") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'employer") },
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
    });
};
