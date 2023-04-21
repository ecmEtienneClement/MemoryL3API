"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("Ordonnance", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        tbOrdonnance: {
            type: dataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("tbOrdonnance").split(",");
            },
            set(data) {
                this.setDataValue("tbOrdonnance", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("L'ordonnance") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("L'ordonnance") },
            },
        },
    });
};
