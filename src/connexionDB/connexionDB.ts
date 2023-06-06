import dotenv from "dotenv";
import { env } from "process";
import { Sequelize } from "sequelize";
import InitModels from "../models/initModels/initModels";
import { InsertDataInitDb } from "../models/initModels/InsertDefaultData";

dotenv.config();

export default async () => {
  const sequelize: Sequelize = new Sequelize({
    database: env.DB_NAME_DEV,
    host: env.HOST_DEV,
    dialect: "mysql",
    username: env.DB_USER_DEV,
    password: env.DB_PWD_DEV,
    port: Number.parseInt(env.PORT_DEV),
  });

  try {
    await sequelize.authenticate();

    console.log("[mode dev] Connexion à la DB réussit.");
    //Init Models
    const dataInitModels = await InitModels.initAllModels(sequelize);

    if (dataInitModels) {
      sequelize
        .sync({ force: false })
        .then((dataSequelize) => {
          //
          InsertDataInitDb.initialiseurDefaultData(dataSequelize);
          //
          InitModels.addModelsList(dataSequelize);
          //
          console.log("[mode dev] La DB est prête.");
        })
        .catch((error) => {
          console.log(
            "[mode dev] Une erreur c'est produite l'or de la synchronisation de la DB : " +
              error
          );
        });
    } else {
      console.log("[mode dev] erreur init DB ");
    }
  } catch (error) {
    console.log(
      "[mode dev] echec authentification de la base de donnée " + error
    );
  }
};
