import { Router } from "express";
import ProveedorController from "../Controller/ProveedorController";


const route = Router();

route.get('',ProveedorController.getAll);
route.get('',ProveedorController.getById);

export default route;