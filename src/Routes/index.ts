
import { Router } from "express";
import cliente from "./cliente";
import producto from "./producto";
import detalle from "./detalle";
import vendedor from "./vendedor";
import proveedor from "./proveedor";
import cabecera from "./cabecera";



const route=Router();


route.use('/Cliente', cliente)
route.use('/Detalle', detalle)
route.use('/Producto',producto)
route.use('/Vendedor',vendedor)
route.use('/Proveedor',proveedor)
route.use('/Cabecera', cabecera)


export default route;