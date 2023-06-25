import express = require("express");
import { AppDataSource } from "./data-source"
import helmet from "helmet";
import cors = require("cors");
import route from "./Routes";

const port=process.env.port || 3000;


AppDataSource.initialize().then(async () => {

    const app=express();
    app.use(helmet());
    app.use(cors());
    app.use(express.json());


    app.use('',route)

    app.listen(port,()=>{
        console.log(`Servidor corriendo el puerto ${port}`)});


    


}).catch(error => console.log(error))
