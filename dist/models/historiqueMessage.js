"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorMessages_1 = require("./messageModels/validatorMessages");
exports.default = (sequelize, dataTypes) => {
    sequelize.define("HistoriqueMessage", {
        //TODO
        id: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        //TODO
        idContact: {
            type: dataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue("idContact").split(",");
            },
            set(data) {
                this.setDataValue("idContact", data.join());
            },
            validate: {
                notEmpty: { msg: validatorMessages_1.ValidatorMessages.notEmptyMsg("Les contactes") },
                notNull: { msg: validatorMessages_1.ValidatorMessages.notNullMsg("Les contactes") },
            },
        },
    });
};
