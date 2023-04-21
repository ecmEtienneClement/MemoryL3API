"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorMessages = void 0;
class ValidatorMessages {
    /**                        METHODES MESSAGE FOR MODELS                             */
    //
    static notEmptyMsg(propretiModel) {
        return `${propretiModel} ne peut étre vide.`;
    }
    //
    static notNullMsg(propretiModel) {
        return `${propretiModel} est requise.`;
    }
    //
    static lenMsg(propretiModel, lenModel = "2 à 25") {
        return `${propretiModel} doit étre comprise entre ${lenModel} lettres.`;
    }
    //
    static lenPhoneMsg() {
        return `Le numéro est incorrect.`;
    }
    //
    static isEmailMsg() {
        return `Le format d'e-mail est incorrect.`;
    }
    //
    static uniqueMsg(propretiModel) {
        return `Désoler ${propretiModel} existe déja.`;
    }
    //
    static ageMinMsg() {
        return `Désoler age minimale est de 18 ans.`;
    }
    //
    static ageMaxMsg() {
        return `Désoler age maximale est de 80 ans.`;
    }
}
exports.ValidatorMessages = ValidatorMessages;
