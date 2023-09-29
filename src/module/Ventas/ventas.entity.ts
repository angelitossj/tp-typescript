import { Schema } from "mongoose"
import { ObjectId } from "mongoose";
export interface Ventas{
    fecha:Date;
    idProducto: any;
    idCliente: any;
    cantidad:number
    total:number;
    isActive?:boolean
    
}