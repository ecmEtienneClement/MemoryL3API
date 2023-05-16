import { Request, Response } from "express";
import { IToken } from "./TokenInterface";
import jwt from "jsonwebtoken";
import { env } from "process";
import dotenv from "dotenv";
import routesHelpers from "../route.helper";
import CtrLevelAccesModels from "../authorizations/CtrLevelAccesModels";

dotenv.config();

//
export default (req: Request, res: Response, next: any) => {
  try {
    const modelPath = routesHelpers.getModelPath(req);

    let tokenReqHeader: string = req.headers.authorization.split(" ")[1];
    let tokenVerify: IToken = <IToken>jwt.verify(
      tokenReqHeader,
      env.SECRET_KEY,
      {
        algorithms: ["HS384"],
        audience: "WEB APP",
      }
    );
    //INFO TOKEN
    const userIdToken: string = tokenVerify.id;
    const userEmailToken: string = tokenVerify.email;
    const userRoleToken: string = tokenVerify.role;
    const userIpToken: string = tokenVerify.ip;
    const userUserAgentToken: string = tokenVerify.userAg;
    //INFO URL
    const userIdReq = req.query.id;
    const userEmailReq = req.query.em;
    const userIpReq = req.ip;
    const userUserAgentReq = req.headers["user-agent"];
    const httpMethode = req.method;
    // Controle du nivau d'acces du profil
    CtrLevelAccesModels(httpMethode, userRoleToken, modelPath, next);
    //Si bon
    next();
  } catch (error) {
    res.status(403).json(error);
  }
};
