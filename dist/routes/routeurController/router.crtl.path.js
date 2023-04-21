"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const initModels_1 = __importDefault(require("../../models/initModels/initModels"));
const nameModels_1 = require("../../models/initModels/nameModels");
exports.default = (req, res, next) => {
    const modelPath = req.params.modelPath;
    if (modelPath == nameModels_1.NameModels.personnel && req.method == "POST") {
        return res.status(400).json("Error Sign !");
    }
    const model = initModels_1.default.modelsList.get(modelPath);
    if (!model) {
        return res.status(400).json("Error Path !");
    }
    initModels_1.default.setModel(model);
    next();
};
