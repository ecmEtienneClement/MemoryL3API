import { NextFunction, Request, Response } from "express";
import InitModels from "../../models/initModels/initModels";
import { NameModels } from "../../models/initModels/nameModels";

export default (req: Request, res: Response, next: NextFunction) => {
  const modelPath = req.params.modelPath;
  if (modelPath == NameModels.personnel && req.method == "POST") {
    return res.status(400).json("Error Sign !");
  }
  const model = InitModels.modelsList.get(modelPath);
  if (!model) {
    return res.status(400).json("Error Path !");
  }
  InitModels.setModel(model);
  next();
};
