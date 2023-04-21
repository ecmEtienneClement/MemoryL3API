import { Request, Response } from "express";
import InitModels from "../../models/initModels/initModels";
import routeErrors from "../route.errors";
import routesHelpers from "../route.helper";

//
const getModel = () => {
  return InitModels.getModel();
};
const messageEntitieNotFound = "Cet élement n'éxiste pas.";

//TODO CREATE ENTITIE
const createEntitie = async (req: Request, res: Response) => {
  try {
    const dataEntitie = await getModel().create({
      ...req.body,
    });
    return res.status(201).json(dataEntitie);
  } catch (error) {
    routeErrors(error, res);
  }
};

//TODO GET ALL ENTITIES
const getAllEntities = async (req: Request, res: Response) => {
  try {
    const dataEntities = await getModel().findAll({
      include: { all: true },
    });
    return res.json(dataEntities);
  } catch (error) {
    routeErrors(error, res);
  }
};

//TODO GET ENTITIE BY ID
const getEntitieById = async (req: Request, res: Response) => {
  try {
    const id = routesHelpers.getParamId(req);
    //
    const dataEntitie = await getModel().findByPk(id, {
      include: { all: true },
    });
    //
    return dataEntitie
      ? res.json(dataEntitie)
      : res.status(404).json({ message: messageEntitieNotFound });
  } catch (error) {
    routeErrors(error, res);
  }
};

//TODO UPDATE ENTITIE BY ID
const updateEntitieById = async (req: Request, res: Response) => {
  try {
    const id = routesHelpers.getParamId(req);
    const dataEntitie = await getModel().findByPk(id);
    //
    if (!dataEntitie) {
      return res.status(404).json({ message: messageEntitieNotFound });
    }
    //
    await dataEntitie.update({ ...req.body }, { where: { id } });
    return getEntitieById(req, res);
  } catch (error) {
    routeErrors(error, res);
  }
};

//TODO DELETE ENTITIE BY ID
const deleteEntitieById = async (req: Request, res: Response) => {
  try {
    const id = routesHelpers.getParamId(req);
    const dataEntitie = await getModel().findByPk(id);
    //
    if (!dataEntitie) {
      return res.status(404).json({ message: messageEntitieNotFound });
    }
    //
    await dataEntitie.destroy();
    return res.json({ deleted: true });
  } catch (error) {
    routeErrors(error, res);
  }
};

//TODO DELETE ALL ENTITIES
const deleteAllEntities = async (req: Request, res: Response) => {
  try {
    await getModel().drop();
    return res.json({ deleted: true });
  } catch (error) {
    routeErrors(error, res);
  }
};

//DATA ROUTES EXPORTED
const entitiesCtrl = {
  createEntitie,
  getAllEntities,
  getEntitieById,
  updateEntitieById,
  deleteEntitieById,
  deleteAllEntities,
};

export default entitiesCtrl;
