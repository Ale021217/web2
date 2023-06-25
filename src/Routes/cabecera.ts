import { Router } from "express";
import CabeceraController from "../Controller/CabeceraController";


const route = Router();

route.get('',CabeceraController.getAll);
route.get('',CabeceraController.getById);

export default route;