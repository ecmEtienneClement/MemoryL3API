import { NextFunction, Request, Response } from "express";
import InitModels from "../../models/initModels/initModels";
import { NameModels } from "../../models/initModels/nameModels";
import routesHelpers from "../route.helper";

export default (req: Request, res: Response, next: NextFunction) => {
  const modelPath = routesHelpers.getModelPath(req);
  NameModelPathSave.setNameModel(modelPath);
  //Pour eviter toute creation de personnel a parti de ce path
  //tout creation ou connection d'un user se fera a partir du patj signIn et signUp
  if (modelPath == NameModels.personnel && req.method == "POST") {
    return res.status(400).json("Error Sign !");
  }
  //Recuperation du model dans la liste
  const model = InitModels.modelsList.get(modelPath);
  if (!model) {
    return res.status(400).json("Error Path !");
  }
  InitModels.setModel(model);
  next();
};
//Pour sauvegarder le nom du model afin de pouvoir l'utiliser dans les reponses de requete (msg)
export class NameModelPathSave {
  private static nameModel: string = "";

  public static getNameModel(): string {
    return this.nameModel;
  }
  public static setNameModel(nameModel: string): void {
    this.nameModel = nameModel;
  }
}
