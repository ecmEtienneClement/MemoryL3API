import { Router } from "express";
import entitieCtrl from "./route.ctrl";

const entitieRoutes: Router = Router();
//
entitieRoutes.post("/", entitieCtrl.createEntitie);
entitieRoutes.get("/", entitieCtrl.getAllEntities);
entitieRoutes.get("/:id", entitieCtrl.getEntitieById);
entitieRoutes.put("/:id", entitieCtrl.updateEntitieById);
entitieRoutes.delete("/all", entitieCtrl.deleteAllEntities);
entitieRoutes.delete("/:id", entitieCtrl.deleteEntitieById);
//
export default entitieRoutes;
