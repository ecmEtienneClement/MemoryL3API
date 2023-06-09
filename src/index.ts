import express from "express";
import bodyParser from "body-parser";
import connexionDB from "./connexionDB/connexionDB";
import routeurRoutes from "./routes/routeur.routes";
import cors from "cors";
const app = express();

//
app.use(
  cors({
    origin: "http://127.0.0.1:4200",
  })
);
app.use(bodyParser.json());

// Connexion a la base de donnée
connexionDB();

// Routage des requettes
routeurRoutes(app);
//
const port: number = 3333;
app.listen(port, () => {
  console.log(`The server at started on port ${port}`);
});
