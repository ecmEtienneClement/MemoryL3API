"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_ctrl_1 = __importDefault(require("./route.ctrl"));
const entitieRoutes = (0, express_1.Router)();
//
entitieRoutes.post("/", route_ctrl_1.default.createEntitie);
entitieRoutes.get("/", route_ctrl_1.default.getAllEntities);
entitieRoutes.get("/:id", route_ctrl_1.default.getEntitieById);
entitieRoutes.put("/:id", route_ctrl_1.default.updateEntitieById);
entitieRoutes.delete("/all", route_ctrl_1.default.deleteAllEntities);
entitieRoutes.delete("/:id", route_ctrl_1.default.deleteEntitieById);
//
exports.default = entitieRoutes;
