import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import InitModels from "../../models/initModels/initModels";
import { NameModels } from "../../models/initModels/nameModels";
import routeErrors from "../route.errors";
import routesHelpers from "../route.helper";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "process";
import dotEnv from "dotenv";
dotEnv.config();

//TODO Sign Up
const signUp = async (req: Request, res: Response) => {
  try {
    console.log("ici..");

    const pwdHash = await routesHelpers.getHashPwd(req);
    const model = InitModels.modelsList.get(NameModels.personnel);
    if (!model) {
      return res.status(400).json("Error Path sign!");
    }
    const userSignUp = await model.create({ ...req.body, mdp: pwdHash });
    return res.status(201).json(userSignUp);
  } catch (error) {
    routeErrors(error, res);
  }
};

//TODO Sing In
const signIn = async (req: Request, res: Response) => {
  try {
    const email: string | null = req.body.email;
    const model = InitModels.modelsList.get(NameModels.personnel);
    if (!model) {
      return res.status(400).json("Error Path sign!");
    }
    const userSign = await model.findOne({ where: { email } });
    if (!userSign) {
      return res
        .status(404)
        .json({ message: "Désolé ce compte n'existe pas !" + email });
    }
    //
    const isEqual: boolean = await bcrypt.compare(
      req.body.mdp,
      userSign.getDataValue("mdp")
    );
    if (!isEqual) {
      return res.status(401).json({
        message: "Désolé e-mail ou mot de passe incorrecte !",
      });
    }
    //
    const id = userSign.getDataValue("id");
    const nom = userSign.getDataValue("nom");
    const prenom = userSign.getDataValue("prenom");
    const role = userSign.getDataValue("role");
    const ip = req.ip;
    const userAg = req.headers["user-agent"];
    res.json({
      id,
      nom,
      prenom,
      email,
      role,
      ip,
      userAg,
      token: jwt.sign({ id, email, role, ip, userAg }, env.SECRET_KEY, {
        expiresIn: "3h",
        algorithm: "HS384",
        audience: "WEB APP",
      }),
    });
  } catch (error) {
    routeErrors(error, res);
  }
};

//Data exported
const sign = {
  signUp,
  signIn,
};

export default sign;
