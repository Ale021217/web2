import { Router } from "express";
import CabeceraController from "../Controller/CabeceraController";
import DetalleController from "../Controller/DetalleController";
import ProductoController from "../Controller/ProductoController";


const route = Router();

route.get('',ProductoController.getAll);
route.get('',ProductoController.getById);

export default route;