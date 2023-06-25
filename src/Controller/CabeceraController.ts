import { Request, Response } from "express";

export class CabeceraController{

    static getAll=async(req:Request, resp:Response)=>{

        return resp.status(200).json({mensaje:"Hola"});

    }


    static getById=async(req:Request, resp:Response)=>{
        return resp.status(200).json({mensaje:"Adios"});
    } 

}

export default CabeceraController;