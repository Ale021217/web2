import { Router } from "express";
import ProveedorController from "../Controller/ProveedorController";
import VendedorController from "../Controller/VendedorController";


const route = Router();

route.get('',VendedorController.getAll);
route.get('',VendedorController.getById);

export default route;