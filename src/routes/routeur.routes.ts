import { Request, Response } from "express";
import entitieRoutes from "./routeEntities/route.path";
import RouterCtrlPath from "./routeurController/router.crtl.path";
import sign from "./sign/sign";

export default (app: any) => {
  app.post("/api/clinique/signUp/", sign.signUp);
  app.post("/api/clinique/signIn/", sign.signIn);
  app.use("/api/clinique/:modelPath/", RouterCtrlPath, entitieRoutes);
  app.use("**/**", (req: Request, res: Response) => {
    res.status(404).json("Cette route n'existe pas !");
  });
};
