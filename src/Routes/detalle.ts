import { Router } from "express";
import CabeceraController from "../Controller/CabeceraController";
import DetalleController from "../Controller/DetalleController";


const route = Router();

route.get('',DetalleController.getAll);
route.get('',DetalleController.getById);

export default route;