
import { Router } from "express";
import cliente from "./cliente";

const route=Router();


route.use('/Cliente', cliente)

export default route;