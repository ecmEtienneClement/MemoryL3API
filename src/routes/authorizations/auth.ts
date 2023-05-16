import { Request, Response } from "express";
import { IToken } from "./TokenInterface";
import jwt from "jsonwebtoken";
import { env } from "process";
import dotenv from "dotenv";
dotenv.config();

//
export default (req: Request, res: Response, next: any) => {
  try {
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
    const userIpToken: string = tokenVerify.ip;
    const userUserAgentToken: string = tokenVerify.userAg;
    //INFO URL
    const userIdReq = req.query.id;
    const userEmailReq = req.query.em;
    const userIpReq = req.ip;
    const userUserAgentReq = req.headers["user-agent"];
    //Verify data in Token and query URL
    if (
      userIdToken != userIdReq ||
      userEmailToken != userEmailReq ||
      userIpToken != userIpReq ||
      userUserAgentToken != userUserAgentReq
    ) {
      throw new Error();
    } else {
      next();
    }
  } catch (error) {
    res.status(403).json({
      message: "Token invalide veillez générer un nouveau token.",
    });
  }
};
