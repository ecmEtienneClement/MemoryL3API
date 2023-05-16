"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connexionDB_1 = __importDefault(require("./connexionDB/connexionDB"));
const routeur_routes_1 = __importDefault(require("./routes/routeur.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//
app.use((0, cors_1.default)({
    origin: "http://127.0.0.1:4200",
}));
app.use(body_parser_1.default.json());
// Connexion a la base de donnée
(0, connexionDB_1.default)();
// Routage des requettes
(0, routeur_routes_1.default)(app);
//
const port = 3333;
app.listen(port, () => {
    console.log(`The server at started on port ${port}`);
});
