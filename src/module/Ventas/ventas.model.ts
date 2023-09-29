import { Schema,model } from "mongoose";
import { Ventas } from "./ventas.entity";
import { booleanDefaultTrue, numberRequired } from "../../types/mongo.types";
import { ObjectId } from "mongoose";

const VentasSchemaMongo= new Schema<Ventas>({
    fecha:{
        type:Date
    },
    idProducto:{
        type:Schema.Types.ObjectId,
        ref:"productos",
        
    },
    idCliente:{
        type:Schema.Types.ObjectId,
        ref:"clientes",
        
    },
    cantidad:numberRequired,
    total:{
        type:Number
    },
    isActive:booleanDefaultTrue
},{
    versionKey: false,
    timestamps: true
})

export const VentasModelMongo= model<Ventas>("Ventas",VentasSchemaMongo)
