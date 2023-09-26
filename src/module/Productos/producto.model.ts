import { Schema, model } from 'mongoose'
import { Producto } from './producto.entity'
import { numberRequired, stringRequired, booleanDefaultTrue } from '../../types/mongo.types'

const ProductoSchemaMongo = new Schema<Producto>(
  {
    nombre: stringRequired,
    descripcion: stringRequired,
    precio: numberRequired,
    stock:numberRequired,
   
    // categoriaId: {
    //   type: Schema.Types.ObjectId
    // },
    // proveedorId: {
    //   type: Schema.Types.ObjectId
    // },
    isActive: booleanDefaultTrue
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export const ProductoModelMongo = model<Producto>('Producto', ProductoSchemaMongo)
