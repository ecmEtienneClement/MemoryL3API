"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const initModels_1 = __importDefault(require("../../models/initModels/initModels"));
const route_errors_1 = __importDefault(require("../route.errors"));
const route_helper_1 = __importDefault(require("../route.helper"));
const router_crtl_path_1 = require("../routeurController/router.crtl.path");
//
const getModel = () => {
    return initModels_1.default.getModel();
};
const messageEntitieNotFound = "Cet élement n'éxiste pas.";
//TODO CREATE ENTITIE
const createEntitie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataEntitie = yield getModel().create(Object.assign({}, req.body));
        return res.status(201).json({
            entitie: dataEntitie,
            msg: `Ajout reussit : ${router_crtl_path_1.NameModelPathSave.getNameModel()}`,
        });
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//TODO GET ALL ENTITIES
const getAllEntities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataEntities = yield getModel().findAll({
            include: { all: true },
        });
        return res.json({
            entities: dataEntities,
            msg: `Chargement reussit : ${router_crtl_path_1.NameModelPathSave.getNameModel()}`,
        });
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//TODO GET ENTITIE BY ID
const getEntitieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = route_helper_1.default.getParamId(req);
        //
        const dataEntitie = yield getModel().findByPk(id, {
            include: { all: true },
        });
        //
        return dataEntitie
            ? res.json({
                entitie: dataEntitie,
                msg: `Chargement reussit : ${router_crtl_path_1.NameModelPathSave.getNameModel()}`,
            })
            : res.status(404).json({ message: messageEntitieNotFound });
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//TODO UPDATE ENTITIE BY ID
const updateEntitieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = route_helper_1.default.getParamId(req);
        const dataEntitie = yield getModel().findByPk(id);
        //
        if (!dataEntitie) {
            return res.status(404).json({ message: messageEntitieNotFound });
        }
        //
        yield dataEntitie.update(Object.assign({}, req.body), { where: { id } });
        return getEntitieById(req, res);
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//TODO DELETE ENTITIE BY ID
const deleteEntitieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = route_helper_1.default.getParamId(req);
        const dataEntitie = yield getModel().findByPk(id);
        //
        if (!dataEntitie) {
            return res.status(404).json({ message: messageEntitieNotFound });
        }
        //
        yield dataEntitie.destroy();
        return res.json({
            msg: `Suppression reussit : ${router_crtl_path_1.NameModelPathSave.getNameModel()}`,
        });
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//TODO DELETE ALL ENTITIES
const deleteAllEntities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield getModel().drop();
        return res.json({
            msg: `Suppression reussit : ${router_crtl_path_1.NameModelPathSave.getNameModel()}`,
        });
    }
    catch (error) {
        (0, route_errors_1.default)(error, res);
    }
});
//DATA ROUTES EXPORTED
const entitiesCtrl = {
    createEntitie,
    getAllEntities,
    getEntitieById,
    updateEntitieById,
    deleteEntitieById,
    deleteAllEntities,
};
exports.default = entitiesCtrl;
