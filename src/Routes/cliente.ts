import { Router } from "express";
import ClienteController from "../Controller/ClienteController";


const route = Router();

route.get('',ClienteController.getAll);
route.get('',ClienteController.getById);

export default route;